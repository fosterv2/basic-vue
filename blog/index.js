let count = new Vue({
  el: "#example",
  data: {
    count: 0,
    // requires using parens in html
    // add: function () {
    //   this.count++
    // }
  },
  methods: {
    add: function () {
      this.count++
    },
    subtract: function () {
      this.count--
    }
  }
})

let name = new Vue({
  el: "#computed",
  data: {
    firstName: "Jane",
    lastName: "Doe",
    // fullName: function () {
    //   return `${this.firstName} ${this.lastName}`
    // }
  },
//   methods: {
//     fullName: function () {
//       return `${this.firstName} ${this.lastName}`
//     }
//   },
  computed: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})

new Vue({
  el: "#date",
  data: {
    date: new Date().toLocaleString()
  }
})

new Vue({
  el: "#for-directive",
  data: {
    todos: [
      { text: 'Wash dishes', isComplete: false },
      { text: 'Do laundry', isComplete: true },
      { text: 'Check email', isComplete: false }
    ]
  }
})

new Vue({
  el: "#gender",
  data: {
    person: {
      name: "Jane Doe",
      gender: "F"
    }
  }
})

new Vue({
  el: '#toggle',
  data: {
    condition: true
  }
})

let message = new Vue({
  el: "#message",
  data: {
    message: "I'm a message"
  },
  methods: {
    func: function () {
      alert(this.message)
    }
  }
})

let model = new Vue({
  el: "#model",
  data: {
    message: null
  }
})

let hill = new Vue({
  el: "#hill",
  data: {
    picked: ""
  }
})

let color = new Vue({
  el: "#color",
  data: {
    colors: []
  }
})

let letter = new Vue({
  el: "#letter",
  data: {
    selected: ""
  }
})
