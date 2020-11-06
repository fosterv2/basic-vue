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
