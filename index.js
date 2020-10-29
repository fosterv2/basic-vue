var modifiers = new Vue({
  el: '#modifiers',
  data: {
    counter: 0
  },
  methods: {
    warn: function (message) {
      alert(message)
    }
  }
})

var keys = new Vue({
  el: '#keys',
  data: {
    counter: 0
  },
  methods: {
    add: function () {
      this.counter++
    },
    subtract: function () {
      this.counter--
    }
  }
})

var exact = new Vue({
  el: '#exact',
  methods: {
    onClick: function () {
      console.log('Clicked!')
    }
  }
})
