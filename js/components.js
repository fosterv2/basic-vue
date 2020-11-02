// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

Vue.component('blog-post-two', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

new Vue({ el: '#components-demo' })

// new Vue({ el: '#titles' })

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: "...content..." },
      { id: 2, title: 'Blogging with Vue', content: "...content..." },
      { id: 3, title: 'Why Vue is so fun', content: "...content..." }
    ],
    postFontSize: 1
  }
})

new Vue({
  el: "#events",
  data: {
    searchText: "searching..."
  }
})
