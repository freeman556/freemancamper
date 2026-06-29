// 可视化页面编辑脚本
(function() {
    const isEditMode = new URLSearchParams(window.location.search).get('edit') === '1';
    const token = localStorage.getItem('adminToken');
    let editBar = null;
    let siteContent = {};
    let changed = false;

    // 生成元素唯一ID
    function getElementId(el) {
        if (el.dataset.editId) return el.dataset.editId;
        // 生成基于路径的ID
        const path = [];
        let current = el;
        while (current && current !== document.body) {
            const parent = current.parentElement;
            if (!parent) break;
            const index = Array.from(parent.children).indexOf(current);
            path.unshift(`${current.tagName.toLowerCase()}[${index}]`);
            current = parent;
        }
        const id = path.join('>');
        el.dataset.editId = id;
        return id;
    }

    // 加载保存的内容
    function loadSiteContent() {
        try {
            const saved = localStorage.getItem('site_content');
            if (saved) {
                siteContent = JSON.parse(saved);
                applyContent();
            }
        } catch (e) {
            console.error('加载内容失败', e);
        }
    }

    // 应用保存的内容到页面
    function applyContent() {
        for (const id in siteContent) {
            const el = document.querySelector(`[data-edit-id="${id}"]`);
            if (!el) {
                // 通过路径查找
                try {
                    const path = id.split('>');
                    let current = document.body;
                    for (const part of path) {
                        const match = part.match(/(\w+)\[(\d+)\]/);
                        if (!match) break;
                        const tag = match[1];
                        const index = parseInt(match[2]);
                        const children = Array.from(current.children).filter(c => c.tagName.toLowerCase() === tag);
                        current = children[index];
                        if (!current) break;
                    }
                    if (current) {
                        current.dataset.editId = id;
                        applyContentToEl(current, siteContent[id]);
                    }
                } catch (e) {}
                continue;
            }
            applyContentToEl(el, siteContent[id]);
        }
    }

    function applyContentToEl(el, content) {
        if (el.tagName === 'IMG') {
            if (content.src) el.src = content.src;
            if (content.alt) el.alt = content.alt;
        } else {
            if (content.text !== undefined) el.textContent = content.text;
        }
    }

    // 保存内容
    function saveContent() {
        if (!changed) {
            alert('没有需要保存的修改');
            return;
        }
        try {
            localStorage.setItem('site_content', JSON.stringify(siteContent));
            changed = false;
            alert('保存成功！');
        } catch (e) {
            alert('保存失败：' + e.message);
        }
    }

    // 上传图片（纯前端版本，读取本地文件为 base64）
    function uploadImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                resolve(e.target.result);
            };
            reader.onerror = function() {
                reject('图片读取失败');
            };
            reader.readAsDataURL(file);
        });
    }

    // 初始化编辑模式
    function initEditMode() {
        if (!token) {
            alert('请先登录后台');
            // 使用相对于网站根目录的路径
            const basePath = window.location.pathname.replace(/\/[^\/]*\.html.*$/, '/');
            window.location.href = basePath + 'admin/';
            return;
        }

        // 创建编辑工具栏
        editBar = document.createElement('div');
        editBar.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a1a2e;
            color: #fff;
            padding: 12px 16px;
            border-radius: 8px;
            z-index: 999999;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            display: flex;
            gap: 10px;
            align-items: center;
        `;
        editBar.innerHTML = `
            <span style="font-size: 14px; margin-right: 8px;">✏️ 编辑模式</span>
            <button id="saveEditBtn" style="padding: 6px 14px; background: #52c41a; color: #fff; border: none; border-radius: 4px; cursor: pointer;">保存修改</button>
            <button id="exitEditBtn" style="padding: 6px 14px; background: #ff4d4f; color: #fff; border: none; border-radius: 4px; cursor: pointer;">退出编辑</button>
        `;
        document.body.appendChild(editBar);

        document.getElementById('saveEditBtn').onclick = saveContent;
        document.getElementById('exitEditBtn').onclick = () => {
            if (changed && !confirm('有未保存的修改，确定退出吗？')) return;
            const url = new URL(window.location);
            url.searchParams.delete('edit');
            window.location.href = url.toString();
        };

        // 给所有可编辑元素加事件
        const editableSelectors = 'img, h1, h2, h3, h4, h5, h6, p, span, a, button, li, label';
        document.querySelectorAll(editableSelectors).forEach(el => {
            // 跳过编辑栏里的元素
            if (editBar.contains(el)) return;
            // 跳过脚本、样式
            if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) return;
            // 跳过隐藏元素
            if (el.offsetParent === null) return;
            // 跳过只有空白内容的元素
            if (el.tagName !== 'IMG' && el.textContent.trim() === '') return;

            el.style.transition = 'outline 0.2s';
            el.addEventListener('mouseenter', () => {
                el.style.outline = '2px dashed #667eea';
                el.style.outlineOffset = '2px';
                el.style.cursor = 'pointer';
            });
            el.addEventListener('mouseleave', () => {
                if (!el.dataset.editing) {
                    el.style.outline = '';
                }
            });

            // 图片点击上传
            if (el.tagName === 'IMG') {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = async () => {
                        const file = input.files[0];
                        if (!file) return;
                        try {
                            const url = await uploadImage(file);
                            el.src = url;
                            const id = getElementId(el);
                            siteContent[id] = { src: url, alt: el.alt || '' };
                            changed = true;
                            alert('图片替换成功，记得点击保存修改');
                        } catch (err) {
                            alert('上传失败：' + err);
                        }
                    };
                    input.click();
                });
            } else {
                // 文字点击编辑
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (el.dataset.editing) return;
                    el.dataset.editing = 'true';
                    el.contentEditable = 'true';
                    el.style.outline = '2px solid #52c41a';
                    el.style.background = '#fffbe6';
                    el.focus();

                    const saveText = () => {
                        el.contentEditable = 'false';
                        el.style.outline = '';
                        el.style.background = '';
                        delete el.dataset.editing;
                        const id = getElementId(el);
                        siteContent[id] = { text: el.textContent.trim() };
                        changed = true;
                    };

                    el.addEventListener('blur', saveText, { once: true });
                    el.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            el.blur();
                        }
                    });
                });
            }
        });
    }

    // 页面加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadSiteContent();
            if (isEditMode && token) {
                initEditMode();
            }
        });
    } else {
        loadSiteContent();
        if (isEditMode && token) {
            initEditMode();
        }
    }
})();
