var iff = new Vue({
  el: "#iff",
  data: {
    seen: true,
    unseen: false
  }
})

var attr = new Vue({
  el: "#attr",
  data: {
    url: "https://vuejs.org/",
    doSomething: function () {
      iff.seen = !iff.seen
      iff.unseen = !iff.unseen
    }
  }
})

var dynamic = new Vue({
  el: "#dynamic",
  data: {
    url: "https://vuejs.org/",
    attributeName: "href",
    attribute: "href"
  }
})

var modifier = new Vue({
  el: "#modifier",
  data: {
    onSubmit: function (e) {
      console.log(e)
    }
  }
})
