(function (w) {
    // 一个插件最终是一个对象
    let MyPlugin = {}
    // 一个插件必须要有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1.添加全局方法或property
        // 此处对Vue添加方法
        Vue.myGlobalMethod = function () {
            console.log('全局方法被调用')
        }
        // 2.添加全局资源
        // 此处添加全局指令
        Vue.directive('upper', function (el, bindings) {
            el.textContent = bindings.value.toUpperCase()
        })

        // 4.添加实例方法
        // 此处对Vue原型中添加方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
            console.log('实例方法被调用')
        }
    }
    // 将插件挂载到window身上，暴露出去
    w.MyPlugin = MyPlugin
})(window)