import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'

const Login = r => require.ensure([], () => r(require('@/views/login/login')), 'users');
const Home = r => require.ensure([], () => r(require('@/views/home/home')), 'navtab');
const Classify = r => require.ensure([], () => r(require('@/views/classify/classify')), 'navtab');
const Auslese = r => require.ensure([], () => r(require('@/views/auslese/auslese')), 'navtab');
const Notice = r => require.ensure([], () => r(require('@/views/notice/notice')), 'notice');
const NoticeDetail = r => require.ensure([], () => r(require('@/views/notice/noticeDetail/noticeDetail')), 'notice');
const test = r => require.ensure([], () => r(require('../views/test/test')), 'test');
const Mycenter = r => require.ensure([], () => r(require('@/views/mycenter/mycenter')), 'users');
const SystemMessage = r => require.ensure([], () => r(require('@/views/mycenter/systemMessage/systemMessage')), 'users');
const Chests = r => require.ensure([], () => r(require('@/views/mycenter/chests/chests')), 'users');



const Usercenter = r => require.ensure([], () => r(require('@/views/mycenter/userCenter/userCenter')), 'users');
const UserInfo = r => require.ensure([], () => r(require('@/views/mycenter/userInfo/userInfo')), 'users');
const SetUserName = r => require.ensure([], () => r(require('@/views/mycenter/setUserName/setUserName')), 'users');
const SetPhone = r => require.ensure([], () => r(require('@/views/mycenter/setPhone/setPhone')), 'users');

const myCollect = r => require.ensure([], () => r(require('@/views/mycenter/myCollect/myCollect')), 'user');


Vue.use(Router);

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/classify',
            name: 'classify',
            component: Classify
        },
        {
            path: '/auslese',
            name: 'auslese',
            component: Auslese
        },
        {
            path: '/notice',
            name: 'notice',
            //meta: { requiresAuth: true },
            component: Notice
        },
        {
            path: '/notice/:noticeId',
            name: 'noticeDetail',
            component: NoticeDetail
        },
        {

            path: '/test',
            name: 'test',
            component: test
        },
        {

            path: '/mycenter',
            name: 'mycenter',
            component: Mycenter,
            //meta: { requiresAuth: true },
            children: [{
                    path: '',
                    name: 'userCenter',
                    //meta: { requiresAuth: true },
                    component: Usercenter,
                },
                {
                    path: 'userInfo',
                    name: 'userInfo',
                    component: UserInfo,

                    children: [
                        {
                            path: 'setUserName',
                            name: 'setUserName',
                            component: SetUserName,
                        }
                    ]
                },
                {

                    path: 'myCollect',
                    name: 'myCollect',
                    component: myCollect
                },

                    children: [{
                        path: 'setUserName',
                        name: 'setUserName',
                        component: SetUserName,
                    }, {
                        path: 'setPhone',
                        name: 'setPhone',
                        component: SetPhone,
                    }]
                }, {
                    path: 'systemMessage',
                    name: 'systemMessage',
                    component: SystemMessage,
                },
                {
                    path: 'chests',
                    name: 'chests',
                    component: Chests,
                },
            ]
        },
        {
            path: '*',
            redirect: { name: 'home' }
        },

    ],
    //mode:'history'
});




export default router