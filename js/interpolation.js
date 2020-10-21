var text = new Vue({
  el: "#text",
  data: {
    msg: "I'm a message!"
  }
})

var html = new Vue({
  el: "#html",
  data: {
    rawHtml: '<span style="color: red">This should be red</span>'
  }
})

var attr = new Vue({
  el: "#attr",
  data: {
    dynamicId: "dynamic",
    isButtonDisabled: true
  }
})

var js = new Vue({
  el: "#js",
  data: {
    number: 5,
    ok: false,
    message: "Not a palindrome",
    id: 2
  }
})