// 网站默认数据 - 部署后所有访问者都能看到的基础数据
// 管理员可以在后台修改数据，修改后的数据保存在浏览器 localStorage 中
// 如果需要让所有访问者看到修改后的内容，请导出数据并替换此文件后重新部署
// 如果运行了 Node.js 服务器（server.js），数据会自动从服务器同步

const SITE_DEFAULT_DATA = {
    config: {
        siteName: 'FREE MAN',
        pageTitle: 'FREE MAN - Pickup Camping Equipment',
        phone: '400-888-9999',
        email: 'info@freemanoutdoor.com',
        address: '中国浙江省杭州市余杭区户外装备产业园',
        logo: '',
        heroImage: 'https://aka.doubaocdn.com/s/xDQy1wodQS',
        heroTitle: '探索自然 自由前行',
        heroSubtitle: '专注户外皮卡露营装备研发与制造，为每一位冒险者提供可靠的移动家园。',
        heroDesc: '从皮卡背驼到拖挂房车，FREE MAN 陪伴你走遍山川湖海。',
        englishMode: false
    },
    categories: [
        { id: 1, name: '皮卡背驼', icon: 'https://aka.doubaocdn.com/s/ocxD1wodQU' },
        { id: 2, name: '升顶露营车', icon: 'https://aka.doubaocdn.com/s/dNRu1wodQQ' },
        { id: 3, name: '皮卡露营车', icon: 'https://aka.doubaocdn.com/s/V27P1wodQR' },
        { id: 4, name: '拖挂房车', icon: 'https://aka.doubaocdn.com/s/xDQy1wodQS' },
        { id: 5, name: '车顶帐篷', icon: 'https://aka.doubaocdn.com/s/ocxD1wodQU' },
        { id: 6, name: '配件', icon: 'https://aka.doubaocdn.com/s/dNRu1wodQQ' }
    ],
    products: [
        { id: 1, name: '远征者 X1 皮卡背驼', category: 1, price: '¥128,000', image: 'https://aka.doubaocdn.com/s/ocxD1wodQU', desc: '专为长途越野设计的皮卡背驼房箱，采用航空级铝合金框架，轻量化与强度兼备。', featured: true },
        { id: 2, name: '自由者 S1 皮卡露营车', category: 3, price: '¥168,000', image: 'https://aka.doubaocdn.com/s/dNRu1wodQQ', desc: '基于皮卡底盘打造的一体式露营车，兼顾日常通勤与户外露营。', featured: true },
        { id: 3, name: '行者 T1 拖挂房车', category: 4, price: '¥98,000', image: 'https://aka.doubaocdn.com/s/V27P1wodQR', desc: '轻量化拖挂房车，适合家庭长途旅行。独立卫浴、厨房、卧室一应俱全。', featured: true }
    ],
    cases: [
        { id: 1, title: '新疆自驾之旅', tag: '皮卡背驼', image: 'https://aka.doubaocdn.com/s/xDQy1wodQS', desc: '开着远征者X1穿越独库公路，从北疆到南疆，历时20天，行程8000公里。', user: '张先生', location: '山东 · 潍坊' },
        { id: 2, title: '家庭露营神器', tag: '拖挂房车', image: 'https://aka.doubaocdn.com/s/V27P1wodQR', desc: '一家四口的周末露营必备！行者T1空间大，有独立卫浴，孩子特别喜欢。', user: '李女士', location: '山东 · 青岛' },
        { id: 3, title: '越野穿越利器', tag: '皮卡露营车', image: 'https://aka.doubaocdn.com/s/dNRu1wodQQ', desc: '自由者S1兼顾了日常通勤和户外露营。平时开着上下班，周末直接去越野。', user: '王先生', location: '北京' }
    ],
    faqs: [
        { id: 1, question: '皮卡背驼房箱适合哪些车型？', answer: '我们的皮卡背驼房箱适用于市面上绝大多数主流皮卡车型，包括但不限于：丰田坦途、福特F-150、道奇公羊、长城炮、日产纳瓦拉等。' },
        { id: 2, question: '产品的质保期是多久？', answer: '我们的产品提供2年整车质保，终身维护服务。质保期内非人为损坏的质量问题，我们提供免费维修或更换配件服务。' },
        { id: 3, question: '可以定制吗？定制周期多长？', answer: '支持个性化定制，包括外观颜色、内部布局、功能配置等都可以根据您的需求进行调整。标准配置的产品现货供应，3-7天即可发货。' }
    ],
    inquiries: []
};

// 自动初始化：如果 localStorage 中没有数据，就用默认数据初始化
// 这样普通访问者第一次访问网站时也能看到完整内容
(function() {
    try {
        const existingData = localStorage.getItem('freeman_data');
        if (!existingData) {
            localStorage.setItem('freeman_data', JSON.stringify(SITE_DEFAULT_DATA));
            console.log('已初始化网站默认数据');
        }
    } catch (e) {
        console.warn('无法初始化网站数据', e);
    }

    // 尝试从服务器同步最新数据（后台静默执行）
    try {
        fetch('/api/site-content', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('API不可用');
        })
        .then(function(result) {
            if (result.success && result.data) {
                // 保存服务器数据到 localStorage
                localStorage.setItem('freeman_data', JSON.stringify(result.data));
                console.log('已从服务器同步最新数据');
            }
        })
        .catch(function(e) {
            // 服务器不可用，使用本地数据，静默失败
            console.log('服务器不可用，使用本地数据');
        });
    } catch (e) {
        console.warn('同步服务器数据失败', e);
    }
})();

// 获取网站数据 - 从 localStorage 读取
function getSiteData() {
    try {
        const saved = localStorage.getItem('freeman_data');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error('读取本地数据失败', e);
    }
    return null;
}

// 保存网站数据到 localStorage
function saveSiteData(data) {
    try {
        localStorage.setItem('freeman_data', JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('保存数据失败', e);
        return false;
    }
}

// 从服务器刷新数据（手动调用）
function refreshSiteData() {
    return new Promise(function(resolve, reject) {
        fetch('/api/site-content', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('API不可用');
        })
        .then(function(result) {
            if (result.success && result.data) {
                localStorage.setItem('freeman_data', JSON.stringify(result.data));
                console.log('已从服务器刷新数据');
                resolve(result.data);
            } else {
                reject(new Error('获取数据失败'));
            }
        })
        .catch(function(e) {
            console.warn('刷新数据失败', e);
            reject(e);
        });
    });
}
