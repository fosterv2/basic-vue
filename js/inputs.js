var text = new Vue({
  el: "#text",
  data: {
    message: "",
    textMessage: ""
  }
})

var checkbox = new Vue({
  el: "#checkbox",
  data: {
    checked: false,
    checkedNames: []
  }
})

var radio = new Vue({
  el: "#radio",
  data: {
    picked: ""
  }
})

var select = new Vue({
  el: "#select",
  data: {
    selected: "",
    multiSelected: [],
    select: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
