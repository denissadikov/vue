<template lang="pug">
  section.news
    .container
      .flex-row
        template(v-for="(item, index) in 1")
          .flex-row-item.w-33(:key="index")
            router-link.news-item(to="/news/novaya-struktura-upravleniya-zhilishchnym-fondom-sozdana-v-minoborony-rf")
              img.news-pic(src="https://fgau.ru/upload/iblock/827/755996330743102.jpg" alt="")

              .news-text
                .news-date 30.09.2020

                p.no-margin(v-clampy="3") Новая структура управления жилищным фондом создана в Минобороны РФ
      .flex-row
        .flex-row-item.w-100.text-right
         router-link.news-more(to="news") Читать все новости
</template>

<script>
import clampy from '@clampy-js/vue-clampy';

export default {
  name: 'News',

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

  directives: {
    clampy,
  },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.news
  content-visibility: auto
  background: #fff
  padding: 88px 0

  +media($land, $scaling)
    padding: size(55, $size-land) 0

  +media($port, ">=tablet")
    padding: size(55, $size-port-tablet) 0

  +media($port, "<tablet")
    padding: size(30, $size-port) 0

  //

  .news-date
    color: #fff
    font-size: 16px
    font-style: italic
    font-weight: 500
    margin-top: 5px

    +media($land, $scaling)
      font-size: size(10, $size-land)
      margin-top: size(5, $size-land)

    +media($port, ">=tablet")
      font-size: size(10, $size-port-tablet)
      margin-top: size(5, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(10, $size-port)
      margin-top: size(5, $size-port)

  .news-more
    font-weight: 500
    font-size: 14px
    line-height: 16px

  .news-item
    text-decoration: none
    color: #000
    font-size: 14px
    line-height: 1.142857143
    display: block
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: flex-start
    position: relative
    border-radius: 5px
    overflow: hidden
    margin-bottom: 10px

    +media($land, $scaling)
      font-size: size(14, $size-land)

    +media($port, ">=tablet")
      font-size: size(14, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(14, $size-port)
      width: 80%
    .news-text
      color: #fff
      position: absolute
      top: 0
      display: flex
      justify-content: space-between
      flex-flow: column wrap
      height: 100%
      padding: 10px
      font-weight: 500
      font-size: 18px
      line-height: 24px
      width: 100%

    .news-pic
      width: 100%
      height: 100%
      object-fit: cover
      margin-right: 20px

      +media($land, $scaling)
        width: size(60, $size-land)
        height: size(60, $size-land)
        min-width: size(60, $size-land)
        margin-right: size(20, $size-land)

      +media($port, ">=tablet")
        width: size(60, $size-port-tablet)
        height: size(60, $size-port-tablet)
        min-width: size(60, $size-port-tablet)
        margin-right: size(20, $size-port-tablet)

      +media($port, "<tablet")
        width: size($size-port*0.7, $size-port)
        height: size(180, $size-port)
        min-width: size($size-port*0.7, $size-port)
        margin-right: size(20, $size-port)
    p
      max-width: 170px

      +media($land, $scaling)
        max-width: size(170, $size-land)

      +media($port)
        max-width: none
        font-size: size(18, $size-port)
        line-height: size(24, $size-port)

  .news-title
    font-size: 24px
    line-height: 1.166666667
    font-weight: bold
    margin-bottom: 6px
    margin-top: 0

    +media($land, $scaling)
      font-size: size(24, $size-land)
      margin-bottom: size(6, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)
      margin-bottom: size(15, $size-port-tablet)
      margin-right: size(25, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(24, $size-port)
      margin-bottom: size(15, $size-port)
      margin-right: size(25, $size-port)

  .container
    position: relative
    display: flex
    flex-flow: column nowrap
    justify-content: flex-start
    align-items: stretch

    +media($port)
      display: block
      overflow-x: auto

    > .flex-row
      flex: 1

      +media($port)
        margin: 0
        display: block
        width: 100%

        .flex-row-item
          width: 100%
          padding: 0
          margin-bottom: 15px

          +media($land, $scaling)
            margin-bottom: size(15, $size-land)

          +media($port, ">=tablet")
            margin-bottom: size(15, $size-port-tablet)

          +media($port, "<tablet")
            margin-bottom: size(15, $size-port)
            flex-flow: row wrap

          &:last-child
            margin-bottom: 0

          &:first-child
            display: flex
            flex-flow: row wrap
            justify-content: flex-start
            align-items: baseline

</style>
