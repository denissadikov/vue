<template lang="pug">
  main.content
    section.article
      .container
        Breadcrumbs

        .flex-row.article-col
          .flex-row-item.w-60
            h1.article-h1 Новая структура управления жилищным фондом создана в Минобороны РФ

            .article-date
              .article-date-item 30 сентября 2020

              .article-social
                a.article-social-item.icon.i_vk1(href="#")

                a.article-social-item.icon.i_fb(href="#")

                a.article-social-item.icon.i_tw(href="#")

                a.article-social-item.icon.i_ok1(href="#")

                a.article-social-item.icon.i_teleg(href="#")

            .article-pic-wrapper(v-if="$store.getters.isPortrait")
              v-lazy-image.article-pic(src="https://fgau.ru/upload/iblock/827/755996330743102.jpg")

            p: b "Переход к единой системе управления позволит создать эффективный инструмент комплексного управления, контролировать использование и эксплуатацию жилищного фонда, автоматизировать процесс и сократить время на распределение и заселение жилых помещений", - рассказали в Минобороны.

            p Там отметили, что "Росжилкомплекс" будет управлять и распоряжаться ведомственным жилищным фондом, обеспечивать военнослужащих жилыми помещениями, проводить благоустройство и содержание жилых зон на территории военных городков. Ранее эти функции были распределены между центральными органами военного управления и организациями Минобороны России. Также новая структура будет контролировать весь жизненный цикл объектов недвижимости, включая проектирование, строительство, содержание и ремонт фондов.

            p В Минобороны отметили, что создание "Росжилкомплекса" позволит эффективно решать жилищно-коммунальные вопросы. "Специалисты будут осуществлять техобслуживание и ремонт инженерных систем, лифтового оборудования, систем связи, сигнализации и видеонаблюдения зданий, включая аварийное и диспетчерское обслуживание", - рассказали в военном ведомстве. Также организация будет выполнять текущий ремонт ведомственных общежитий и многоквартирных домов, проводить подготовку к сезонной эксплуатации, вести благоустройство и содержание жилых зон, а также вести строительство объектов инженерной и транспортной инфраструктуры.

            <!--p.note «Учреждение является некоммерческой организацией, созданной для выполнения работ, оказания услуг в целях осуществления предусмотренных законодательством Российской Федерации полномочий  Министерства обороны в сфере социальной защиты военнослужащих, лиц гражданского персонала.» — пояснили в администрации правительства.-->

          .flex-row-item.w-40(v-if="!$store.getters.isPortrait")
            .article-pic-wrapper
              v-lazy-image.article-pic(src="https://fgau.ru/upload/iblock/827/755996330743102.jpg")
            <!--.article-pic-wrapper-->
              <!--v-lazy-image.article-pic(src="https://picsum.photos/600/400")-->

      .article-line

      <!--.container.article-nav-->
        <!--.article-nav-item-->
          <!--.article-nav-arr.icon.i_arr-l1-->

          <!--.article-nav-date 12 сентября 2020-->

          <!--a.article-nav-title(href="#") Начисления, прием показаний, обращения         и диспетчерская служба, созданной                 для выполнения работ, оказания услуг      в целях осуществления предусмотренных законодательством Российской Федерации-->

        <!--.article-nav-item-->
          <!--.article-nav-arr.icon.i_arr-r1-->

          <!--.article-nav-date 12 сентября 2020-->

          <!--a.article-nav-title(href="#") Учреждение является некоммерческой организацией-->
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  name: 'Article',

  data() {
    return {
      ready: false,
      title: 'ФГАУ Росжилкомплекс - Новости',
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [{
      }],
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: {
    Breadcrumbs,
  },
};
</script>

<style lang="sass">
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.article-col
  +media($port)
    display: block

    .flex-row-item
      width: 100%

.article-nav-arr
  position: absolute
  top: 7px
  left: 0
  color: $color-blue
  font-size: 79px
  line-height: 1

  +media($land, $scaling)
    top: size(7, $size-land)
    font-size: size(79, $size-land)

  +media($port, ">=tablet")
    top: size(7, $size-port-tablet)
    font-size: size(79, $size-port-tablet)

  +media($port, "<tablet")
    top: size(7, $size-port)
    font-size: size(79, $size-port)

  &.i_arr-r1
    left: auto
    right: 0

.article-nav-title
  font-weight: 500
  font-size: 18px
  line-height: 1.333333333
  display: inline-flex
  text-decoration: none
  color: #030405

  +media($land, $scaling)
    font-size: size(18, $size-land)

  +media($port, ">=tablet")
    font-size: size(18, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(18, $size-port)

  &:hover
    color: $color-blue

.article-nav-date
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

.article-nav-item
  position: relative
  width: 40%

  +media($port)
    width: 100%
    margin-bottom: 30px

    &:last-child
      margin-bottom: 0

  &:first-child
    padding-left: 96px

  &:last-child
    padding-right: 96px
    padding-left: 0

.article-nav
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: flex-start

  +media($port)
    display: block

.article-line
  height: 1px
  background: #EAEDF2
  margin: 42px 0

  +media($land, $scaling)
    margin: size(42, $size-land) 0

  +media($port, ">=tablet")
    margin: size(42, $size-port-tablet) 0

  +media($port, "<tablet")
    margin: size(42, $size-port) 0

.article-pic-wrapper
  width: 400px
  margin-bottom: 16px
  img
    width: 100%

  +media($land, $scaling)
    margin-bottom: size(16, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(56, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(40, $size-port)

.article-pic
  border-radius: 5px

  +media($land, $scaling)
    border-radius: size(5, $size-land)

  +media($port, ">=tablet")
    border-radius: size(5, $size-port-tablet)

  +media($port, "<tablet")
    border-radius: size(5, $size-port)

.article-date-item
  margin-right: 44px
  display: inline

  +media($land, $scaling)
    margin-right: size(44, $size-land)

  +media($port, ">=tablet")
    margin-right: size(44, $size-port-tablet)

  +media($port, "<tablet")
    margin-right: 0
    display: block
    margin-bottom: size(16, $size-port)

.article-social
  display: inline-flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: center

  .article-social-item
    margin-right: 17px
    color: #D2D3D4
    text-decoration: none
    font-size: 24px

    +media($land, $scaling)
      margin-right: size(17, $size-land)
      font-size: size(24, $size-land)

    +media($port, ">=tablet")
      margin-right: size(17, $size-port-tablet)
      font-size: size(24, $size-port-tablet)

    +media($port, "<tablet")
      margin-right: size(17, $size-port)
      font-size: size(24, $size-port)

    &:hover
      color: $color-blue

.article-date
  margin-bottom: 64px
  color: #8A8C8D
  font-size: 18px
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: center

  +media($land, $scaling)
    margin-bottom: size(18, $size-land)
    font-size: size(18, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(18, $size-port-tablet)
    font-size: size(18, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(18, $size-port)
    font-size: size(18, $size-port)
    display: block

.article-h1
  font-weight: 500
  color: $color-blue
  font-size: 26px
  line-height: 1.230769231
  margin: 0 0 24px

  +media($land, $scaling)
    font-size: size(26, $size-land)
    margin-bottom: size(24, $size-land)

  +media($port, ">=tablet")
    font-size: size(26, $size-port-tablet)
    margin-bottom: size(24, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(18, $size-port)
    margin-bottom: size(24, $size-port)

.article
  font-size: 16px
  line-height: 1.5

  +media($land, $scaling)
    font-size: size(16, $size-land)

  +media($port, ">=tablet")
    font-size: size(16, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(16, $size-port)

  b
    font-weight: 500

  .note
    padding: 17px
    background: #EAEDF2
    font-weight: 500
    border-radius: 5px
    margin: 30px 0

    +media($land, $scaling)
      padding: size(17, $size-land)
      border-radius: size(5, $size-land)
      margin: size(30, $size-land) 0

    +media($port, ">=tablet")
      padding: size(17, $size-port-tablet)
      border-radius: size(5, $size-port-tablet)
      margin: size(30, $size-port-tablet) 0

    +media($port, "<tablet")
      padding: size(17, $size-port)
      border-radius: 0
      margin: size(16, $size-port) size(-20, $size-port)

</style>
