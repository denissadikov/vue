<template lang="pug">
  form.header-search(v-ripple novalidate)
    input(type="text" placeholder="Поиск")

    .icon.header-search-arr.i_arr-b

</template>

<script>
export default {
  name: 'SearchBar',

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

.header-search
  position: relative
  background: $color-grey-medium
  border-radius:  $radius-container
  width: 64%
  height: 40px
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: center
  margin-right: auto

  .header-search-arr
    position: absolute
    right: 20px
    top: 50%
    transform: translateY(-50%)
    color: $color-grey-dark
    font-size: 14px
    line-height: 1
    pointer-events: none

  input
    flex: 1
    width: 100%
    padding: 10px 20px
    height: 100%
    border: 0
    font-size: 12px
    background-color: transparent

</style>
