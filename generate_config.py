#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成配置器产品数据
"""

import json

def generate_half_box():
    """生成半箱产品数据"""
    return {
        "id": "half",
        "name": "半箱",
        "price": 3149.10,
        "image": "https://aka.doubaocdn.com/s/ocxD1wodQU",
        "desc": "轻量灵活的半箱式皮卡背驼，适合日常露营与短途旅行。标配齐全，升级选项丰富，按需加配打造专属户外装备。",
        "groups": []
    }

def main():
    """主函数"""
    half = generate_half_box()
    print(json.dumps(half, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
