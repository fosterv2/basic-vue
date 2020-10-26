var iff = new Vue({
  el: "#iff",
  data: {
    awesome: false
  }
})

var template = new Vue({
  el: "#template",
  data: {
    ok: true
  }
})

var els = new Vue({
  el: "#else",
  data: {
    random: Math.random() > 0.5
  }
})

var array = ["A", "B", "C", "D", "E"]
var elsif = new Vue({
  el: "#elsif",
  data: {
    type: array[Math.floor(Math.random() * array.length)]
  }
})

var login = new Vue({
  el: "#login",
  data: {
    loginType: true,
    toggle: function () {
      login.loginType = !login.loginType
    }
  }
})
