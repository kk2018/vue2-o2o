<template>    <!-- 主导航菜单  -->
    <div class="mainNav is-fixed">
        <router-link v-for="(navItem, index) in navList" class="meun-item"
            :to="navItem.href+(navItem.returnUrl ? '' : '?meun='+(index+1))"
            :key="index"
            :class="[navItem.icon, currentNavIndex == (index + 1) ? 'on' : '']"
            :data-returnurl="navItem.returnUrl || navItem.href+'?meun='+(index+1)">
            <img :src="navItem.icon" alt="">
            {{ navItem.name }}
        </router-link>
    </div>
</template>

<script>
    import {getStyle} from '../../utils/dom'

    export default {
        props: {
            currentNavIndex: {
                type: [Number, String],
                default: 1
            },
            navList: {
                type: Array,
                default () {
                    return [
                        {
                            icon: 'i-home',
                            name: '首页',
                            href: 'home',
                            icon: 'http://111.204.241.100:8080/upload///town/20170911/9676e54d-efd1-4ec9-903d-88d8007c4f81.png'
                        },
                        {
                            icon: 'i-flei',
                            name: '分类',
                            href: 'classify',
                            icon: 'http://111.204.241.100:8080/upload///town/20170911/0c6c8ce7-2ffb-415f-8390-15a1c915d5ce.png'
                        },
                        {
                            icon: 'i-jxuan',
                            name: '精选',
                            href: 'auslese',
                            icon: 'http://111.204.241.100:8080/upload///town/20170911/c890af47-ac68-410e-b2b4-a9fd01c9ce51.png'
                        },
                        {
                            icon: 'J-isLogin i-my',
                            name: '我的',
                            href: 'mycenter',
                            icon: 'http://111.204.241.100:8080/upload///town/20170911/e8591b2f-aedc-4465-89d3-110794d0b758.png',
                            returnUrl: 'my-center.html'
                        }
                    ]
                }
            }
        },
        data () {
            return {

            }
        },
        mounted: function () {
            var _this = this;

            this.$nextTick(function () {
                _this.setTop(_this.$el)
            })
        },
        methods: {
            viewHeight: function () {
                return parseFloat( window.innerHeight || document.documentElement.clientHeight );
            },
            setTop: function (el) {
                var _this = this,
                        viewHeight = 0,
                        selfHeight = parseFloat( $(el).height() || 0 );
                        //selfHeight = parseFloat( getStyle(el, 'height') || 0 );

                // 监听处理函数
                var addEventHandler = function () {
                    viewHeight = _this.viewHeight();
                    el.style.top = (viewHeight - selfHeight) + 'px';
                };

                window.addEventListener('DOMContentLoaded', addEventHandler)
                window.addEventListener('resize', addEventHandler)

                console.log('mainNav height is :', selfHeight)
            }
        }
    }
</script>

<style>

</style>
