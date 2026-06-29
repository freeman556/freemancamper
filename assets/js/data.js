// 数据管理模块
const DataManager = {
    // 默认数据
    defaultData: {
        config: {
            siteName: 'FREE MAN',
            logo: '',
            heroImage: '',
            heroTitle: '探索自然\n自由前行',
            heroSubtitle: '专注户外皮卡露营装备研发与制造，为每一位冒险者提供可靠的移动家园。从皮卡背驼到拖挂房车，FREE MAN 陪伴你走遍山川湖海。',
            contactEmail: 'contact@freeman.com',
            contactPhone: '400-888-8888'
        },
        categories: [
            { id: 1, name: '皮卡背驼', icon: '🚚' },
            { id: 2, name: '升顶露营车', icon: '🏕️' },
            { id: 3, name: '皮卡露营车', icon: '🛻' },
            { id: 4, name: '拖挂房车', icon: '🚐' },
            { id: 5, name: '车顶帐篷', icon: '⛺' },
            { id: 6, name: '配件', icon: '🔧' }
        ],
        products: [
            {
                id: 1,
                categoryId: 1,
                name: '远征者 X1 皮卡背驼',
                price: 128000,
                image: '',
                description: '专为长途越野设计的皮卡背驼房箱，采用航空级铝合金框架，轻量化与强度兼备。内部空间布局合理，配备独立睡眠区与储物系统。',
                features: ['航空级铝合金框架', '独立睡眠区', '大容量储物', '越野级底盘'],
                hot: true
            },
            {
                id: 2,
                categoryId: 3,
                name: '自由者 S1 皮卡露营车',
                price: 168000,
                image: '',
                description: '基于皮卡底盘打造的一体式露营车，兼顾日常通勤与户外露营。升顶设计带来超大内部空间，配备完整厨卫系统。',
                features: ['一体式设计', '升顶结构', '完整厨卫', '可日常通勤'],
                hot: true
            },
            {
                id: 3,
                categoryId: 4,
                name: '行者 T1 拖挂房车',
                price: 98000,
                image: '',
                description: '轻量化拖挂房车，适合家庭长途旅行。独立卫浴、厨房、卧室一应俱全，让旅途如家般舒适。',
                features: ['轻量化设计', '独立卫浴', '家庭友好', '稳定牵引'],
                hot: false
            }
        ],
        inquiries: []
    },

    // 获取数据
    getData() {
        const stored = localStorage.getItem('freeman_data');
        if (stored) {
            return JSON.parse(stored);
        }
        return JSON.parse(JSON.stringify(this.defaultData));
    },

    // 保存数据
    saveData(data) {
        localStorage.setItem('freeman_data', JSON.stringify(data));
    },

    // 获取配置
    getConfig() {
        return this.getData().config;
    },

    // 保存配置
    saveConfig(config) {
        const data = this.getData();
        data.config = { ...data.config, ...config };
        this.saveData(data);
    },

    // 获取分类
    getCategories() {
        return this.getData().categories;
    },

    // 保存分类
    saveCategories(categories) {
        const data = this.getData();
        data.categories = categories;
        this.saveData(data);
    },

    // 添加分类
    addCategory(category) {
        const data = this.getData();
        const newId = Math.max(0, ...data.categories.map(c => c.id)) + 1;
        category.id = newId;
        data.categories.push(category);
        this.saveData(data);
        return category;
    },

    // 更新分类
    updateCategory(id, updates) {
        const data = this.getData();
        const index = data.categories.findIndex(c => c.id === id);
        if (index !== -1) {
            data.categories[index] = { ...data.categories[index], ...updates };
            this.saveData(data);
            return data.categories[index];
        }
        return null;
    },

    // 删除分类
    deleteCategory(id) {
        const data = this.getData();
        data.categories = data.categories.filter(c => c.id !== id);
        this.saveData(data);
    },

    // 获取产品
    getProducts(categoryId = null) {
        const data = this.getData();
        if (categoryId) {
            return data.products.filter(p => p.categoryId === categoryId);
        }
        return data.products;
    },

    // 获取单个产品
    getProduct(id) {
        return this.getData().products.find(p => p.id === id);
    },

    // 添加产品
    addProduct(product) {
        const data = this.getData();
        const newId = Math.max(0, ...data.products.map(p => p.id)) + 1;
        product.id = newId;
        data.products.push(product);
        this.saveData(data);
        return product;
    },

    // 更新产品
    updateProduct(id, updates) {
        const data = this.getData();
        const index = data.products.findIndex(p => p.id === id);
        if (index !== -1) {
            data.products[index] = { ...data.products[index], ...updates };
            this.saveData(data);
            return data.products[index];
        }
        return null;
    },

    // 删除产品
    deleteProduct(id) {
        const data = this.getData();
        data.products = data.products.filter(p => p.id !== id);
        this.saveData(data);
    },

    // 提交询价
    submitInquiry(inquiry) {
        const data = this.getData();
        const newId = Math.max(0, ...data.inquiries.map(i => i.id)) + 1;
        inquiry.id = newId;
        inquiry.createdAt = new Date().toISOString();
        inquiry.status = 'unread';
        data.inquiries.push(inquiry);
        this.saveData(data);
        return inquiry;
    },

    // 获取询价列表
    getInquiries() {
        return this.getData().inquiries;
    },

    // 标记询价已读
    markInquiryRead(id) {
        const data = this.getData();
        const index = data.inquiries.findIndex(i => i.id === id);
        if (index !== -1) {
            data.inquiries[index].status = 'read';
            this.saveData(data);
        }
    },

    // 删除询价
    deleteInquiry(id) {
        const data = this.getData();
        data.inquiries = data.inquiries.filter(i => i.id !== id);
        this.saveData(data);
    },

    // 重置为默认数据
    resetData() {
        this.saveData(JSON.parse(JSON.stringify(this.defaultData)));
    }
};

// 通用工具函数
const Utils = {
    // 格式化价格
    formatPrice(price) {
        return '¥' + price.toLocaleString('zh-CN');
    },

    // 获取分类名称
    getCategoryName(categoryId) {
        const category = DataManager.getCategories().find(c => c.id === categoryId);
        return category ? category.name : '未分类';
    },

    // 图片占位符
    getPlaceholder(text = 'FREE MAN') {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <rect fill="#f0f0f0" width="400" height="300"/>
            <text fill="#999" font-family="sans-serif" font-size="24" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">${text}</text>
        </svg>`;
        return 'data:image/svg+xml,' + encodeURIComponent(svg);
    },

    // 显示消息
    showMessage(message, type = 'success') {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? '#52c41a' : '#ff4d4f'};
            color: #fff;
            border-radius: 6px;
            z-index: 9999;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
        `;
        msg.textContent = message;
        document.body.appendChild(msg);
        
        setTimeout(() => {
            msg.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => msg.remove(), 300);
        }, 2500);
    }
};

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
