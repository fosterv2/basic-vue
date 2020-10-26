var object = new Vue({
  el: "#object",
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})

var array = new Vue({
  el: "#array",
  data: {
    styleObject: {
      color: 'green',
      fontSize: '23px'
    },
    baseStyles: {
      backgroundColor: 'wheat'
    }
  }
})
