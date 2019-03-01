// 自执行函数
(function (window) {
    var jQuery = function (selector) {
        // 构造函数实例
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = {
        constructor: jQuery,
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            alert('html')
        }
    }

    // 构造函数
    var init = jQuery.fn.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))

        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    init.prototype = jQuery.fn // 原型

    window.$ = jQuery

})(window)