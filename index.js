Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

var checked = new Vue({
  el: "#checked",
  data: {
    lovingVue: true
  }
})

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})

var native = new Vue({
  el: "#native",
  data: {
    onFocus: function () {
      console.log("I'm reactive!")
    }
  }
})

// Vue.component('text-document', {
//   props: ['doc'],
//   template: `
//     <div>
//       <label>Title: </label>
//       <input v-on:change="$emit('update:title', newTitle)">{{ doc.title }}</input>
//       <label>Name: </label>
//       <input v-on:change="$emit('update:name', newName)">{{ doc.name }}</input>
//     </div>
//   `
// })

// var sync = new Vue({
//   el: "#sync",
//   data: {
//     doc: {
//       title: "The Beginning",
//       name: "Me"
//     }
//   }
// })
