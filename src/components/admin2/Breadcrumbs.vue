<template lang="pug">
  .breadcrumbs(v-if="$route.meta.breadcrumbs")
    template(v-for="(item, index) in $route.meta.breadcrumbs")
      router-link(v-if="item.link" :to="item.link") {{item.name}}

      template(v-else)
        template(v-if="$route.params.id") {{$route.params.id}}

        template(v-else) {{item.name}}

      span(v-if="item.link && $route.name !== 'home'") /

</template>

<script>
export default {
  name: 'Breadcrumbs',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.breadcrumbs
  font-weight: 500
  font-size: 14px
  color: $color-grey-dark
  margin-bottom: 7px
  margin-left: 14px

  span
    margin: 0 5px

  a
    text-decoration: none

    &:hover
      text-decoration: underline

</style>
