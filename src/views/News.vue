<template lang="pug">
  main.content
    section.news
      .container
        Breadcrumbs

        h1.news-title Новости

        .news-sub-title Последние актуальные новости

        Swiper.news-slider(:options="swiperOption")
          SwiperSlide(v-for="(item, index) in 1"
                      :key="index")
            router-link.news-slide(to="/news/novaya-struktura-upravleniya-zhilishchnym-fondom-sozdana-v-minoborony-rf")
              v-lazy-image(src="https://fgau.ru/upload/iblock/827/755996330743102.jpg")

              .news-slide-content
                .news-slide-content-time 30.09.2020

                p Новая структура управления жилищным фондом создана в Минобороны РФ

      //NewsFilter

      .container
        .news-list
          .news-list-item
            .news-list-date 30 сентября 2020

            .news-list-title
              router-link(to="/news/novaya-struktura-upravleniya-zhilishchnym-fondom-sozdana-v-minoborony-rf") Новая структура управления жилищным фондом создана в Минобороны РФ

          .pager
            .pager-title Страницы
            // a.pager-prev(href="#") Предыдущая

            span.pager-active 1
            <!--a(href="#") 2-->
            <!--a(href="#") 3-->
            <!--span ...-->
            <!--a(href="#") 8-->

            <!--a.pager-next(href="#") Следующая-->

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import NewsFilter from '@/components/news/NewsFilter.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'News',

  data() {
    return {
      ready: false,
      swiperOption: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 16,
      },
    };
  },
  metaInfo: {
    title: 'ФГАУ Росжилкомплекс - Новости',
  },
  methods: {},

  mounted() {
    this.ready = true;
  },

  components: {
    Breadcrumbs,
    Swiper,
    SwiperSlide,
    NewsFilter,
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.pager
  color: #030405
  font-size: 18px

  +media($land, $scaling)
    font-size: size(18, $size-land)

  +media($port, ">=tablet")
    font-size: size(18, $size-port-tablet)
    text-align: center

  +media($port, "<tablet")
    font-size: size(18, $size-port)
    text-align: center

  .pager-active
    color: $color-blue

  a
    color: #030405
    text-decoration: none
    margin: 0 8px

    +media($land, $scaling)
      margin: 0 size(8, $size-land)

    +media($port, ">=tablet")
      margin: 0 size(8, $size-port-tablet)

    +media($port, "<tablet")
      margin: 0 size(8, $size-port)

    &:hover
      color: $color-blue

  .pager-next
    margin-left: 32px
    margin-right: 0

    +media($land, $scaling)
      margin-left: size(32, $size-land)

    +media($port, ">=tablet")
      margin-left: size(32, $size-port-tablet)

    +media($port, "<tablet")
      margin-left: size(32, $size-port)

  .pager-prev
    margin-right: 32px
    margin-left: 0

    +media($land, $scaling)
      margin-right: size(32, $size-land)

    +media($port, ">=tablet")
      margin-right: size(32, $size-port-tablet)

    +media($port, "<tablet")
      margin-right: size(32, $size-port)

.news-list-title
  font-weight: 500
  color: #030405
  font-size: 20px
  line-height: 1.2

  +media($land, $scaling)
    font-size: size(20, $size-land)

  +media($port, ">=tablet")
    font-size: size(20, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(20, $size-port)

  a
    text-decoration: none
    color: #030405

    &:hover
      color: $color-blue

.news-list-date
  margin-bottom: 8px
  color: #8A8C8D
  font-size: 16px

  +media($land, $scaling)
    margin-bottom: size(8, $size-land)
    font-size: size(16, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(8, $size-port-tablet)
    font-size: size(16, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(8, $size-port)
    font-size: size(16, $size-port)

.news-list-item
  margin-bottom: 43px

  +media($land, $scaling)
    margin-bottom: size(43, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(43, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(43, $size-port)

  &:last-child
    margin-bottom: 0

.news-list
  margin-bottom: 48px
  max-width: 663px

  +media($land, $scaling)
    margin-bottom: size(48, $size-land)
    max-width: size(663, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(48, $size-port-tablet)
    max-width: size(663, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(48, $size-port)
    max-width: size(663, $size-port)

.news-slide-content-time
  font-size: 16px

  +media($land, $scaling)
    font-size: size(16, $size-land)

  +media($port, ">=tablet")
    font-size: size(16, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(16, $size-port)

.news-slide-content
  padding: 13px 16px
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  border-radius: 5px
  color: $color-white
  display: flex
  flex-flow: column nowrap
  justify-content: space-between
  align-items: flex-start
  font-size: 18px
  font-weight: 500
  line-height: 1.333333333
  z-index: 1

  +media($land, $scaling)
    padding: size(13, $size-land) size(16, $size-land)
    border-radius: size(5, $size-land)
    font-size: size(18, $size-land)

  +media($port, ">=tablet")
    padding: size(13, $size-port-tablet) size(16, $size-port-tablet)
    border-radius: size(5, $size-port-tablet)
    font-size: size(18, $size-port-tablet)

  +media($port, "<tablet")
    padding: size(13, $size-port) size(16, $size-port-tablet)
    border-radius: size(5, $size-port)
    font-size: size(16, $size-port)

  p
    margin: 0

.news-slider
  margin-bottom: 48px
  width: 368px
  overflow: visible
  margin-left: 0
  max-width: 100%

  +media($land, $scaling)
    margin-bottom: size(48, $size-land)
    width: size(368, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(48, $size-port-tablet)
    width: size(360, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(48, $size-port)
    width: size(214, $size-port)

.news-slide
  background: linear-gradient(0deg, rgba(82, 92, 101, 0.4), rgba(82, 92, 101, 0.4))
  border-radius: 5px
  width: 368px
  height: 232px
  overflow: hidden
  position: relative
  display: block
  color: $color-white
  text-decoration: none
  max-width: 100%

  +media($land, $scaling)
    border-radius: size(5, $size-land)
    width: size(368, $size-land)
    height: size(323, $size-land)

  +media($port, ">=tablet")
    border-radius: size(5, $size-port-tablet)
    width: size(368, $size-port-tablet)
    height: size(232, $size-port-tablet)

  +media($port, "<tablet")
    border-radius: size(5, $size-port)
    width: size(214, $size-port)
    height: size(178, $size-port)

  &::after
    content: ""
    background: linear-gradient(0deg, rgba(82, 92, 101, 0.4), rgba(82, 92, 101, 0.4))
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 50% 50%
    border-radius: 5px

    +media($land, $scaling)
      border-radius: size(5, $size-land)

    +media($port, ">=tablet")
      border-radius: size(5, $size-port-tablet)

    +media($port, "<tablet")
      border-radius: size(5, $size-port)

.news
  color: #030405

.news-sub-title
  margin-bottom: 32px
  font-weight: 500
  font-size: 20px

  +media($land, $scaling)
    margin-bottom: size(32, $size-land)
    font-size: size(20, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(32, $size-port-tablet)
    font-size: size(20, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(32, $size-port)
    font-size: size(20, $size-port)

.news-title
  color: #0071B9
  margin: 0 0 45px
  font-weight: 500
  font-size: 26px

  +media($land, $scaling)
    font-size: size(26, $size-land)
    margin-bottom: size(45, $size-land)

  +media($port, ">=tablet")
    font-size: size(26, $size-port-tablet)
    margin-bottom: size(32, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(26, $size-port)
    margin-bottom: size(32, $size-port)

</style>
