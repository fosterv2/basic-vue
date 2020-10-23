var iff = new Vue({
  el: "#iff",
  data: {
    seen: true,
    unseen: false
  }
})

var bind = new Vue({
  el: "#bind",
  data: {
    url: "https://vuejs.org/",
    key: "href"
  }
})

var on = new Vue({
  el: "#on",
  data: {
    key: "click",
    doSomething: function () {
      iff.seen = !iff.seen
      iff.unseen = !iff.unseen
    }
  }
})
