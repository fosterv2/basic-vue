Vue.component('navigation-link', {
  props: ['url'],
  template: `
    <a
      v-bind:href="url"
      class="nav-link"
    >
      <slot></slot>
    </a>
  `
})

var slot1 = new Vue({
  el: "#slot-1"
})

var slot2 = new Vue({
  el: "#slot-2",
  data: {
    user: {
      name: "Jane Doe"
    }
  }
})

Vue.component('submit-button', {
  template: `
    <button type="submit">
      <slot>Submit</slot>
    </button>
  `
})

var fallback = new Vue({
  el: "#fallback"
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

var names = new Vue({
  el: "#names"
})