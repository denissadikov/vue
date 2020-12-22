<template lang="pug">
  .phone
    .phone-title Диспетчерская

    .phone-item
      .icon.i_phone
      span 8 (800) 600-28-44
</template>

<script>
export default {
  name: 'Phone',

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

.phone
  background: $color-white
  box-shadow: $shadow-container
  border-radius:  $radius-container
  padding: 25px 0
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
  margin-bottom: 10px

  .phone-item
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    color: $color-red
    font-style: italic
    font-size: 18px

    .icon
      margin-right: 10px

  .phone-title
    margin-bottom: 17px
    color: $color-grey-text
    font-size: 18px

</style>
