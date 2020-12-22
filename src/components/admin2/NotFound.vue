<template lang="pug">
  section.inner.not-found
    v-lazy-image.not-found-bg(:src="require(`@/assets/images/not-found.svg`)" alt="")

    .not-found-content
      h1 Этой страницы еще нет

      p Она в разработке

      br

      router-link.btn.-mdl(to="/admin/2/") На главную
</template>

<script>
export default {
  name: 'NotFound',

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

.not-found
  min-height: 448px
  position: relative

  h1
    font-weight: bold

  .not-found-bg
    position: absolute
    right: 10%
    top: 76px
    max-width: 60%

  .not-found-content
    position: relative

  .not-found-title
    font-size: 18px
    font-weight: bold
    margin-bottom: 22px
    color: #525C65

</style>
