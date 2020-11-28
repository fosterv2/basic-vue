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

Vue.component('counter-component', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div>
    <button v-on:click="count++">Click me!</button>
    <p>You've clicked the button {{ count }} times</p>
  </div>`
})

new Vue({
  el: '#component-example'
})

Vue.component('profile', {
  props: ['person'],
  template: `<div>
    <h3>{{ person.name }}</h3>
    <img v-bind:src='person.img_url'></p>
    <p>{{ person.email }}</p>
  </div>`
})

new Vue({
  el: '#people-list',
  data: {
    people: [
      { id: 1, name: 'Jane Do', img_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', email: 'jane.doe@google.com'},
      { id: 2, name: 'John Smith', img_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', email: 'jsmith@google.com'},
      { id: 3, name: 'Jesse Baker', img_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', email: 'jesse@google.com'}
    ]
  }
})

Vue.component('navigation-link', {
  props: ['url'],
  template: `
    <a v-bind:href="url">
      <slot></slot>
    </a>
  `
})

new Vue({
  el: '#profile-nav'
})
