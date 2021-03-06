/**
 * Created by qiheng on 2017/4/25.
 */

import Vue from 'vue'
//import {setStyle, once, on, off} from '../utils/dom'


// 16进制 转 RGB
function hexToRgb(hex) {
    var color = [], rgb = [];
    hex = hex.replace(/#/,'');

    if (hex.length == 3) { // 处理 "#abc" 成 "#aabbcc"
        var tmp = [];
        for (var i = 0; i < 3; i++) {
            tmp.push(hex.charAt(i) + hex.charAt(i));
        }
        hex = tmp.join('');
    }

    for (var i = 0; i < 3; i++) {
        color[i] = '0x' + hex.substr(2*i, 2);
        rgb.push(parseInt(Number(color[i])));
    }

    return rgb;
}

/**
 * 指令: 固定顶部滚动改变背景色
 * arg: 传给指令的参数
 * value: 指令的绑定值 {distance:200, disabled: false}
 */
Vue.directive('nav-slide-changecolor', function (el, binding) {
    var _top = 0,
        opacity = 0,
        win = window,
        _color = '',
        _target = binding.value && binding.value.distance || 200,
        _scrollEl = binding.value && binding.value.scrollEl || window || null;

    // 没有传颜色时，则不处理
    if (!binding.arg) return;
    _color = hexToRgb(binding.arg).join(',');

    // 滚动处理
    var scrollFn = function () {
        var tmp = [];

        if (!_scrollEl) {
            _scrollEl =  window
        }

        _top = (_scrollEl && _scrollEl.scrollTop) || document.body.scrollTop || window.scrollY;

        if (_top <= _target && !(binding.value && binding.value.disabled)) {
            opacity = (1/_target) * _top;
        } else {
            opacity = 1;
        }

        tmp.push(_color, opacity);
        $(el).css({'background-color': 'rgba('+ tmp.join(',') +')'})
    };

    // setTimeout(() => {
        // 初始执行一次
        scrollFn();
    // }, 0)

    $(_scrollEl).off('.nav').on('scroll.nav resize.nav load.nav', scrollFn)
    //$(window).off('.nav').on('scroll.nav resize.nav load.nav', scrollFn)

})

/*
Vue.directive('nav-slide-changecolor', function (el, binding) {
        var _top = 0,
            opacity = 0,
            win = window,
            _color = '',
            _target = binding.value || 200;

        // 没有传颜色时，则不处理
        if (!binding.arg) return;

        _color = hexToRgb(binding.arg).join(',');

        // 滚动处理
        var scrollFn = function scrollFn(e) {
            var tmp = [];
            _top = window.scrollY || document.body.scrollTop;

            if (_top <= _target) {
                opacity = (1/_target) * _top;
            } else {
                opacity = 1;
            }
e
            tmp.push(_color, opacity);
            $(el).css('background-color', 'rgba('+ tmp.join(',') +')')
        };

        $(window).off('.nav').on('scroll.nav resize.nav load.nav', scrollFn)

    }
)

*/
