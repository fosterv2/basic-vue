var object = new Vue({
  el: "#object",
  data: {
    isActive: true,
    hasError: false
  }
})

var computed = new Vue({
  el: "#computed",
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

var array = new Vue({
  el: "#array",
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})
