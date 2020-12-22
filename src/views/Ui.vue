<template lang="pug">
  main.content
    section.container
      h6 Заголовки

      h1 h1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h2 h2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h3 h3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h4 h4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h5 h5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h6 h6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      h6 Параграфы

      p Lorem ipsum <i>dolor</i> sit amet, <b>consectetur</b> adipiscing elit. <a href="#">Aenean</a> in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien. Aenean placerat aliquet neque et porttitor. Fusce interdum nisi vitae aliquam tincidunt. Sed sed erat sit amet lectus rhoncus semper. Aliquam hendrerit at lectus et dignissim. Aenean a mauris nisi. Vivamus tincidunt urna non massa rhoncus, in dapibus tellus luctus. Proin lacinia dui purus, id viverra lacus posuere non.

      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien.

      h6 Списки

      ol
        li Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien.

        li Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien.

      ul
        li Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien.

        li Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vehicula arcu. Sed bibendum malesuada egestas. Ut ac vestibulum neque. In non tortor sed lacus euismod vestibulum sed ornare justo. Praesent eleifend laoreet mi viverra sagittis. Proin a fermentum orci. Curabitur dignissim, nunc non sagittis vestibulum, nisi erat dictum nisi, mattis rhoncus risus nulla id quam. Fusce luctus, eros non fermentum posuere, justo ipsum placerat lorem, non fermentum augue orci at sapien.

      h6 Кнопки

      p.btn-wrapper
        button.btn(type="button") Кнопка

        button.btn.-red(type="button") Кнопка

        button.btn.-grey(type="button") Кнопка

        button.btn.-white(type="button") Кнопка

        button.btn.-mdl(type="button") Кнопка

        button.btn.-mdl.-red(type="button") Кнопка

        button.btn.-mdl.-grey(type="button") Кнопка

        button.btn.-mdl.-white(type="button") Кнопка

        button.btn.-min(type="button") Кнопка

        button.btn.-min.-red(type="button") Кнопка

        button.btn.-min.-grey(type="button") Кнопка

        button.btn.-min.-white(type="button") Кнопка

        button.btn.-border(type="button") Кнопка

        button.btn.-mdl.-border(type="button") Кнопка

        button.btn.-min.-border(type="button") Кнопка

        button.btn.-min.-border.-grey(type="button") Кнопка

      h6 Колонки

      .flex-row.-stretch
        .flex-row-item.w-33: p.bg-green w-33

        .flex-row-item.w-33: p.bg-green w-33

        .flex-row-item.w-33: p.bg-green w-33

        .flex-row-item.w-20: p.bg-green w-20

        .flex-row-item.w-20: p.bg-green w-20

        .flex-row-item.w-20: p.bg-green w-20

        .flex-row-item.w-20: p.bg-green w-20

        .flex-row-item.w-20: p.bg-green w-20

      h6 Иконки

      .demo-icons
        .btn(v-for="icon in icons")
          .icon(:class="icon")

      br
      br

</template>

<script>
export default {
  name: 'Ui',

  data() {
    return {
      ready: false,
      icons: ['i_email', 'i_fb', 'i_insta', 'i_phone', 'i_rub', 'i_i', 'i_i1', 'i_i2', 'i_i3', 'i_i4', 'i_i5', 'i_i6', 'i_arr-l', 'i_arr-r', 'i_bell', 'i_bad', 'i_ch', 'i_edit', 'i_exit', 'i_home', 'i_home1', 'i_home-ch', 'i_home-q', 'i_home-x', 'i_search', 'i_settings', 'i_time', 'i_user', 'i_x', 'i_arr-b', 'i_bold', 'i_calculate', 'i_pencil', 'i_gas', 'i_bad-cold', 'i_card', 'i_warn1', 'i_star', 'i_star-full', 'i_add-file', 'i_vk1', 'i_ok1', 'i_tw', 'i_teleg'],
    };
  },

  methods: {},

  mounted() {
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.demo-icons
  .btn
    margin-right: 5px
    margin-bottom: 5px

.bg-green
  background-color: green

.btn-wrapper
  .btn
    margin-right: 5px
    margin-bottom: 5px

</style>
