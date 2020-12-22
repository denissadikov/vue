<template lang="pug">
  section.settings
    NotFound

</template>

<script>
import NotFound from '@/components/admin2/NotFound.vue';

export default {
  name: 'Settings',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { NotFound },
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

</style>
