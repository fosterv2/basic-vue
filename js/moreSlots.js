Vue.component('current-user', {
  props: ['user'],
  template: `
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  `
})

var slotProps = new Vue({
  el: "#slot-props",
  data: {
    user: {
      firstName: "Jane",
      lastName: "Doe"
    }
  }
})

var abbr = new Vue({
  el: "#abbr",
  data: {
    user: {
      firstName: "Jane",
      lastName: "Doe"
    }
  }
})

var destructuring = new Vue({
  el: "#destructuring",
  data: {
    user: {
      firstName: "Jane",
      lastName: "Doe"
    }
  }
})

Vue.component('base-layout', {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
})

var shorthand = new Vue({
  el: "#shorthand"
})

Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <slot name="todo" v-bind:todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  `
})

var example = new Vue({
  el: "#example",
  data: {
    todos: [
        { text: 'Wash dishes', isComplete: false },
        { text: 'Do laundry', isComplete: true },
        { text: 'Check email', isComplete: false }
      ]
  }
})
