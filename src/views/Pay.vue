<template lang="pug">
  main.content
    section.container.fast-pay-wrapper
      .fast-pay-wrapper
        v-lazy-image.fast-pay-pic(:src="require(`@/assets/images/fast-pay-pic.${$store.getters.webp ? 'webp' : 'png'}`)" alt="")

        keep-alive
          component(
          @change="change"
            :is="currentComponent")

        <!--FastPayForm(v-if="currentComponent === 'form'")-->
        <!--FastPayResult(v-if="currentComponent === 'pay'")-->
</template>

<script>
import FastPayForm from '@/components/fast-pay/FastPayForm.vue';
import FastPayResult from '@/components/fast-pay/FastPayResult.vue';

export default {
  name: 'Pay',

  data() {
    return {
      ready: false,
      currentComponent: 'FastPayForm',
    };
  },

  methods: {
    change(e) {
      this.currentComponent = e;
    },
  },

  mounted() {
    this.ready = true;
  },

  components: { FastPayForm, FastPayResult },
};
</script>

<style lang="sass" scoped>
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.content
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  align-items: stretch

.fast-pay-wrapper
  margin: 0 auto 0
  max-width: 962px
  padding-bottom: 0
  flex: 1
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: stretch
  width: 100%

  +media($land, $scaling)
    max-width: size(962, $size-land)

  +media($port, ">=tablet")
    max-width: size(962, $size-port-tablet)

  +media($port, "<tablet")
    max-width: none

  .fast-pay-pic
    position: absolute
    top: 50%
    right: 0
    transform: translateY(-50%)
    width: 725px
    pointer-events: none

</style>
