export default {
  install: function(Vue) {
    Vue.directive("upper", function(el, binding) {
        el.innerHTML = binding.value.toUpperCase();
    });
  }
};
