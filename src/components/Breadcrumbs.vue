<template lang="pug">
  .breadcrumbs(v-if="$route.meta.breadcrumbs")
    template(v-for="(item, index) in $route.meta.breadcrumbs")
      router-link(v-if="item.link" :to="item.link") {{item.name}}

      template(v-else)
        template(v-if="$route.params.id") {{$route.params.id}}

        template(v-else) {{item.name}}

      span.sep(v-if="item.link") /

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
    console.log(this.$route.meta.breadcrumbs);
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.breadcrumbs
  margin-bottom: 8px
  margin-top: 40px
  font-size: 12px

  +media($land, $scaling)
    margin-bottom: size(8, $size-land)
    font-size: size(12, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(8, $size-port-tablet)
    font-size: size(12, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(8, $size-port)
    font-size: size(12, $size-port)

  .sep
    margin: 0 5px

    +media($land, $scaling)
      margin: 0 size(5, $size-land)

    +media($port, ">=tablet")
      margin: 0 size(5, $size-port-tablet)

    +media($port, "<tablet")
      margin: 0 size(5, $size-port)

  a
    color: #515658

</style>
