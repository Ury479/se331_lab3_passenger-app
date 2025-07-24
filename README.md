# Passenger App - Vue.js Application

这是一个使用Vue.js 3、TypeScript、Vue Router和Pinia构建的乘客信息管理应用程序。

## 功能特性

### ✅ 已实现的功能

1. **乘客列表页面 (HomeView)**
   - 显示所有乘客的列表
   - 每个乘客卡片显示姓名、旅行次数和关联航空公司数量
   - 点击乘客卡片可查看详细信息

2. **乘客详情页面 (PassengerDetail)**
   - 显示特定乘客的详细信息
   - 显示乘客关联的所有航空公司信息
   - 点击航空公司卡片可查看航空公司详情

3. **航空公司详情页面 (AirlineDetail)**
   - 显示航空公司的完整信息
   - 包括logo、国家、成立时间、总部、网站等信息
   - 响应式设计，适配移动设备

4. **路由管理**
   - 嵌套路由支持乘客和航空公司详情页面
   - 404页面处理 (Page Not Found)
   - 资源未找到错误处理

5. **错误处理**
   - API请求失败处理
   - 404错误页面
   - 加载状态显示

## API 端点

应用程序使用以下正确的API端点：

### 乘客相关API
- **获取乘客列表 (分页)**: `GET https://api.instantwebtools.net/v1/passenger?page=0&size=10`
- **获取乘客详情**: `GET https://api.instantwebtools.net/v1/passenger/{id}`
- **创建乘客**: `POST https://api.instantwebtools.net/v1/passenger`
- **更新乘客 (完整)**: `PUT https://api.instantwebtools.net/v1/passenger/{id}`
- **更新乘客 (部分)**: `PATCH https://api.instantwebtools.net/v1/passenger/{id}`
- **删除乘客**: `DELETE https://api.instantwebtools.net/v1/passenger/{id}`

### 航空公司相关API
- **获取所有航空公司**: `GET https://api.instantwebtools.net/v1/airlines`
- **获取航空公司详情**: `GET https://api.instantwebtools.net/v1/airlines/{id}`
- **创建航空公司**: `POST https://api.instantwebtools.net/v1/airlines`

**备用方案**: 当API服务器不可用时，应用程序将自动使用本地模拟数据来演示所有功能。

## 技术栈

- **Vue 3** - 前端框架
- **TypeScript** - 类型安全
- **Vue Router** - 路由管理
- **Pinia** - 状态管理 (已配置但未使用)
- **Axios** - HTTP客户端
- **Vite** - 构建工具

## 项目设置

### 安装依赖
```bash
npm install
```

### 开发模式启动
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 类型检查
```bash
npm run type-check
```

### 代码检查
```bash
npm run lint
```

## 项目结构

```
src/
├── components/          # 可复用组件
├── views/              # 页面组件
│   ├── HomeView.vue           # 乘客列表页面
│   ├── PassengerDetail.vue    # 乘客详情页面
│   ├── AirlineDetail.vue      # 航空公司详情页面
│   ├── NotFound.vue           # 404页面
│   └── AboutView.vue          # 关于页面
├── router/             # 路由配置
├── services/           # API服务
│   └── PassengerService.ts    # 乘客相关API
├── types/              # TypeScript类型定义
│   └── passenger.ts           # 乘客和航空公司类型
├── stores/             # Pinia状态管理
└── assets/             # 静态资源
```

## 路由

- `/` - 乘客列表页面
- `/passenger/:id` - 乘客详情页面
- `/airline/:id` - 航空公司详情页面
- `/about` - 关于页面
- `/*` - 404页面 (所有未匹配的路由)

## 特殊处理

- **错误处理**: 实现了完善的错误处理机制，包括API错误和404页面
- **加载状态**: 所有API请求都有加载状态指示
- **响应式设计**: 所有页面都适配移动设备
- **类型安全**: 使用TypeScript确保类型安全

## 开发说明

该项目完成了课程要求的所有功能：

1. ✅ 创建Vue应用项目并推送到仓库
2. ✅ 从API获取乘客列表并在Home页面显示
3. ✅ 点击乘客名称显示乘客详情
4. ✅ 使用嵌套路由分离乘客详情和航空公司详情
5. ✅ 提供404页面处理无效URL
6. ✅ 提供资源未找到错误处理

## 预览

应用程序运行在 `http://localhost:5173/`

---

开发者: [您的姓名]  
课程: SE331 - Lab 3
