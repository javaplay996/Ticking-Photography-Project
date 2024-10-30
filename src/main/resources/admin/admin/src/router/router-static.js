import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import sheyingshi from '@/views/modules/sheyingshi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import discusssheyingfuwu from '@/views/modules/discusssheyingfuwu/list'
    import sheyingfuwu from '@/views/modules/sheyingfuwu/list'
    import discusssheyingzuopin from '@/views/modules/discusssheyingzuopin/list'
    import sheyingzuopin from '@/views/modules/sheyingzuopin/list'
    import shoufeileixing from '@/views/modules/shoufeileixing/list'
    import yuyuexinxi from '@/views/modules/yuyuexinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/forum',
        name: '摄影论坛',
        component: forum
      }
          ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
          ,{
	path: '/sheyingshi',
        name: '摄影师',
        component: sheyingshi
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
          ,{
	path: '/discusssheyingfuwu',
        name: '摄影服务评论',
        component: discusssheyingfuwu
      }
          ,{
	path: '/sheyingfuwu',
        name: '摄影服务',
        component: sheyingfuwu
      }
          ,{
	path: '/discusssheyingzuopin',
        name: '摄影作品评论',
        component: discusssheyingzuopin
      }
          ,{
	path: '/sheyingzuopin',
        name: '摄影作品',
        component: sheyingzuopin
      }
          ,{
	path: '/shoufeileixing',
        name: '收费类型',
        component: shoufeileixing
      }
          ,{
	path: '/yuyuexinxi',
        name: '预约信息',
        component: yuyuexinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
