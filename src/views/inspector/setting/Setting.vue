<template lang="pug">
  section
    .inner
      .sections(v-if="ready")
        ul.sections-items.w-100
          li(v-for="section in $store.getters.setting.sections")
            SectionItem(:item="section")

</template>

<script>
import SectionItem from '@/components/inspector/setting/SectionItem.vue';

export default {
  name: 'Setting',

  data() {
    return {
      ready: false,
      // sections: this.$store.getters.setting.sections,
      addSection: false,
      addComponent: false,
    };
  },

  methods: {
    getData() {
      this.$store.dispatch('GetData', {})
        .then((r) => {
          this.$store.commit('SET_ACT_DATA', r);
          this.ready = true;
        });
    },
    selectSection() {
    },
  },

  mounted() {
    this.getData();
  },

  components: { SectionItem },
};
</script>

<style lang="sass" scoped>
@import "@/styles/mixins/mixins"
@import "@/styles/vars/variables"

.sections
  display: flex
  .sections-items
    list-style-type: none

</style>
