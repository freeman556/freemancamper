// 右下角浮动询价按钮
(function() {
    // 检查当前页面是否是配置器页面，如果是则不显示
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'configurator.html') {
        return;
    }

    // 创建按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .floating-inquiry-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 56px;
            height: 56px;
            background: #b3541e;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(179, 84, 30, 0.4);
            z-index: 9999;
            transition: all 0.3s ease;
            text-decoration: none;
            border: none;
        }
        .floating-inquiry-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(179, 84, 30, 0.5);
            background: #9a4719;
        }
        .floating-inquiry-btn span {
            position: absolute;
            right: 68px;
            background: #1a1a1a;
            color: #fff;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
        }
        .floating-inquiry-btn:hover span {
            opacity: 1;
            visibility: visible;
            right: 72px;
        }
        @media (max-width: 768px) {
            .floating-inquiry-btn {
                width: 50px;
                height: 50px;
                bottom: 16px;
                right: 16px;
                font-size: 20px;
            }
            .floating-inquiry-btn span {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // 创建按钮
    const btn = document.createElement('a');
    btn.href = 'inquiry.html';
    btn.className = 'floating-inquiry-btn';
    btn.innerHTML = '💬<span>在线询价</span>';
    document.body.appendChild(btn);
})();
