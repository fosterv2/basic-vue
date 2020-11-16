Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<h1>I am async!</h1>'
    })
  }, 1000)
})

new Vue({
  el: "#async"
})
