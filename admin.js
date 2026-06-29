        // 默认数据
        const defaultData = {
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
                { id: 1, name: '远征者 X1 皮卡背驼', category: 1, price: '¥128,000', image: 'https://aka.doubaocdn.com/s/ocxD1wodQU', desc: '专为长途越野设计的皮卡背驼房箱，采用航空级铝合金框架，轻量化与强度兼备。' },
                { id: 2, name: '自由者 S1 皮卡露营车', category: 3, price: '¥168,000', image: 'https://aka.doubaocdn.com/s/dNRu1wodQQ', desc: '基于皮卡底盘打造的一体式露营车，兼顾日常通勤与户外露营。' },
                { id: 3, name: '行者 T1 拖挂房车', category: 4, price: '¥98,000', image: 'https://aka.doubaocdn.com/s/V27P1wodQR', desc: '轻量化拖挂房车，适合家庭长途旅行。独立卫浴、厨房、卧室一应俱全。' }
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
            inquiries: [],
            configurator: {
                products: [
                    {
                        id: 'half',
                        name: '半箱',
                        price: 3149.10,
                        image: 'https://aka.doubaocdn.com/s/ocxD1wodQU',
                        desc: '轻量灵活的半箱式皮卡背驼，适合日常露营与短途旅行。标配齐全，升级选项丰富，按需加配打造专属户外装备。',
                        groups: [
                            {
                                id: 'half_standard',
                                name: '标准配置',
                                type: 'standard',
                                desc: '以下项目已包含在基础价格中，无需额外付费',
                                items: [
                                    { id: 'hs1', name: '远征者 X1 皮卡背驼基础套餐', desc: '含主体结构、底盘连接系统、基础内饰', price: 0, isDefault: true },
                                    { id: 'hs2', name: '全黑色外观', desc: '经典全黑涂装，硬朗大气', price: 0, isDefault: true },
                                    { id: 'hs3', name: '标准雨棚', desc: '标准宽度雨棚，满足日常遮阳需求', price: 0, isDefault: true },
                                    { id: 'hs4', name: '标准升顶门', desc: '经典升顶设计，操作便捷可靠', price: 0, isDefault: true },
                                    { id: 'hs5', name: '标准 1.6in / 4cm 床垫', desc: '基础厚度床垫，满足日常睡眠需求', price: 0, isDefault: true },
                                    { id: 'hs6', name: '魔术贴窗帘（长边+短边）', desc: '魔术贴固定，安装拆卸方便', price: 0, isDefault: true },
                                    { id: 'hs7', name: '标准前推拉窗', desc: '标准尺寸推拉窗，通风采光', price: 0, isDefault: true }
                                ]
                            },
                            {
                                id: 'half_color',
                                name: '外观颜色',
                                type: 'upgrade',
                                desc: '选择您喜欢的车身颜色方案',
                                items: [
                                    { id: 'hc1', name: '全黑色', desc: '经典全黑外观，硬朗大气', price: 0, isDefault: true },
                                    { id: 'hc2', name: '黑灰色', desc: '黑灰双色搭配，层次分明', price: 0, isDefault: false },
                                    { id: 'hc3', name: '白灰色', desc: '白灰配色，清新户外感', price: 0, isDefault: false },
                                    { id: 'hc4', name: '白黑色', desc: '黑白撞色，极简现代', price: 0, isDefault: false },
                                    { id: 'hc5', name: '全白色', desc: '纯净全白，极简风格', price: 0, isDefault: false },
                                    { id: 'hc6', name: '全灰色', desc: '低调全灰，户外质感', price: 0, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_awning',
                                name: '雨棚宽度',
                                type: 'upgrade',
                                desc: '选择适合您使用场景的雨棚尺寸',
                                items: [
                                    { id: 'ha1', name: '标准雨棚', desc: '标准宽度雨棚，满足日常使用', price: 0, isDefault: true },
                                    { id: 'ha2', name: '加宽雨棚 6.5ft / 1950mm', desc: '加宽至 1950mm，更大遮阳面积', price: 630, isDefault: false },
                                    { id: 'ha3', name: '加宽雨棚 6ft / 1800mm', desc: '加宽至 1800mm，兼顾空间与成本', price: 450, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_door',
                                name: '后门样式',
                                type: 'upgrade',
                                desc: '选择后门开启方式和样式',
                                items: [
                                    { id: 'hd1', name: '标准升顶门', desc: '经典升顶设计，操作便捷', price: 0, isDefault: true },
                                    { id: 'hd2', name: '双开仓门（移除尾门）', desc: '双开门设计，移除尾门后空间更大', price: 360, isDefault: false },
                                    { id: 'hd3', name: '加固单门带备胎架（移除尾门）', desc: '加固结构 + 备胎架，越野更安心', price: 900, isDefault: false },
                                    { id: 'hd4', name: '双开仓门（保留尾门）', desc: '双开门设计，保留原车尾门', price: 360, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_mattress',
                                name: '床垫厚度',
                                type: 'upgrade',
                                desc: '选择床垫厚度，提升睡眠舒适度',
                                items: [
                                    { id: 'hm1', name: '标准 1.6in / 4cm 床垫', desc: '标准厚度床垫，满足基础睡眠需求', price: 0, isDefault: true },
                                    { id: 'hm2', name: '3.1in / 8cm 加厚床垫', desc: '8cm 加厚，大幅提升睡眠舒适度', price: 142.20, isDefault: false },
                                    { id: 'hm3', name: '2.4in / 6cm 加厚床垫', desc: '6cm 适中厚度，性价比之选', price: 136.80, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_curtain',
                                name: '窗帘样式',
                                type: 'upgrade',
                                desc: '选择窗帘类型和安装方式',
                                items: [
                                    { id: 'hcu1', name: '魔术贴窗帘', desc: '魔术贴固定，安装拆卸方便快捷', price: 0, isDefault: true },
                                    { id: 'hcu2', name: '拉链窗帘', desc: '拉链闭合，密封性更好', price: 0, isDefault: false },
                                    { id: 'hcu3', name: '轨道窗帘', desc: '轨道滑动，开合顺滑体验佳', price: 90, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_window',
                                name: '窗户配置',
                                type: 'upgrade',
                                desc: '选择窗户类型和尺寸',
                                items: [
                                    { id: 'hw1', name: '标准前推拉窗', desc: '标准尺寸推拉窗，通风采光基础配置', price: 0, isDefault: true },
                                    { id: 'hw2', name: '加大前推拉窗', desc: '加大尺寸，更开阔的视野和通风', price: 135, isDefault: false },
                                    { id: 'hw3', name: '侧窗', desc: '增加侧面窗户，多角度采光', price: 90, isDefault: false }
                                ]
                            },
                            {
                                id: 'half_addons',
                                name: '可选配件',
                                type: 'addon',
                                desc: '按需加配，打造专属户外装备',
                                items: [
                                    { id: 'hao1', name: '内部 Molle 面板', desc: '车内模块化挂载系统，灵活收纳', price: 144.00, isDefault: false },
                                    { id: 'hao2', name: '外部 Molle 面板', desc: '车外挂载面板，拓展携带能力', price: 76.50, isDefault: false },
                                    { id: 'hao3', name: '外部挂钩', desc: '车外多功能挂钩，挂载装备', price: 76.50, isDefault: false },
                                    { id: 'hao4', name: '厨房套件', desc: '户外烹饪一体解决方案', price: 256.50, isDefault: false },
                                    { id: 'hao5', name: '雨棚罩', desc: '雨棚专用防护罩，防雨防晒', price: 349.20, isDefault: false },
                                    { id: 'hao6', name: '4个千斤顶', desc: '四角千斤顶，驻车更稳定', price: 450.00, isDefault: false },
                                    { id: 'hao7', name: '高级防污皮革内饰', desc: '防污处理皮革，易清洁耐磨损', price: 180.00, isDefault: false },
                                    { id: 'hao8', name: '排气扇', desc: '车内通风换气，保持空气清新', price: 180.00, isDefault: false },
                                    { id: 'hao9', name: '太阳能板 400W + 控制器', desc: '400W 太阳能供电系统，离网用电无忧', price: 261.00, isDefault: false },
                                    { id: 'hao10', name: '车顶行李架', desc: '车顶载物拓展，增加携带空间', price: 45.00, isDefault: false },
                                    { id: 'hao11', name: '保温内衬', desc: '车内保温层，冬暖夏凉', price: 153.90, isDefault: false },
                                    { id: 'hao12', name: '防凝露床垫', desc: '防凝露材质，告别潮湿困扰', price: 49.50, isDefault: false },
                                    { id: 'hao13', name: '270° 遮阳篷-基础版', desc: '自由站立扇形遮阳篷，基础尺寸', price: 321.30, isDefault: false },
                                    { id: 'hao14', name: '270° 遮阳篷-扩展版', desc: '自由站立扇形遮阳篷，扩展尺寸', price: 449.10, isDefault: false },
                                    { id: 'hao15', name: '布壳车侧遮阳篷', desc: '轻量布壳侧遮阳篷，快速搭建', price: 118.80, isDefault: false },
                                    { id: 'hao16', name: '超轻铝壳 270° 遮阳篷 2.5M', desc: '超轻铝合金外壳，2.5 米跨度', price: 686.70, isDefault: false },
                                    { id: 'hao17', name: '超轻铝壳 270° 遮阳篷 2M', desc: '超轻铝合金外壳，2 米跨度', price: 656.10, isDefault: false },
                                    { id: 'hao18', name: '270° 遮阳篷围布-扩展版', desc: '扩展版遮阳篷配套围布', price: 372.60, isDefault: false },
                                    { id: 'hao19', name: '270° 遮阳篷围布-基础版', desc: '基础版遮阳篷配套围布', price: 217.80, isDefault: false },
                                    { id: 'hao20', name: '车载水箱', desc: '车载储水系统，户外用水便捷', price: 162.00, isDefault: false },
                                    { id: 'hao21', name: '两步梯', desc: '便携两步梯，上下车更安全', price: 31.50, isDefault: false },
                                    { id: 'hao22', name: '柴油加热器', desc: '柴油取暖系统，寒冷天气必备', price: 180.00, isDefault: false },
                                    { id: 'hao23', name: '可调轮胎踏板', desc: '可调节高度轮胎踏板，方便上下', price: 39.60, isDefault: false },
                                    { id: 'hao24', name: '便携式空调', desc: '移动空调，夏日露营清凉保障', price: 378.00, isDefault: false },
                                    { id: 'hao25', name: '便携式户外即热热水器', desc: '即热式热水器，户外也能洗热水澡', price: 540.00, isDefault: false },
                                    { id: 'hao26', name: '便携式电站', desc: '大容量移动电源，多设备供电', price: 573.30, isDefault: false }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'full',
                        name: '全箱',
                        price: 8148.00,
                        image: 'https://aka.doubaocdn.com/s/dNRu1wodQQ',
                        desc: '全尺寸皮卡露营车，空间更大配置更全。整车焊接结构、航空铝板外壳、XPS保温层，适合长途穿越与深度户外探险。',
                        groups: [
                            {
                                id: 'full_standard',
                                name: '标准配置',
                                type: 'standard',
                                desc: '以下项目已包含在基础价格中，无需额外付费',
                                items: [
                                    { id: 'fs1', name: '手动升降系统', desc: '4套液压杆、4套剪刀斜撑，稳定可靠', price: 0, isDefault: true },
                                    { id: 'fs2', name: '整车焊接车身结构', desc: '整车焊接、外箱5系航空2mm铝板、内铝方管', price: 0, isDefault: true },
                                    { id: 'fs3', name: '尾部双铝制工具箱', desc: '尾部两个大铝制工具箱带洞洞板，双侧洞洞板', price: 0, isDefault: true },
                                    { id: 'fs4', name: 'XPS高密度阻燃保温板', desc: 'XPS高密度环保保温板，冬暖夏凉', price: 0, isDefault: true },
                                    { id: 'fs5', name: '4层结构升顶帐篷', desc: '4层结构窗户、升顶高度90cm，通风采光俱佳', price: 0, isDefault: true },
                                    { id: 'fs6', name: '房车专用双层亚克力窗', desc: '双层亚克力窗+隐私帘+纱窗×2', price: 0, isDefault: true },
                                    { id: 'fs7', name: '标准后门', desc: '经典后门设计，操作便捷可靠', price: 0, isDefault: true }
                                ]
                            },
                            {
                                id: 'full_lift',
                                name: '升降系统',
                                type: 'upgrade',
                                desc: '选择手动或电动升降系统',
                                items: [
                                    { id: 'fl1', name: '手动升降系统', desc: '4套液压杆、4套剪刀斜撑，稳定可靠', price: 0, isDefault: true },
                                    { id: 'fl2', name: '电动升顶系统（前后叉形升顶）', desc: '前后叉形电动升顶，一键升降，省力便捷', price: 1111.00, isDefault: false }
                                ]
                            },
                            {
                                id: 'full_window',
                                name: '窗户配置',
                                type: 'upgrade',
                                desc: '选择窗户升级方案',
                                items: [
                                    { id: 'fw1', name: '标配窗户', desc: '房车专用双层亚克力窗+隐私帘+纱窗×2', price: 0, isDefault: true },
                                    { id: 'fw2', name: '箱内前通风窗 600×300', desc: '增加箱内前通风窗，改善空气流通', price: 185.00, isDefault: false }
                                ]
                            },
                            {
                                id: 'full_color',
                                name: '外观颜色',
                                type: 'upgrade',
                                desc: '选择您喜欢的车身颜色方案',
                                items: [
                                    { id: 'fc1', name: '全黑色', desc: '经典全黑外观，硬朗大气', price: 0, isDefault: true },
                                    { id: 'fc2', name: '黑灰色', desc: '黑灰双色搭配，层次分明', price: 0, isDefault: false },
                                    { id: 'fc3', name: '白灰色', desc: '白灰配色，清新户外感', price: 0, isDefault: false },
                                    { id: 'fc4', name: '全白色', desc: '纯净全白，极简风格', price: 0, isDefault: false }
                                ]
                            },
                            {
                                id: 'full_addons',
                                name: '可选配件',
                                type: 'addon',
                                desc: '按需加配，打造专属户外装备',
                                items: [
                                    { id: 'fao1', name: '内部 Molle 面板', desc: '车内模块化挂载系统，灵活收纳', price: 144.00, isDefault: false },
                                    { id: 'fao2', name: '外部 Molle 面板', desc: '车外挂载面板，拓展携带能力', price: 76.50, isDefault: false },
                                    { id: 'fao3', name: '外部挂钩', desc: '车外多功能挂钩，挂载装备', price: 76.50, isDefault: false },
                                    { id: 'fao4', name: '厨房套件', desc: '户外烹饪一体解决方案', price: 256.50, isDefault: false },
                                    { id: 'fao5', name: '雨棚罩', desc: '雨棚专用防护罩，防雨防晒', price: 349.20, isDefault: false },
                                    { id: 'fao6', name: '4个千斤顶', desc: '四角千斤顶，驻车更稳定', price: 450.00, isDefault: false },
                                    { id: 'fao7', name: '高级防污皮革内饰', desc: '防污处理皮革，易清洁耐磨损', price: 180.00, isDefault: false },
                                    { id: 'fao8', name: '排气扇', desc: '车内通风换气，保持空气清新', price: 180.00, isDefault: false },
                                    { id: 'fao9', name: '太阳能板 400W + 控制器', desc: '400W 太阳能供电系统，离网用电无忧', price: 261.00, isDefault: false },
                                    { id: 'fao10', name: '车顶行李架', desc: '车顶载物拓展，增加携带空间', price: 45.00, isDefault: false },
                                    { id: 'fao11', name: '保温内衬', desc: '车内保温层，冬暖夏凉', price: 153.90, isDefault: false },
                                    { id: 'fao12', name: '防凝露床垫', desc: '防凝露材质，告别潮湿困扰', price: 49.50, isDefault: false },
                                    { id: 'fao13', name: '270° 遮阳篷-基础版', desc: '自由站立扇形遮阳篷，基础尺寸', price: 321.30, isDefault: false },
                                    { id: 'fao14', name: '270° 遮阳篷-扩展版', desc: '自由站立扇形遮阳篷，扩展尺寸', price: 449.10, isDefault: false },
                                    { id: 'fao15', name: '布壳车侧遮阳篷', desc: '轻量布壳侧遮阳篷，快速搭建', price: 118.80, isDefault: false },
                                    { id: 'fao16', name: '超轻铝壳 270° 遮阳篷 2.5M', desc: '超轻铝合金外壳，2.5 米跨度', price: 686.70, isDefault: false },
                                    { id: 'fao17', name: '超轻铝壳 270° 遮阳篷 2M', desc: '超轻铝合金外壳，2 米跨度', price: 656.10, isDefault: false },
                                    { id: 'fao18', name: '270° 遮阳篷围布-扩展版', desc: '扩展版遮阳篷配套围布', price: 372.60, isDefault: false },
                                    { id: 'fao19', name: '270° 遮阳篷围布-基础版', desc: '基础版遮阳篷配套围布', price: 217.80, isDefault: false },
                                    { id: 'fao20', name: '车载水箱', desc: '车载储水系统，户外用水便捷', price: 162.00, isDefault: false },
                                    { id: 'fao21', name: '两步梯', desc: '便携两步梯，上下车更安全', price: 31.50, isDefault: false },
                                    { id: 'fao22', name: '柴油加热器', desc: '柴油取暖系统，寒冷天气必备', price: 180.00, isDefault: false },
                                    { id: 'fao23', name: '可调轮胎踏板', desc: '可调节高度轮胎踏板，方便上下', price: 39.60, isDefault: false },
                                    { id: 'fao24', name: '便携式空调', desc: '移动空调，夏日露营清凉保障', price: 378.00, isDefault: false },
                                    { id: 'fao25', name: '便携式户外即热热水器', desc: '即热式热水器，户外也能洗热水澡', price: 540.00, isDefault: false },
                                    { id: 'fao26', name: '便携式电站', desc: '大容量移动电源，多设备供电', price: 573.30, isDefault: false }
                                ]
                            }
                        ]
                    }
                ]
            }
        };

        let data = {};

        // ========== 富文本编辑器功能 ==========
        function execCmd(command) {
            document.execCommand(command, false, null);
        }

        function insertImageToEditor(editorId) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.maxWidth = '100%';
                        img.draggable = true;
                        
                        const editor = document.querySelector('#' + editorId + ' .rich-editor-content');
                        editor.focus();
                        
                        // 在光标位置插入图片
                        const selection = window.getSelection();
                        if (selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            range.deleteContents();
                            range.insertNode(img);
                            // 移动光标到图片后面
                            range.setStartAfter(img);
                            range.setEndAfter(img);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        } else {
                            editor.appendChild(img);
                        }
                        
                        // 给图片添加拖拽排序功能
                        setupImageDrag(editor);
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        }

        function setupImageDrag(editor) {
            const images = editor.querySelectorAll('img');
            images.forEach(function(img) {
                img.draggable = true;
                img.ondragstart = function(e) {
                    e.dataTransfer.setData('text/plain', 'drag-image');
                    e.dataTransfer.setData('image-src', img.src);
                    window._dragImage = img;
                };
            });
            
            editor.ondragover = function(e) {
                e.preventDefault();
            };
            
            editor.ondrop = function(e) {
                e.preventDefault();
                if (window._dragImage) {
                    const range = document.caretRangeFromPoint(e.clientX, e.clientY);
                    if (range) {
                        range.deleteContents();
                        range.insertNode(window._dragImage);
                    }
                    window._dragImage = null;
                }
            };
        }

        // ========== 通用图片上传处理 ==========
        // 图片压缩函数
        function compressImage(file, maxWidth, quality) {
            return new Promise(function(resolve, reject) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;
                        
                        // 计算压缩后的尺寸
                        if (width > maxWidth) {
                            height = Math.round(height * maxWidth / width);
                            width = maxWidth;
                        }
                        
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);
                        
                        // 转成base64
                        resolve(canvas.toDataURL('image/jpeg', quality));
                    };
                    img.onerror = reject;
                    img.src = e.target.result;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        function handleImageUpload(event, previewId, inputId, removeBtnId) {
            const file = event.target.files[0];
            if (file) {
                // 压缩图片：最大宽度800px，质量0.7，确保能存入localStorage
                compressImage(file, 800, 0.7).then(function(compressedDataUrl) {
                    document.getElementById(inputId).value = compressedDataUrl;
                    const preview = document.getElementById(previewId);
                    preview.src = compressedDataUrl;
                    preview.style.display = 'block';
                    document.getElementById(removeBtnId).style.display = 'flex';
                    // 隐藏占位符
                    preview.parentElement.querySelector('.placeholder') && (preview.parentElement.querySelector('.placeholder').style.display = 'none');
                }).catch(function(err) {
                    console.error('图片处理失败', err);
                    alert('图片上传失败，请尝试更小的图片');
                });
            }
        }

        function handleRemoveImage(previewId, inputId, removeBtnId) {
            document.getElementById(inputId).value = '';
            const preview = document.getElementById(previewId);
            preview.src = '';
            preview.style.display = 'none';
            document.getElementById(removeBtnId).style.display = 'none';
            // 显示占位符
            preview.parentElement.querySelector('.placeholder') && (preview.parentElement.querySelector('.placeholder').style.display = 'block');
        }

        function setImagePreview(imageUrl, previewId, inputId, removeBtnId) {
            const input = document.getElementById(inputId);
            const preview = document.getElementById(previewId);
            const removeBtn = document.getElementById(removeBtnId);
            const placeholder = preview.parentElement.querySelector('.placeholder');
            
            input.value = imageUrl || '';
            if (imageUrl) {
                preview.src = imageUrl;
                preview.style.display = 'block';
                removeBtn.style.display = 'flex';
                placeholder && (placeholder.style.display = 'none');
            } else {
                preview.src = '';
                preview.style.display = 'none';
                removeBtn.style.display = 'none';
                placeholder && (placeholder.style.display = 'block');
            }
        }

        // ========== 产品图片上传 ==========
        function uploadProductImage(event) {
            handleImageUpload(event, 'productImagePreview', 'productImage', 'productImageRemove');
        }
        function removeProductImage() {
            handleRemoveImage('productImagePreview', 'productImage', 'productImageRemove');
        }

        // ========== 分类图标上传 ==========
        function uploadCategoryIcon(event) {
            handleImageUpload(event, 'categoryIconPreview', 'categoryIcon', 'categoryIconRemove');
        }
        function removeCategoryIcon() {
            handleRemoveImage('categoryIconPreview', 'categoryIcon', 'categoryIconRemove');
        }

        // ========== 案例图片上传 ==========
        function uploadCaseImage(event) {
            handleImageUpload(event, 'caseImagePreview', 'caseImage', 'caseImageRemove');
        }
        function removeCaseImage() {
            handleRemoveImage('caseImagePreview', 'caseImage', 'caseImageRemove');
        }

        // ========== 配置器产品图片上传 ==========
        function uploadConfigProductImage(event) {
            handleImageUpload(event, 'configProductImagePreview', 'configProductImage', 'configProductImageRemove');
        }
        function removeConfigProductImage() {
            handleRemoveImage('configProductImagePreview', 'configProductImage', 'configProductImageRemove');
        }

        // ========== 配置分组图片上传 ==========
        function uploadConfigGroupImage(event) {
            handleImageUpload(event, 'configGroupImagePreview', 'configGroupImage', 'configGroupImageRemove');
        }
        function removeConfigGroupImage() {
            handleRemoveImage('configGroupImagePreview', 'configGroupImage', 'configGroupImageRemove');
        }

        // ========== 配置选项图片上传 ==========
        function uploadConfigItemImage(event) {
            handleImageUpload(event, 'configItemImagePreview', 'configItemImage', 'configItemImageRemove');
        }
        function removeConfigItemImage() {
            handleRemoveImage('configItemImagePreview', 'configItemImage', 'configItemImageRemove');
        }

        // 初始化
        function init() {
            loadData();
            // 每次打开都需要登录，不记住登录状态
            document.getElementById('loginPage').style.display = 'flex';
            document.getElementById('adminLayout').classList.remove('active');
        }

        // 加载数据
        function loadData() {
            const saved = localStorage.getItem('freeman_data');
            if (saved) {
                data = JSON.parse(saved);
            } else {
                data = JSON.parse(JSON.stringify(defaultData));
                saveData();
            }
        }

        // 保存数据
        function saveData() {
            localStorage.setItem('freeman_data', JSON.stringify(data));
        }

        // 登录
        function login() {
            const password = document.getElementById('passwordInput').value;
            if (password === 'admin123') {
                localStorage.setItem('freeman_admin_logged_in', 'true');
                showAdmin();
            } else {
                alert('密码错误！默认密码：admin123');
            }
        }

        // 退出登录
        function logout() {
            localStorage.removeItem('freeman_admin_logged_in');
            document.getElementById('adminLayout').classList.remove('active');
            document.getElementById('loginPage').style.display = 'flex';
        }

        // 显示后台
        function showAdmin() {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('adminLayout').classList.add('active');
            updateStats();
            loadProducts();
            loadCategories();
            loadCases();
            loadFaqs();
            loadInquiries();
            loadConfigurator();
            loadSettings();
            updateLangLabel();
        }

        // 切换页面
        function switchPage(page, element) {
            document.querySelectorAll('.page-section').forEach(function(p) {
                p.classList.remove('active');
            });
            document.getElementById('page-' + page).classList.add('active');

            document.querySelectorAll('.menu-item').forEach(function(m) {
                m.classList.remove('active');
            });
            if (element) {
                element.classList.add('active');
            }

            const titles = {
                dashboard: '仪表盘',
                products: '产品管理',
                categories: '分类管理',
                cases: '案例管理',
                faq: 'FAQ管理',
                configurator: '配置器管理',
                inquiries: '询价记录',
                settings: '全局设置'
            };
            document.getElementById('pageTitle').textContent = titles[page] || '';
        }

        // 更新统计
        function updateStats() {
            document.getElementById('statProducts').textContent = data.products.length;
            document.getElementById('statCases').textContent = data.cases.length;
            document.getElementById('statFaq').textContent = data.faqs.length;
            document.getElementById('statInquiries').textContent = data.inquiries.filter(function(i) { return i.status === 'unread'; }).length;
        }

        // 加载产品列表
        function loadProducts() {
            const tbody = document.getElementById('productsTable');
            tbody.innerHTML = data.products.map(function(p) {
                const cat = data.categories.find(function(c) { return c.id === p.category; });
                return '<tr>' +
                    '<td>' + p.name + '</td>' +
                    '<td>' + (cat ? cat.name : '-') + '</td>' +
                    '<td>' + p.price + '</td>' +
                    '<td><div class="action-btns">' +
                    '<button class="btn btn-sm btn-default" onclick="editProduct(' + p.id + ')">编辑</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteProduct(' + p.id + ')">删除</button>' +
                    '</div></td>' +
                    '</tr>';
            }).join('');
        }

        // 打开产品弹窗
        function openProductModal() {
            document.getElementById('productModalTitle').textContent = '添加产品';
            document.getElementById('productId').value = '';
            document.getElementById('productName').value = '';
            document.getElementById('productPrice').value = '';
            
            // 重置图片预览
            setImagePreview('', 'productImagePreview', 'productImage', 'productImageRemove');
            
            // 重置富文本编辑器
            document.getElementById('productDescContent').innerHTML = '';
            setupImageDrag(document.getElementById('productDescContent'));
            
            const select = document.getElementById('productCategory');
            select.innerHTML = data.categories.map(function(c) {
                const iconImg = c.icon && c.icon.startsWith('http') || c.icon && c.icon.startsWith('data:') 
                    ? '<img src="' + c.icon + '" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;border-radius:2px;">' 
                    : (c.icon || '📦');
                return '<option value="' + c.id + '">' + iconImg + ' ' + c.name + '</option>';
            }).join('');
            
            openModal('productModal');
        }

        // 编辑产品
        function editProduct(id) {
            const product = data.products.find(function(p) { return p.id === id; });
            if (!product) return;

            document.getElementById('productModalTitle').textContent = '编辑产品';
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productPrice').value = product.price;
            
            // 设置图片预览
            setImagePreview(product.image, 'productImagePreview', 'productImage', 'productImageRemove');
            
            // 设置富文本编辑器内容
            document.getElementById('productDescContent').innerHTML = product.desc || '';
            setupImageDrag(document.getElementById('productDescContent'));

            const select = document.getElementById('productCategory');
            select.innerHTML = data.categories.map(function(c) {
                const iconImg = c.icon && c.icon.startsWith('http') || c.icon && c.icon.startsWith('data:') 
                    ? '<img src="' + c.icon + '" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;border-radius:2px;">' 
                    : (c.icon || '📦');
                return '<option value="' + c.id + '"' + (c.id === product.category ? ' selected' : '') + '>' + iconImg + ' ' + c.name + '</option>';
            }).join('');

            openModal('productModal');
        }

        // 保存产品
        function saveProduct() {
            const id = document.getElementById('productId').value;
            const name = document.getElementById('productName').value;
            const category = parseInt(document.getElementById('productCategory').value);
            const price = document.getElementById('productPrice').value;
            const image = document.getElementById('productImage').value;
            const desc = document.getElementById('productDescContent').innerHTML;

            if (!name) {
                alert('请输入产品名称');
                return;
            }

            if (id) {
                const product = data.products.find(function(p) { return p.id === parseInt(id); });
                if (product) {
                    product.name = name;
                    product.category = category;
                    product.price = price;
                    product.image = image;
                    product.desc = desc;
                }
            } else {
                data.products.push({
                    id: Date.now(),
                    name: name,
                    category: category,
                    price: price,
                    image: image,
                    desc: desc
                });
            }

            saveData();
            loadProducts();
            updateStats();
            closeModal('productModal');
        }

        // 删除产品
        function deleteProduct(id) {
            if (confirm('确定要删除这个产品吗？')) {
                data.products = data.products.filter(function(p) { return p.id !== id; });
                saveData();
                loadProducts();
                updateStats();
            }
        }

        // 加载分类列表
        function loadCategories() {
            const tbody = document.getElementById('categoriesTable');
            tbody.innerHTML = data.categories.map(function(c) {
                const count = data.products.filter(function(p) { return p.category === c.id; }).length;
                let iconHtml = '';
                if (c.icon && (c.icon.startsWith('http') || c.icon.startsWith('data:'))) {
                    iconHtml = '<img src="' + c.icon + '" class="category-icon-img" alt="">';
                } else {
                    iconHtml = '<span style="font-size: 24px;">' + (c.icon || '📦') + '</span>';
                }
                return '<tr>' +
                    '<td>' + iconHtml + '</td>' +
                    '<td>' + c.name + '</td>' +
                    '<td>' + count + '</td>' +
                    '<td><div class="action-btns">' +
                    '<button class="btn btn-sm btn-default" onclick="editCategory(' + c.id + ')">编辑</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteCategory(' + c.id + ')">删除</button>' +
                    '</div></td>' +
                    '</tr>';
            }).join('');
        }

        // 打开分类弹窗
        function openCategoryModal() {
            document.getElementById('categoryModalTitle').textContent = '添加分类';
            document.getElementById('categoryId').value = '';
            document.getElementById('categoryName').value = '';
            setImagePreview('', 'categoryIconPreview', 'categoryIcon', 'categoryIconRemove');
            openModal('categoryModal');
        }

        // 编辑分类
        function editCategory(id) {
            const cat = data.categories.find(function(c) { return c.id === id; });
            if (!cat) return;

            document.getElementById('categoryModalTitle').textContent = '编辑分类';
            document.getElementById('categoryId').value = cat.id;
            document.getElementById('categoryName').value = cat.name;
            setImagePreview(cat.icon, 'categoryIconPreview', 'categoryIcon', 'categoryIconRemove');
            openModal('categoryModal');
        }

        // 保存分类
        function saveCategory() {
            const id = document.getElementById('categoryId').value;
            const name = document.getElementById('categoryName').value;
            const icon = document.getElementById('categoryIcon').value;

            if (!name) {
                alert('请输入分类名称');
                return;
            }

            if (id) {
                const cat = data.categories.find(function(c) { return c.id === parseInt(id); });
                if (cat) {
                    cat.name = name;
                    cat.icon = icon;
                }
            } else {
                data.categories.push({
                    id: Date.now(),
                    name: name,
                    icon: icon
                });
            }

            saveData();
            loadCategories();
            loadProducts();
            closeModal('categoryModal');
        }

        // 删除分类
        function deleteCategory(id) {
            if (confirm('确定要删除这个分类吗？')) {
                data.categories = data.categories.filter(function(c) { return c.id !== id; });
                saveData();
                loadCategories();
                loadProducts();
            }
        }

        // 加载案例列表
        function loadCases() {
            const tbody = document.getElementById('casesTable');
            tbody.innerHTML = data.cases.map(function(c) {
                return '<tr>' +
                    '<td>' + c.title + '</td>' +
                    '<td><span class="badge badge-info">' + c.tag + '</span></td>' +
                    '<td>' + c.user + '（' + c.location + '）</td>' +
                    '<td><div class="action-btns">' +
                    '<button class="btn btn-sm btn-default" onclick="editCase(' + c.id + ')">编辑</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteCase(' + c.id + ')">删除</button>' +
                    '</div></td>' +
                    '</tr>';
            }).join('');
        }

        // 打开案例弹窗
        function openCaseModal() {
            document.getElementById('caseModalTitle').textContent = '添加案例';
            document.getElementById('caseId').value = '';
            document.getElementById('caseTitle').value = '';
            document.getElementById('caseTag').value = '';
            document.getElementById('caseUser').value = '';
            document.getElementById('caseLocation').value = '';
            
            // 重置图片预览
            setImagePreview('', 'caseImagePreview', 'caseImage', 'caseImageRemove');
            
            // 重置富文本编辑器
            document.getElementById('caseDescContent').innerHTML = '';
            setupImageDrag(document.getElementById('caseDescContent'));
            
            openModal('caseModal');
        }

        // 编辑案例
        function editCase(id) {
            const item = data.cases.find(function(c) { return c.id === id; });
            if (!item) return;

            document.getElementById('caseModalTitle').textContent = '编辑案例';
            document.getElementById('caseId').value = item.id;
            document.getElementById('caseTitle').value = item.title;
            document.getElementById('caseTag').value = item.tag;
            document.getElementById('caseUser').value = item.user;
            document.getElementById('caseLocation').value = item.location;
            
            // 设置图片预览
            setImagePreview(item.image, 'caseImagePreview', 'caseImage', 'caseImageRemove');
            
            // 设置富文本编辑器内容
            document.getElementById('caseDescContent').innerHTML = item.desc || '';
            setupImageDrag(document.getElementById('caseDescContent'));
            
            openModal('caseModal');
        }

        // 保存案例
        function saveCase() {
            const id = document.getElementById('caseId').value;
            const title = document.getElementById('caseTitle').value;
            const tag = document.getElementById('caseTag').value;
            const image = document.getElementById('caseImage').value;
            const desc = document.getElementById('caseDescContent').innerHTML;
            const user = document.getElementById('caseUser').value;
            const location = document.getElementById('caseLocation').value;

            if (!title) {
                alert('请输入案例标题');
                return;
            }

            if (id) {
                const item = data.cases.find(function(c) { return c.id === parseInt(id); });
                if (item) {
                    item.title = title;
                    item.tag = tag;
                    item.image = image;
                    item.desc = desc;
                    item.user = user;
                    item.location = location;
                }
            } else {
                data.cases.push({
                    id: Date.now(),
                    title: title,
                    tag: tag,
                    image: image,
                    desc: desc,
                    user: user,
                    location: location
                });
            }

            saveData();
            loadCases();
            updateStats();
            closeModal('caseModal');
        }

        // 删除案例
        function deleteCase(id) {
            if (confirm('确定要删除这个案例吗？')) {
                data.cases = data.cases.filter(function(c) { return c.id !== id; });
                saveData();
                loadCases();
                updateStats();
            }
        }

        // 加载FAQ列表
        function loadFaqs() {
            const tbody = document.getElementById('faqTable');
            tbody.innerHTML = data.faqs.map(function(f) {
                return '<tr>' +
                    '<td>' + f.question + '</td>' +
                    '<td><div class="action-btns">' +
                    '<button class="btn btn-sm btn-default" onclick="editFaq(' + f.id + ')">编辑</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteFaq(' + f.id + ')">删除</button>' +
                    '</div></td>' +
                    '</tr>';
            }).join('');
        }

        // 打开FAQ弹窗
        function openFaqModal() {
            document.getElementById('faqModalTitle').textContent = '添加FAQ';
            document.getElementById('faqId').value = '';
            document.getElementById('faqQuestion').value = '';
            
            // 重置富文本编辑器
            document.getElementById('faqAnswerContent').innerHTML = '';
            setupImageDrag(document.getElementById('faqAnswerContent'));
            
            openModal('faqModal');
        }

        // 编辑FAQ
        function editFaq(id) {
            const item = data.faqs.find(function(f) { return f.id === id; });
            if (!item) return;

            document.getElementById('faqModalTitle').textContent = '编辑FAQ';
            document.getElementById('faqId').value = item.id;
            document.getElementById('faqQuestion').value = item.question;
            
            // 设置富文本编辑器内容
            document.getElementById('faqAnswerContent').innerHTML = item.answer || '';
            setupImageDrag(document.getElementById('faqAnswerContent'));
            
            openModal('faqModal');
        }

        // 保存FAQ
        function saveFaq() {
            const id = document.getElementById('faqId').value;
            const question = document.getElementById('faqQuestion').value;
            const answer = document.getElementById('faqAnswerContent').innerHTML;

            if (!question) {
                alert('请输入问题');
                return;
            }

            if (id) {
                const item = data.faqs.find(function(f) { return f.id === parseInt(id); });
                if (item) {
                    item.question = question;
                    item.answer = answer;
                }
            } else {
                data.faqs.push({
                    id: Date.now(),
                    question: question,
                    answer: answer
                });
            }

            saveData();
            loadFaqs();
            updateStats();
            closeModal('faqModal');
        }

        // 删除FAQ
        function deleteFaq(id) {
            if (confirm('确定要删除这个FAQ吗？')) {
                data.faqs = data.faqs.filter(function(f) { return f.id !== id; });
                saveData();
                loadFaqs();
                updateStats();
            }
        }

        // 加载配置器
        function loadConfigurator() {
            // 配置器产品和分组
            const container = document.getElementById('configProductsList');
            let html = '';
            const typeLabels = { standard: '标配', upgrade: '升级', addon: '加配' };
            const typeBadges = { standard: 'badge-success', upgrade: 'badge-info', addon: 'badge-warning' };

            data.configurator.products.forEach(function(p) {
                html += '<div class="config-group-card" style="margin-bottom: 24px; border-left: 4px solid #c8663a;">' +
                    '<div class="config-group-header">' +
                    '<div class="config-group-title">' + p.name + ' - $' + p.price.toFixed(2) + '</div>' +
                    '<div class="action-btns">' +
                    '<button class="btn btn-sm btn-primary" onclick="openConfigGroupModal(\'' + p.id + '\')">+ 为该产品添加分组</button>' +
                    '<button class="btn btn-sm btn-default" onclick="editConfigProduct(\'' + p.id + '\')">编辑产品</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteConfigProduct(\'' + p.id + '\')">删除产品</button>' +
                    '</div>' +
                    '</div>' +
                    '<p style="font-size: 13px; color: #666; margin-bottom: 16px;">' + p.desc + '</p>';

                // 渲染该产品的分组
                if (p.groups && p.groups.length > 0) {
                    p.groups.forEach(function(g) {
                        // 分组图片
                        let groupImgHtml = '';
                        if (g.image && (g.image.startsWith('http') || g.image.startsWith('data:'))) {
                            groupImgHtml = '<img src="' + g.image + '" class="config-group-image" alt="">';
                        }
                        
                        html += '<div style="margin-left: 16px; margin-bottom: 12px; padding: 12px; background: #f9f9f9; border-radius: 8px;">' +
                            '<div class="config-group-header">' +
                            '<div class="config-group-title" style="font-size: 15px; display: flex; align-items: center;">' +
                            groupImgHtml +
                            g.name + ' <span class="badge ' + typeBadges[g.type] + '">' + typeLabels[g.type] + '</span>' +
                            '</div>' +
                            '<div class="action-btns">' +
                            '<button class="btn btn-sm btn-primary" onclick="openConfigItemModal(\'' + p.id + '\', \'' + g.id + '\')">+ 添加选项</button>' +
                            '<button class="btn btn-sm btn-default" onclick="editConfigGroup(\'' + p.id + '\', \'' + g.id + '\')">编辑分组</button>' +
                            '<button class="btn btn-sm btn-danger" onclick="deleteConfigGroup(\'' + p.id + '\', \'' + g.id + '\')">删除分组</button>' +
                            '</div>' +
                            '</div>' +
                            '<p style="font-size: 12px; color: #888; margin: 4px 0 10px 0;">' + g.desc + '</p>';

                        // 渲染分组下的选项
                        if (g.items && g.items.length > 0) {
                            g.items.forEach(function(item) {
                                // 选项图片
                                let itemImgHtml = '';
                                if (item.image && (item.image.startsWith('http') || item.image.startsWith('data:'))) {
                                    itemImgHtml = '<img src="' + item.image + '" class="config-item-image" alt="">';
                                }
                                
                                html += '<div class="config-item" style="padding: 8px 12px; background: #fff; border-radius: 6px; margin-bottom: 6px;">' +
                                    '<div class="config-item-info">' +
                                    itemImgHtml +
                                    '<span class="config-item-name" style="font-size: 13px;">' + item.name + '</span>' +
                                    (item.isDefault ? '<span class="badge badge-success" style="font-size: 11px;">默认</span>' : '') +
                                    '<span style="font-size: 12px; color: #666; margin-left: 8px;">' + item.desc + '</span>' +
                                    '</div>' +
                                    '<div style="display: flex; align-items: center; gap: 8px;">' +
                                    '<span class="config-item-price" style="font-size: 13px;">' + (item.price > 0 ? '+$' + item.price.toFixed(2) : '免费') + '</span>' +
                                    '<button class="btn btn-sm btn-default" style="padding: 2px 8px; font-size: 12px;" onclick="editConfigItem(\'' + p.id + '\', \'' + g.id + '\', \'' + item.id + '\')">编辑</button>' +
                                    '<button class="btn btn-sm btn-danger" style="padding: 2px 8px; font-size: 12px;" onclick="deleteConfigItem(\'' + p.id + '\', \'' + g.id + '\', \'' + item.id + '\')">删除</button>' +
                                    '</div>' +
                                    '</div>';
                            });
                        } else {
                            html += '<p style="font-size: 12px; color: #999; text-align: center; padding: 8px;">暂无选项，点击上方按钮添加</p>';
                        }
                        html += '</div>';
                    });
                } else {
                    html += '<p style="font-size: 13px; color: #999; text-align: center; padding: 12px; background: #f9f9f9; border-radius: 8px;">该产品暂无配置分组，点击上方按钮添加</p>';
                }
                html += '</div>';
            });

            // 添加全局添加产品按钮
            html += '<button class="btn btn-primary" style="width: 100%; padding: 12px;" onclick="openConfigProductModal()">+ 添加新的配置器产品</button>';
            container.innerHTML = html;
        }

        // 打开配置器产品弹窗
        function openConfigProductModal() {
            document.getElementById('configProductModalTitle').textContent = '添加配置器产品';
            document.getElementById('configProductId').value = '';
            document.getElementById('configProductName').value = '';
            document.getElementById('configProductPrice').value = '';
            document.getElementById('configProductDesc').value = '';
            
            // 重置图片预览
            setImagePreview('', 'configProductImagePreview', 'configProductImage', 'configProductImageRemove');
            
            openModal('configProductModal');
        }

        // 编辑配置器产品
        function editConfigProduct(id) {
            const item = data.configurator.products.find(function(p) { return p.id === id; });
            if (!item) return;

            document.getElementById('configProductModalTitle').textContent = '编辑配置器产品';
            document.getElementById('configProductId').value = item.id;
            document.getElementById('configProductName').value = item.name;
            document.getElementById('configProductPrice').value = item.price;
            document.getElementById('configProductDesc').value = item.desc;
            
            // 设置图片预览
            setImagePreview(item.image, 'configProductImagePreview', 'configProductImage', 'configProductImageRemove');
            
            openModal('configProductModal');
        }

        // 保存配置器产品
        function saveConfigProduct() {
            const id = document.getElementById('configProductId').value;
            const name = document.getElementById('configProductName').value;
            const price = parseFloat(document.getElementById('configProductPrice').value) || 0;
            const image = document.getElementById('configProductImage').value;
            const desc = document.getElementById('configProductDesc').value;

            if (!name) {
                alert('请输入产品名称');
                return;
            }

            if (id) {
                const item = data.configurator.products.find(function(p) { return p.id === id; });
                if (item) {
                    item.name = name;
                    item.price = price;
                    item.image = image;
                    item.desc = desc;
                }
            } else {
                data.configurator.products.push({
                    id: 'p_' + Date.now(),
                    name: name,
                    price: price,
                    image: image,
                    desc: desc,
                    groups: []
                });
            }

            saveData();
            loadConfigurator();
            closeModal('configProductModal');
        }

        // 删除配置器产品
        function deleteConfigProduct(id) {
            if (confirm('确定要删除这个产品吗？')) {
                data.configurator.products = data.configurator.products.filter(function(p) { return p.id !== id; });
                saveData();
                loadConfigurator();
            }
        }

        // 打开配置分组弹窗
        function openConfigGroupModal(productId) {
            document.getElementById('configGroupModalTitle').textContent = '添加配置分组';
            document.getElementById('configGroupId').value = '';
            // 填充产品下拉框
            const productSelect = document.getElementById('configGroupProductId');
            productSelect.innerHTML = data.configurator.products.map(function(p) {
                return '<option value="' + p.id + '">' + p.name + '</option>';
            }).join('');
            if (productId) {
                productSelect.value = productId;
            }
            document.getElementById('configGroupName').value = '';
            document.getElementById('configGroupType').value = 'upgrade';
            document.getElementById('configGroupDesc').value = '';
            
            // 重置图片预览
            setImagePreview('', 'configGroupImagePreview', 'configGroupImage', 'configGroupImageRemove');
            
            openModal('configGroupModal');
        }

        // 编辑配置分组
        function editConfigGroup(productId, groupId) {
            const product = data.configurator.products.find(function(p) { return p.id === productId; });
            if (!product) return;
            const group = product.groups.find(function(g) { return g.id === groupId; });
            if (!group) return;

            document.getElementById('configGroupModalTitle').textContent = '编辑配置分组';
            document.getElementById('configGroupId').value = group.id;
            // 填充产品下拉框
            const productSelect = document.getElementById('configGroupProductId');
            productSelect.innerHTML = data.configurator.products.map(function(p) {
                return '<option value="' + p.id + '">' + p.name + '</option>';
            }).join('');
            productSelect.value = productId;
            document.getElementById('configGroupName').value = group.name;
            document.getElementById('configGroupType').value = group.type;
            document.getElementById('configGroupDesc').value = group.desc;
            
            // 设置图片预览
            setImagePreview(group.image || '', 'configGroupImagePreview', 'configGroupImage', 'configGroupImageRemove');
            
            openModal('configGroupModal');
        }

        // 保存配置分组
        function saveConfigGroup() {
            const id = document.getElementById('configGroupId').value;
            const productId = document.getElementById('configGroupProductId').value;
            const name = document.getElementById('configGroupName').value;
            const type = document.getElementById('configGroupType').value;
            const desc = document.getElementById('configGroupDesc').value;
            const image = document.getElementById('configGroupImage').value;

            if (!productId) {
                alert('请选择所属产品');
                return;
            }
            if (!name) {
                alert('请输入分组名称');
                return;
            }

            const product = data.configurator.products.find(function(p) { return p.id === productId; });
            if (!product) return;
            if (!product.groups) product.groups = [];

            if (id) {
                const group = product.groups.find(function(g) { return g.id === id; });
                if (group) {
                    group.name = name;
                    group.type = type;
                    group.desc = desc;
                    group.image = image;
                }
            } else {
                product.groups.push({
                    id: 'g_' + Date.now(),
                    name: name,
                    type: type,
                    desc: desc,
                    image: image,
                    items: []
                });
            }

            saveData();
            loadConfigurator();
            closeModal('configGroupModal');
        }

        // 删除配置分组
        function deleteConfigGroup(productId, groupId) {
            if (confirm('确定要删除这个分组吗？分组下的所有配置项也会被删除。')) {
                const product = data.configurator.products.find(function(p) { return p.id === productId; });
                if (product) {
                    product.groups = product.groups.filter(function(g) { return g.id !== groupId; });
                    saveData();
                    loadConfigurator();
                }
            }
        }

        // 打开配置项弹窗
        function openConfigItemModal(productId, groupId) {
            document.getElementById('configItemModalTitle').textContent = '添加配置项';
            document.getElementById('configItemId').value = '';
            document.getElementById('configItemProductId').value = productId;
            document.getElementById('configItemGroupId').value = groupId;
            document.getElementById('configItemName').value = '';
            document.getElementById('configItemDesc').value = '';
            document.getElementById('configItemPrice').value = '0';
            document.getElementById('configItemDefault').value = 'false';
            
            // 重置图片预览
            setImagePreview('', 'configItemImagePreview', 'configItemImage', 'configItemImageRemove');
            
            openModal('configItemModal');
        }

        // 编辑配置项
        function editConfigItem(productId, groupId, itemId) {
            const product = data.configurator.products.find(function(p) { return p.id === productId; });
            if (!product) return;
            const group = product.groups.find(function(g) { return g.id === groupId; });
            if (!group) return;
            const item = group.items.find(function(i) { return i.id === itemId; });
            if (!item) return;

            document.getElementById('configItemModalTitle').textContent = '编辑配置项';
            document.getElementById('configItemId').value = item.id;
            document.getElementById('configItemProductId').value = productId;
            document.getElementById('configItemGroupId').value = groupId;
            document.getElementById('configItemName').value = item.name;
            document.getElementById('configItemDesc').value = item.desc;
            document.getElementById('configItemPrice').value = item.price;
            document.getElementById('configItemDefault').value = item.isDefault ? 'true' : 'false';
            
            // 设置图片预览
            setImagePreview(item.image || '', 'configItemImagePreview', 'configItemImage', 'configItemImageRemove');
            
            openModal('configItemModal');
        }

        // 保存配置项
        function saveConfigItem() {
            const id = document.getElementById('configItemId').value;
            const productId = document.getElementById('configItemProductId').value;
            const groupId = document.getElementById('configItemGroupId').value;
            const name = document.getElementById('configItemName').value;
            const desc = document.getElementById('configItemDesc').value;
            const price = parseFloat(document.getElementById('configItemPrice').value) || 0;
            const isDefault = document.getElementById('configItemDefault').value === 'true';
            const image = document.getElementById('configItemImage').value;

            if (!name) {
                alert('请输入配置项名称');
                return;
            }

            const product = data.configurator.products.find(function(p) { return p.id === productId; });
            if (!product) return;
            const group = product.groups.find(function(g) { return g.id === groupId; });
            if (!group) return;

            if (id) {
                const item = group.items.find(function(i) { return i.id === id; });
                if (item) {
                    item.name = name;
                    item.desc = desc;
                    item.price = price;
                    item.isDefault = isDefault;
                    item.image = image;
                }
            } else {
                group.items.push({
                    id: 'i_' + Date.now(),
                    name: name,
                    desc: desc,
                    price: price,
                    isDefault: isDefault,
                    image: image
                });
            }

            saveData();
            loadConfigurator();
            closeModal('configItemModal');
        }

        // 删除配置项
        function deleteConfigItem(productId, groupId, itemId) {
            if (confirm('确定要删除这个配置项吗？')) {
                const product = data.configurator.products.find(function(p) { return p.id === productId; });
                if (product) {
                    const group = product.groups.find(function(g) { return g.id === groupId; });
                    if (group) {
                        group.items = group.items.filter(function(i) { return i.id !== itemId; });
                        saveData();
                        loadConfigurator();
                    }
                }
            }
        }

        // 加载询价记录
        function loadInquiries() {
            const tbody = document.getElementById('inquiriesTable');
            const list = data.inquiries.slice().reverse();
            tbody.innerHTML = list.map(function(i) {
                return '<tr>' +
                    '<td>' + (i.name || '-') + '</td>' +
                    '<td>' + (i.phone || '-') + '</td>' +
                    '<td>' + (i.product || '-') + '</td>' +
                    '<td>' + (i.createdAt ? new Date(i.createdAt).toLocaleString() : '-') + '</td>' +
                    '<td><span class="badge ' + (i.status === 'unread' ? 'badge-warning' : 'badge-success') + '">' + (i.status === 'unread' ? '未读' : '已读') + '</span></td>' +
                    '<td><div class="action-btns">' +
                    '<button class="btn btn-sm btn-default" onclick="viewInquiry(' + i.id + ')">查看</button>' +
                    '<button class="btn btn-sm btn-danger" onclick="deleteInquiry(' + i.id + ')">删除</button>' +
                    '</div></td>' +
                    '</tr>';
            }).join('');
        }

        // 查看询价详情
        function viewInquiry(id) {
            const item = data.inquiries.find(function(i) { return i.id === id; });
            if (!item) return;

            item.status = 'read';
            saveData();
            loadInquiries();
            updateStats();

            const content = document.getElementById('inquiryDetailContent');
            content.innerHTML = '<div class="form-group"><label>姓名</label><p>' + (item.name || '-') + '</p></div>' +
                '<div class="form-group"><label>电话</label><p>' + (item.phone || '-') + '</p></div>' +
                '<div class="form-group"><label>邮箱</label><p>' + (item.email || '-') + '</p></div>' +
                '<div class="form-group"><label>感兴趣的产品</label><p>' + (item.product || '-') + '</p></div>' +
                '<div class="form-group"><label>所在地区</label><p>' + (item.location || '-') + '</p></div>' +
                '<div class="form-group"><label>留言内容</label><p>' + (item.message || '-') + '</p></div>' +
                '<div class="form-group"><label>提交时间</label><p>' + (item.createdAt ? new Date(item.createdAt).toLocaleString() : '-') + '</p></div>';

            openModal('inquiryDetailModal');
        }

        // 删除询价
        function deleteInquiry(id) {
            if (confirm('确定要删除这条询价记录吗？')) {
                data.inquiries = data.inquiries.filter(function(i) { return i.id !== id; });
                saveData();
                loadInquiries();
                updateStats();
            }
        }

        // 加载设置
        function loadSettings() {
            document.getElementById('settingSiteName').value = data.config.siteName || '';
            document.getElementById('settingPageTitle').value = data.config.pageTitle || '';
            document.getElementById('settingPhone').value = data.config.phone || '';
            document.getElementById('settingEmail').value = data.config.email || '';
            document.getElementById('settingAddress').value = data.config.address || '';
            document.getElementById('settingLogo').value = data.config.logo || '';
            document.getElementById('settingHero').value = data.config.heroImage || '';
            document.getElementById('settingHeroTitle').value = data.config.heroTitle || '';
            document.getElementById('settingHeroSubtitle').value = data.config.heroSubtitle || '';

            if (data.config.englishMode) {
                document.getElementById('langToggle').classList.add('active');
            } else {
                document.getElementById('langToggle').classList.remove('active');
            }

            if (data.config.logo) {
                document.getElementById('logoPreview').src = data.config.logo;
                document.getElementById('logoPreview').style.display = 'block';
            }
            if (data.config.heroImage) {
                document.getElementById('heroPreview').src = data.config.heroImage;
                document.getElementById('heroPreview').style.display = 'block';
            }
        }

        // 保存基本设置
        function saveBasicSettings() {
            data.config.siteName = document.getElementById('settingSiteName').value;
            data.config.pageTitle = document.getElementById('settingPageTitle').value;
            data.config.phone = document.getElementById('settingPhone').value;
            data.config.email = document.getElementById('settingEmail').value;
            data.config.address = document.getElementById('settingAddress').value;
            saveData();
            alert('设置已保存');
        }

        // 保存Logo设置
        function saveLogoSettings() {
            data.config.logo = document.getElementById('settingLogo').value;
            saveData();
            alert('Logo已保存');
        }

        // 上传Logo
        function uploadLogo(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('settingLogo').value = e.target.result;
                    document.getElementById('logoPreview').src = e.target.result;
                    document.getElementById('logoPreview').style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        }

        // 保存首页大图
        function saveHeroSettings() {
            data.config.heroImage = document.getElementById('settingHero').value;
            saveData();
            alert('首页大图已保存');
        }

        // 上传首页大图
        function uploadHero(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('settingHero').value = e.target.result;
                    document.getElementById('heroPreview').src = e.target.result;
                    document.getElementById('heroPreview').style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        }

        // 保存首页文案
        function saveHeroTextSettings() {
            data.config.heroTitle = document.getElementById('settingHeroTitle').value;
            data.config.heroSubtitle = document.getElementById('settingHeroSubtitle').value;
            saveData();
            alert('首页文案已保存');
        }

        // 切换语言设置
        function toggleLangSetting() {
            data.config.englishMode = !data.config.englishMode;
            saveData();
            loadSettings();
            updateLangLabel();
            alert(data.config.englishMode ? '已开启英文模式，前台页面将显示为英文' : '已关闭英文模式');
        }

        // 切换语言（顶部按钮）
        function toggleLanguage() {
            data.config.englishMode = !data.config.englishMode;
            saveData();
            updateLangLabel();
            loadSettings();
        }

        // 更新语言标签
        function updateLangLabel() {
            document.getElementById('langLabel').textContent = data.config.englishMode ? '中文模式' : '英文模式';
        }

        // 打开弹窗
        function openModal(id) {
            document.getElementById(id).classList.add('show');
        }

        // 关闭弹窗
        function closeModal(id) {
            document.getElementById(id).classList.remove('show');
        }

        // 点击弹窗外部关闭
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('show');
                }
            });
        });

        // 回车登录
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });

        // 初始化
        init();
