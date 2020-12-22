<template lang="pug">
  router-link.logo(to="/admin/2/")
    v-lazy-image(:src="require(`@/assets/images/logo-admin1.svg`)" alt="")

    h1 Личный кабинет жителя
</template>

<script>
export default {
  name: 'Logo',

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

.logo
  width: 222px
  min-width: 222px
  background: $color-white
  box-shadow: $shadow-container
  border-radius:  $radius-container
  padding: 11px 14px
  text-decoration: none

  img
    width: 129px

  h1
    margin: 10px 0 0
    font-weight: 500
    font-size: 13px
    line-height: 1.384615385
    color: #999999

</style>
