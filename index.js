Vue.component('blog-post', {
  inheritAttrs: false, // for style attributes from bootstrap
  // props: {
  //   title: String,
  //   likes: Number,
  //   isPublished: Boolean,
  //   commentIds: Array,
  //   author: Object
  // },
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>Author: {{ post.author.name }}, {{ post.author.company }}</p>
      <p>Likes: {{ post.likes }}</p>
    </div>
  `
})

new Vue({
  el: '#blog-posts',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', likes: 3, isPublished: true, author: { name: "Veronica Roth", company: "Divergent" } },
      { id: 2, title: 'Blogging with Vue', likes: 3, isPublished: false, author: { name: "Kristin Cashore", company: "Graceling" } },
      { id: 3, title: 'Why Vue is so fun', likes: 3, isPublished: true, author: { name: "Leigh Bardugo", company: "Grisha" } }
    ],
  }
})
