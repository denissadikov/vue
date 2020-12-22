<template lang="pug">
  main.content
    Entry

    //AppStore

    Skills

    Social

    Call

    //Search

    News
</template>

<script>
import Entry from '@/components/home/Entry.vue';
import AppStore from '@/components/home/AppStore.vue';
import Skills from '@/components/home/Skills.vue';
import Call from '@/components/home/Call.vue';
import Search from '@/components/home/Search.vue';
import News from '@/components/home/News.vue';
import Social from '@/components/home/Social.vue';

export default {
  name: 'Home',
  data() {
    return {
      title: 'Главная',
    };
  },

  methods: {},
  // metaInfo() {
  //   return {
  //     meta: [{
  //       'yandex-verification': 'a452a9bbc0043fa4'
  //     }],
  //   };
  // },

  mounted() {},

  components: {
    Entry, AppStore, Skills, Call, Search, News, Social,
  },
};
</script>

<style lang="sass" scoped>
.content
  padding-bottom: 0

@import "../styles/mixins/mixins"
@import "../styles/vars/variables"
</style>
