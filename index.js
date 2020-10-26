var filter = new Vue({
  el: '#filter',
  data: {
    fruits: [ "Apple", "Orange", "Banana", "Peach", "Grapes" ],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  computed: {
    longFruit: function () {
      return this.fruits.filter(function (fruit) {
        return fruit.length > 5
      })
    }
  }
})

var template = new Vue({
  el: '#template',
  data: {
    items: [
      { msg: 'Foo' },
      { msg: 'Bar' },
      { msg: 'Baz' }
    ]
  }
})

var iffor = new Vue({
  el: '#if-for',
  data: {
    todos: [
      { td: 'Wash dishes', isComplete: false },
      { td: 'Do laundry', isComplete: true },
      { td: 'Check email', isComplete: false }
    ]
  }
})
