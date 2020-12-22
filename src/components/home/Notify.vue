<template lang="pug">
  section.notify
    .container.text-center
      .notify-btn.w-30
        a.btn.-border(href="https://lk.fgau.ru/handling" target="_blank") Подать заявление
      .promo-text.w-70 Военнослужащим для проведения перерасчета за найм служебного жилья нужно подать заявление
</template>

<script>
export default {
  name: 'Notify',

  data() {
    return {
      ready: false,
    };
  },

  methods: {
  },

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"
.notify
  background-color: $color-gray-background
  padding: 12px 0
  .container
    flex-flow: row wrap
    display: flex
    align-items: center
    position: relative

    .notify-btn
      justify-content: flex-end
      align-items: flex-end
      padding-right: 40px
      padding-left: 10%
      border-right: 1px solid $color-grey

      .btn
        padding: 0
        width: 100%
        font-size: 18px
        line-height: 40px
        font-weight: normal
        background: none

    .promo-text
      text-align: left
      padding-left: 40px

    +media($port)
      flex-flow: column-reverse nowrap
      justify-content: center
      align-items: center

      .notify-btn
        width: 100%
        padding: 0
        margin-top: 10px

      .promo-text
        width: 100%
        margin: 0
        padding: 0

</style>
