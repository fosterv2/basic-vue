new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

var app = new Vue({
  el: '#app',
  data: obj
})
