<template lang="pug">
  footer.footer
    Pay

    .container

      .footer-left
        .footer-mob-app
          p Скачайте мобильное приложение
          .app-logos
            v-lazy-image(:src="require(`../assets/images/android.svg`)" alt="")
            v-lazy-image(:src="require(`../assets/images/apple.svg`)" alt="")

        ul.reset.footer-list
          li
            a(href="https://fgau.ru/files/ustav.pdf" target="_blank") Устав организации
          li
            router-link(to="/policy") Политика конфиденциальности
          li
            router-link(to="/userconf") Персональные данные
        v-lazy-image(:src="require(`../assets/images/footer-pic.svg`)" alt="")

        .copy(v-if="!$store.getters.isPortrait") 2020 ФГАУ "Росжилкомплекс" Минобороны России

      .footer-center
        nav.footer-nav
          router-link(to="/about") О нас

          a(href="https://fgau.ru/files/rso.pdf" target="_blank") РСО

          a(href="https://fgau.ru/files/uk.pdf" target="_blank") Управляющие организации

      .footer-right
        ul.footer-list.reset
          li
            router-link(to="/contacts") Контакты

        ul.reset.footer-contacts
          li
            .flex-row
              .flex-row-item
                .icon.i_phone

                a(href="tel:88006002844") 8 (800) 600-28-44
            .contact-label Заявки на осмотр, прием и сдача помещений

          li
            .flex-row
              .flex-row-item
                .icon.i_phone

                a(href="tel:84952255033") 8 (495) 225-50-33
            .contact-label Центральное управление по различным вопросам
          li
            .flex-row
              .flex-row-item
                .icon.i_phone

                a(href="tel:88005553402") 8 (800) 555-34-02
            .contact-label Начисления, прием показаний, обращения и диспетчерская служба

          li
            .flex-row
              .flex-row-item
                .icon.i_email

                a(href="mailto:info@fgau.ru") info@fgau.ru

        .footer-social
          a.icon.i_fb(href="https://www.facebook.com/roszhilkompleks/" target="_blank")

          a.icon.i_vk(href="https://vk.com/roszhilkompleks" target="_blank")

          a.icon.i_insta(href="https://www.instagram.com/roszhilkompleks/" target="_blank")

      .copy(v-if="$store.getters.isPortrait") 2020 ФГАУ "Росжилкомплекс" Минобороны России

    <!--v-lazy-image.footer-bg(v-if="!$store.getters.isPortrait" :src="require(`../assets/images/footer-bg.svg`)" alt="")-->

    <!--v-lazy-image.footer-bg(v-else :src="require(`../assets/images/footer-bg-m.svg`)" alt="")-->
</template>

<script>
import Pay from '@/components/home/Pay.vue';

export default {
  name: 'Footer',
  data() {
    return {
      ready: false,
    };
  },
  methods: {},
  mounted() {
  },
  components: { Pay },
};
</script>

<style lang="sass">
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.footer
  content-visibility: auto
  overflow: hidden
  min-height: 81px
  position: relative
  color: $color-grey-dark
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: stretch
  padding-top: 40px
  padding-bottom: 40px

  a
    text-decoration: none

  +media($land, $scaling)
    padding-top: size(22, $size-land)
    padding-bottom: size(13, $size-land)

  +media($port, ">=tablet")
    padding-top: size(42, $size-port-tablet)
    padding-bottom: 0

  +media($port, "<tablet")
    padding-top: size(42, $size-port)
    padding-bottom: 0

  +media($port)
    background-color: $color-white
    text-align: center

  /*&::after
    content: ""
    position: absolute
    top: 0
    bottom: 0
    left: 50%
    width: 573px
    pointer-events: none
    background-color: $color-blue
    transform: skew(52deg) translateX(-50%)

    +media($port)
      display: none */

  /* &::before
    content: ""
    position: absolute
    right: 0
    top: 0
    bottom: 0
    width: 50%
    background-color: $color-red
    pointer-events: none

    +media($port)
      display: none
  //

  .footer-bg
    pointer-events: none
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-88%)
    z-index: 1

    +media($port, ">=tablet")
      bottom: auto
      top: size(-73, $size-port-tablet)
      left: 0
      transform: none
      width: 100px

      &.v-lazy-image-loaded
        bottom: auto
        top: size(-73, $size-port-tablet)
        left: 0
        transform: none
        width: auto

    +media($port, "<tablet")
      bottom: auto
      top: 0
      left: 0
      transform: none
      width: 100px

      &.v-lazy-image-loaded
        bottom: auto
        top: size(-73, $size-port)
        left: 0
        transform: none
        width: auto

  .copy
    text-align: right
    font-style: italic
    font-size: 14px
    margin-top: 24px

    +media($land, $scaling)
      font-size: size(10, $size-land)
      margin-top: size(30, $size-land)

    +media($port, ">=tablet")
      font-size: size(10, $size-port-tablet)
      margin-top: size(30, $size-port-tablet)
      text-align: center

    +media($port, "<tablet")
      font-size: size(10, $size-port)
      margin-top: size(30, $size-port)
      text-align: center

  .footer-nav
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    align-items: baseline

    +media($port)
      flex-flow: column nowrap
      justify-content: center
      align-items: center

    a
      color: $color-black
      text-decoration: none

      +media($port, ">=tablet")
        margin-bottom: size(18, $size-port-tablet)

      +media($port, "<tablet")
        margin-bottom: size(18, $size-port)

      &:hover
        text-decoration: underline

  .footer-center
    width: 470px
    height: 100%
    min-height: 100%
    padding-right: 31px
    max-width: 100%

    +media($land, $scaling)
      padding-right: size(31, $size-land)

    +media($port, ">=tablet")
      padding-right: 0
      height: auto
      min-height: auto
      margin-bottom: size(26, $size-port-tablet)
      width: 100%

    +media($port, "<tablet")
      padding-right: 0
      height: auto
      min-height: auto
      margin-bottom: size(26, $size-port)
      width: 100%
      display: none

  .footer-social
    min-width: 104px

    +media($port)
      order: 2
      align-items: flex-start
      justify-content: flex-start
      text-align: left

    +media($land, $scaling)
      min-width: size(104, $size-land)

    +media($landTablet)
      min-width: size(70, $size-land)

    +media($port, ">=tablet")
      min-width: size(104, $size-port-tablet)

    +media($port, "<tablet")
      min-width: size(104, $size-port)

    .icon
      margin-right: 8px
      font-size: 1.5em
      color: $color-blue
      text-decoration: none

      +media($land, $scaling)
        margin-right: size(8, $size-land)

      +media($port, ">=tablet")
        margin-right: size(10, $size-port-tablet)
        margin-left: size(10, $size-port-tablet)

      +media($port, "<tablet")
        margin-right: size(10, $size-port)
        margin-left: size(10, $size-port)
        font-size: size(40, $size-port)

      &:hover
        color: $color-blue

  .footer-contacts
    +media($port)
      order: 1
      width: 100%
      display: flex
      flex-flow: column nowrap
      justify-content: space-around
      align-items: flex-start
      li
        font-size: 20px

    li
      display: flex
      flex-flow: column nowrap
      justify-content: flex-start
      align-items: left
      font-size: 18px
      font-weight: 500
      color: $color-blue
      font-style: italic
      margin-bottom: 15px

      span
        white-space: nowrap

      .contact-label
        font-size: 14px
        line-height: 16px
        color: #515658
        font-weight: normal

        +media($port, "<tablet")
          margin-top: size(16, $size-port)
          text-align: left

      +media($land, $scaling)
        margin-bottom: size(10, $size-land)
        font-size: size(12, $size-land)

      +media($port, ">=tablet")
        margin-bottom: size(22, $size-port-tablet)
        font-size: size(18, $size-port-tablet)

      +media($port, "<tablet")
        margin-bottom: size(22, $size-port)
        font-size: size(18, $size-port)

      .icon
        margin-right: 10px
        font-size: 1.2em

        +media($land, $scaling)
          margin-right: size(10, $size-land)

        +media($port, ">=tablet")
          margin-right: size(10, $size-port-tablet)

        +media($port, "<tablet")
          margin-right: size(10, $size-port)

      &:last-child
        margin-bottom: 0

        +media($port, ">=tablet")
          margin-bottom: size(22, $size-port-tablet)

        +media($port, "<tablet")
          margin-bottom: size(22, $size-port)

  .footer-right
    display: flex
    flex-flow: column nowrap
    justify-content: space-between
    align-items: flex-start

    .footer-phone-group
      flex-flow: column nowrap

    +media($port)
      flex-flow: column nowrap
      justify-content: left
      align-items: left

  .footer-left
    img
      width: 190px

      +media($land, $scaling)
        width: size(190, $size-land)

      +media($port, ">=tablet")
        width: size(292, $size-port-tablet)

        &.v-lazy-image-loaded
          bottom: size(-17, $size-port-tablet)
          opacity: 1
          transform: translateX(-50%)
          left: 50%
          width: size(292, $size-port-tablet)
          position: absolute

      +media($port, "<tablet")
        width: size(292, $size-port)

        &.v-lazy-image-loaded
          bottom: size(-17, $size-port)
          opacity: 1
          transform: translateX(-50%)
          left: 50%
          width: size(292, $size-port)
          position: absolute

      +media($port)
        position: relative
        bottom: 0
        left: 0
        opacity: 0
        width: 100%
        transform: none

  .container
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    /*align-items: center*/
    width: 100%
    position: relative
    z-index: 1

    +media($port)
      display: block
      text-align: center

    +media($port, ">=tablet")
      padding-bottom: size(100, $size-port-tablet)

    +media($port, "<tablet")
      padding-bottom: size(100, $size-port)

  .footer-mob-app
    font-size: 14px
    font-weight: 500
    line-height: 16px
    margin-bottom: 30px
    p
      margin-bottom: 15px
      margin-top: 0

    .app-logos
      flex-flow: row wrap
      display: inline-flex
      img
        width: 112px
      img:first-child
        margin-right: 15px

  .footer-list
    margin: 0
    padding: 0
    list-style-type: none
    a
      color: #515658
      text-decoration: none

    li
      font-size: 14px
      line-height: 16px
      margin-bottom: 15px
      text-align: left
</style>
