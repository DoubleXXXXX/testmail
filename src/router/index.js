import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')

const download = () =>
    import ( /* webpackChunkName: "profile" */ 'views/profile/ChildrenViews/download/DownLoad.vue')
const login = () =>
    import ( /* webpackChunkName: "profile" */ 'views/profile/ChildrenViews/login/Login.vue')
const message = () =>
    import ( /* webpackChunkName: "profile" */ 'views/profile/ChildrenViews/messageBoard/MessageBoard.vue')
const reward = () =>
    import ( /* webpackChunkName: "profile" */ 'views/profile/ChildrenViews/reward/Reward.vue')

//安装插件
Vue.use(VueRouter)

//创建router
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile,
        children: [{
                path: 'download',
                component: download
            },
            {
                path: 'login',
                component: login
            },
            {
                path: 'message',
                component: message,
                meta: {
                    login: true
                }
            },
            {
                path: 'reward',
                component: reward
            },
        ]
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router