var example1 = new Vue({
  el: '#example-1',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var object = new Vue({
  el: '#object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})

var key = new Vue({
  el: '#key',
  data: {
    list: [
      { id: 1, data: "Fizz" },
      { id: 2, data: "Buzz" },
      { id: 3, data: "FuzzBuzz" }
    ]
  }
})
