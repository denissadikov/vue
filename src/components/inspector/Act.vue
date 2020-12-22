<template lang="pug">
  .act
    .act-heading.-active
      .act-heading-title
        b Входная группа
        span 5 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span 00%

      .act-heading-arr.icon.i_arr-b

    .act-body
      .act-form
        .act-form-title Входная дверь

        .act-form-item
          b Материал

          input.act-form-input(type="text" maxlength="" placeholder="")

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Исправность:
          b
          label
            b замка

            .switch
              input(type="checkbox" value="")
              i.icon.i_ch

        label.act-form-item
          b звонка

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b ручек

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Повреждения:
          b полотна
          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Коробки и наличников

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Иное

          input.act-form-input(type="text" maxlength="" placeholder="")

      .act-form
        .act-form-title Домофонное устройство

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Работоспособность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

      .act-form
        .act-form-title Квартирный электрический щиток

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Работоспособность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input.-w(type="text" maxlength="" placeholder="")

      .act-form
        .act-form-title ИПУ электроэнергии

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Наличие паспорта

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Дата очередной проверки

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Показания

          input.act-form-input(type="text" maxlength="" placeholder="")

      .act-form
        .act-form-title ИПУ отопления

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Наличие паспорта

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Дата очередной проверки

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Показания

          input.act-form-input(type="text" maxlength="" placeholder="")

    .act-heading.-active
      .act-heading-title
        b Квартирный коридор
        span 10 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(
            stroke-dasharray="106.81415022205297 106.81415022205297"
            :stroke-dashoffset="106.81415022205297 - 35 / 100 * 106.81415022205297"
            stroke='#0071B9' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span.-blue 35%

      .act-heading-arr.icon.i_arr-b

    .act-body.-mod
      .act-step
        .act-progress.-min.act-step-progress
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(stroke='#fff' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(
              stroke-dasharray="106.81415022205297 106.81415022205297"
              :stroke-dashoffset="106.81415022205297 - 20 / 100 * 106.81415022205297"
              stroke='#666' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          span 1

        .act-form-title Входная дверь

        .act-form-item
          b Материал

          input.act-form-input(type="text" maxlength="" placeholder="")

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Исправность:
          b
          label
            b замка

            .switch
              input(type="checkbox" value="")
              i.icon.i_ch

        label.act-form-item
          b звонка

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b ручек

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Повреждения:
          b полотна
          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Коробки и наличников

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Иное

          input.act-form-input(type="text" maxlength="" placeholder="")

      .act-step
        .act-progress.-min.act-step-progress
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(stroke='#fff' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(
              stroke-dasharray="106.81415022205297 106.81415022205297"
              :stroke-dashoffset="106.81415022205297 - 40 / 100 * 106.81415022205297"
              stroke='#666' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          span 2

        .act-form-title Домофонное устройство

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Работоспособность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

      .act-step
        .act-progress.-min.act-step-progress
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(stroke='#fff' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(
              stroke-dasharray="106.81415022205297 106.81415022205297"
              :stroke-dashoffset="106.81415022205297 - 60 / 100 * 106.81415022205297"
              stroke='#666' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          span 3

        .act-form-title Квартирный электрический щиток

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Работоспособность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input.-w1(type="text" maxlength="" placeholder="")

      .act-step
        .act-progress.-min.act-step-progress
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(stroke='#fff' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(
              stroke-dasharray="106.81415022205297 106.81415022205297"
              :stroke-dashoffset="106.81415022205297 - 80 / 100 * 106.81415022205297"
              stroke='#666' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          span 4

        .act-form-title ИПУ электроэнергии

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Наличие паспорта

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Дата очередной проверки

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Показания

          input.act-form-input(type="text" maxlength="" placeholder="")

      .act-step
        .act-progress.-min.act-step-progress
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(stroke='#fff' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          svg.progress-ring(width='36' height='36')
            circle.progress-ring__circle(
              stroke-dasharray="106.81415022205297 106.81415022205297"
              :stroke-dashoffset="106.81415022205297 - 100 / 100 * 106.81415022205297"
              stroke='#666' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
          span 5

        .act-form-title ИПУ отопления

        label.act-form-item
          b Наличие

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Целостность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        label.act-form-item
          b Работоспособность

          .switch
            input(type="checkbox" value="")
            i.icon.i_ch

        .act-form-item
          b Характер повреждений

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Дата очередной проверки

          input.act-form-input(type="text" maxlength="" placeholder="")

        .act-form-item
          b Показания

          input.act-form-input(type="text" maxlength="" placeholder="")

    .act-heading
      .act-heading-title
        b Комната 1
        span 5 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(
            stroke-dasharray="106.81415022205297 106.81415022205297"
            :stroke-dashoffset="106.81415022205297 - 95 / 100 * 106.81415022205297"
            stroke='#0071B9' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span.-blue 95%

      .act-heading-arr.icon.i_arr-b
    .act-heading
      .act-heading-title
        b Комната 1
        span 5 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(
            stroke-dasharray="106.81415022205297 106.81415022205297"
            :stroke-dashoffset="106.81415022205297 - 95 / 100 * 106.81415022205297"
            stroke='#0071B9' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span.-blue 95%

      .act-heading-arr.icon.i_arr-b
    .act-heading
      .act-heading-title
        b Комната 1
        span 5 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(
            stroke-dasharray="106.81415022205297 106.81415022205297"
            :stroke-dashoffset="106.81415022205297 - 73 / 100 * 106.81415022205297"
            stroke='#0071B9' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span.-blue 73%

      .act-heading-arr.icon.i_arr-b
    .act-heading
      .act-heading-title
        b Комната 1
        span 5 м2

      .act-progress
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(stroke='#F1F2F2' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')
        svg.progress-ring(width='36' height='36')
          circle.progress-ring__circle(
            stroke-dasharray="106.81415022205297 106.81415022205297"
            :stroke-dashoffset="106.81415022205297 - 95 / 100 * 106.81415022205297"
            stroke='#0071B9' stroke-width='2' fill='transparent' r='17' cx='18' cy='18')

        span.-blue 95%

      .act-heading-arr.icon.i_arr-b
</template>

<script>
export default {
  name: 'Act',

  data() {
    return {
      ready: false,
    };
  },

  methods: {
    progress() {
      const circle = document.querySelector('circle');
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }

      const input = document.querySelector('input');
      setProgress(input.value);

      input.addEventListener('change', () => {
        if (input.value < 101 && input.value > -1) {
          setProgress(input.value);
        }
      });
    },
  },

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.progress-ring__circle
  transition: 0.35s stroke-dashoffset
  transform: rotate(-90deg)
  transform-origin: 50% 50%

.act
  .act-step
    background: rgba(241, 242, 242, .75)
    margin-bottom: 26px
    padding: 25px 36px 12px 65px
    position: relative

    &:last-child
      margin-bottom: 0

    .act-step-progress
      position: absolute
      left: 18px
      top: 16px
      transform: scale(0.85)

  .act-form-input
    border: 0
    width: 126px
    padding: 2px
    font-size: 12px
    line-height: 1.15
    font-style: italic
    font-weight: normal
    border-bottom: 1px solid $color-grey-dark
    background-color: transparent

    &.-w
      width: 300px

    &.-w1
      width: 600px

  .act-form-item
    margin-right: 30px
    font-size: 14px
    font-weight: 500
    margin-bottom: 15px
    display: inline-flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: flex-end
    user-select: none

    .switch
      margin-right: 0

    b
      font-weight: 500
      margin-right: 5px

  .act-form-title
    font-weight: 500
    font-size: 18px
    line-height: 1
    margin-right: 30px
    margin-bottom: 15px

  .act-form
    padding: 16px 25px
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: baseline
    padding-bottom: 0
    margin: 10px 0

    &:nth-child(2n)
      background: rgba(241, 242, 242, .75)

  .act-body
    background: $color-white
    border-radius: 0px 5px 5px 5px
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25)
    margin-bottom: 10px
    padding: 18px 0

    &.-mod
      padding: 23px 26px

  .act-progress
    width: 35px
    height: 35px
    position: relative
    font-size: 14px
    font-weight: 500
    display: flex
    flex-flow: column nowrap
    justify-content: center
    align-items: center
    color: $color-grey-medium

    .-blue
      color: $color-blue

    &.-min
      color: $color-base

    svg
      position: absolute
      top: 0
      left: 0

  .act-heading-arr
    color: $color-blue
    cursor: pointer
    margin-left: 28px

  .act-heading-title
    flex: 1
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: baseline
    color: $color-grey-text

    b
      font-weight: 500
      font-size: 18px
      margin-right: 15px

    span
      font-style: italic
      font-size: 12px

  .act-heading
    cursor: pointer
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    padding: 7px 26px
    background: $color-white
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)
    border-radius:  $radius-container
    margin-bottom: 1px
    max-width: 519px

    &.-active
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)
      border-radius:  $radius-container 5px 0px 0px
      margin-bottom: 0

      .act-heading-arr
        transform: rotate(-180deg)

      .act-heading-title
        b
          text-decoration: underline

</style>
