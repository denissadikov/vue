<template lang="pug">
  main.content
    .contacts-map
      iframe(
        frameborder="0"
        width="100%"
        height="100%"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A15e808836f936a5f9d19cd56ec017917eb474db7f66126d44e9e8d3806c5e859&source=constructor")

    section.container.contacts
      .contacts-left
        .contacts-title Как связаться с нами:

        .contacts-sub-title Адрес:

        p 119620, г. Москва, ул. 50 Лет Октября, дом 12

        .contacts-sub-title Контактные телефоны:

        .contacts-set
          .contacts-set-point
            .contacts-set-item
              .icon.i_phone
              a(href="tel:88006002844") 8 (800) 600-28-44

            p Заявки на осмотр, прием и сдача помещений

          .contacts-set-point
            .contacts-set-item
              .icon.i_phone
              a(href="tel:84952255033") 8 (495) 225-50-33

            p Центральное управление по различным вопросам

          .contacts-set-point
            .contacts-set-item
              .icon.i_phone
              a(href="tel:88005553402") 8 (800) 555-34-02

            p Начисления, прием показаний, обращения и диспетчерская служба

        .contacts-sub-title Электронная почта:

        .contacts-set
          .contacts-set-point
            .contacts-set-item
              .icon.i_email
              a(href="mailto:info@fgau.ru") info@fgau.ru

        .contacts-sub-title Часы работы:

        p.contacts-time
          span Понедельник — Пятница
          | 9:00 — 18:00

        .contacts-line

        .contacts-title.-mod Реквизиты организации:

        ul.reset.contacts-rec
          li
            b ИНН:
            span 5047041033

          li
            b КПП:
            span 772901001

          li
            b ОГРН:
            span 1035009568736

          li
            b Юридический адрес:
            span 119620, г. Москва, ул. 50 Лет Октября, дом 12
</template>

<script>
export default {
  name: 'Contacts',

  data() {
    return {
      ready: false,
      title: 'Контакты',
    };
  },
  metaInfo() {
    return {
      title: `ФГАУ Росжилкомплекс - ${this.title}`,
      meta: [{
      }],
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
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.contacts-left
  box-shadow: 3px 0 3px rgba(38, 50, 56, 0.12)
  background: $color-white
  padding-right: 30px
  padding-top: 71px
  padding-bottom: 30px
  width: 33%
  color: #030405
  font-size: 14px
  line-height: 1.285714286
  pointer-events: auto
  position: relative

  +media($land, $scaling)
    padding-right: size(30, $size-land)
    padding-top: size(71, $size-land)
    padding-bottom: size(30, $size-land)
    font-size: size(14, $size-land)

  +media($port, ">=tablet")
    padding: size(40, $size-port-tablet) size(48, $size-port-tablet)
    font-size: size(14, $size-port-tablet)
    width: 100%
    border-radius: 15px 15px 0px 0px
    box-shadow: 0px 0px 8px rgba(38, 50, 56, 0.25)

  +media($port, "<tablet")
    padding: size(20, $size-port)
    font-size: size(14, $size-port)
    width: 100%
    border-radius: 15px 15px 0px 0px
    box-shadow: 0px 0px 8px rgba(38, 50, 56, 0.25)

  &::before
    content: ""
    position: absolute
    top: 0
    bottom: 0
    right: 100%
    width: 1500px
    background: #fff

.contacts-map
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #eee

.contacts-rec
  li
    margin-bottom: 22px

    +media($land, $scaling)
      margin-bottom: size(22, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(22, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(22, $size-port)

    b
      font-weight: 500
      margin-right: 8px

      +media($land, $scaling)
        margin-right: size(8, $size-land)

      +media($port, ">=tablet")
        margin-right: size(8, $size-port-tablet)

      +media($port, "<tablet")
        margin-right: size(8, $size-port)

    span
      display: inline-flex

.contacts-line
  height: 1px
  background: #D2D3D4
  margin: 40px 0

  +media($land, $scaling)
    margin: size(40, $size-land) 0

  +media($port, ">=tablet")
    margin: size(40, $size-port-tablet) 0

  +media($port, "<tablet")
    margin: size(40, $size-port) 0

.contacts-time
  span
    margin-right: 33px

    +media($land, $scaling)
      margin-right: size(33, $size-land)

    +media($port, ">=tablet")
      margin-right: size(33, $size-port-tablet)

    +media($port, "<tablet")
      margin-right: size(33, $size-port)

.contacts-set-point
  margin-bottom: 9px

  +media($land, $scaling)
    margin-bottom: size(9, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(9, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(9, $size-port)

.contacts-set-item
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: center
  color: #0071B9
  font-weight: 500
  font-size: 18px
  margin-bottom: 4px

  a
    text-decoration: none

  +media($land, $scaling)
    font-size: size(18, $size-land)
    margin-bottom: size(4, $size-land)

  +media($port, ">=tablet")
    font-size: size(18, $size-port-tablet)
    margin-bottom: size(4, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(18, $size-port)
    margin-bottom: size(4, $size-port)

  .icon
    margin-right: 7px

    +media($land, $scaling)
      margin-right: size(7, $size-land)

    +media($port, ">=tablet")
      margin-right: size(7, $size-port-tablet)

    +media($port, "<tablet")
      margin-right: size(7, $size-port)

.contacts-set
  margin-bottom: 21px

  +media($land, $scaling)
    margin-bottom: size(21, $size-land)

  +media($port, ">=tablet")
    margin-bottom: size(21, $size-port-tablet)

  +media($port, "<tablet")
    margin-bottom: size(21, $size-port)

  p
    margin: 0
    color: #515658

.contacts-sub-title
  color: #515658
  font-size: 16px
  font-weight: 500
  margin-bottom: 15px
  margin-top: 30px

  +media($land, $scaling)
    font-size: size(16, $size-land)
    margin-bottom: size(15, $size-land)
    margin-top: size(30, $size-land)

  +media($port, ">=tablet")
    font-size: size(16, $size-port-tablet)
    margin-bottom: size(15, $size-port-tablet)
    margin-top: size(30, $size-port-tablet)

  +media($port, "<tablet")
    font-size: size(16, $size-port)
    margin-bottom: size(15, $size-port)
    margin-top: size(30, $size-port)

.content
  padding-bottom: 0
  position: relative

  +media($land, $scaling)
    margin-top: size(-40, $size-land)

  +media($port, ">=tablet")
    margin-top: size(-40, $size-port-tablet)

  +media($port, "<tablet")
    margin-top: size(-40, $size-port)

.contacts
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: stretch
  position: relative
  pointer-events: none

  +media($port, ">=tablet")
    padding: 0
    margin-top: 60vh

  +media($port, "<tablet")
    padding: 0
    margin-top: 60vh

  .contacts-list-text
    margin-bottom: 16px

    +media($land, $scaling)
      margin-bottom: size(16, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(16, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(16, $size-port)

    &:last-child
      margin-bottom: 0

  .contacts-list
    font-size: 12px
    line-height: 1.33
    position: relative

    +media($land, $scaling)
      font-size: size(12, $size-land)

    +media($port, ">=tablet")
      font-size: size(12, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(12, $size-port)

    li
      display: flex
      flex-flow: row nowrap
      justify-content: flex-start
      align-items: baseline
      margin-bottom: 16px

      +media($land, $scaling)
        margin-bottom: size(16, $size-land)

      +media($port, ">=tablet")
        margin-bottom: size(16, $size-port-tablet)

      +media($port, "<tablet")
        margin-bottom: size(16, $size-port)

      > div
        flex: 1

    b
      color: $color-blue
      width: 88px

      +media($land, $scaling)
        width: size(88, $size-land)

      +media($port, ">=tablet")
        width: size(88, $size-port-tablet)

      +media($port, "<tablet")
        width: size(88, $size-port)

  .contacts-title
    font-weight: bold
    font-size: 26px
    margin-bottom: 43px
    color: #0071B9

    +media($land, $scaling)
      font-size: size(24, $size-land)
      margin-bottom: size(25, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)
      margin-bottom: size(25, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(24, $size-port)
      margin-bottom: size(25, $size-port)

    &.-mod
      font-size: 20px
      margin-bottom: 30px

</style>
