<template>
    <div id="app">
        <!--<img src="./assets/images/logo.png">-->
        <transition name="slide-left" mode="out-in">
            <router-view class="child-view"></router-view>
        </transition>
        <x-loading v-show="config.pageLoading"></x-loading>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        computed: {
            ...mapGetters(['config'])
        }
    }
</script>

<style lang="less">

    @import "assets/css/public";
    @import "assets/css/login_reg";
    @import "assets/css/home";
    /*@import "./assets/css/public.css";
    @import "./assets/css/login_reg.css";
    @import "./assets/css/home.css";*/

    html, body, #app {
        width:100%;
        height: 100%;
        overflow-x: hidden;
        font-size: 28 * @px;
    }

    /* 转场效果 */
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }

    /* 容器样式 */
    .child-view {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
        z-index: 1;
    }

    /* 一屏显示布局 */
    .viewbox-container, .viewbox {
        height: 100%;
        overflow:hidden;
    }

    .viewbox {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    /* 主菜单 */
    .mainNav {
        top: auto !important;
        bottom: 0;
    }

    /* 页面加载 */
    .vux-loading {
        position: relative;
        z-index: 5000
    }
</style>
