<template lang="pug">
  section.call-wrapper
    .call-left
      .call-top
        .call-about
          .call-name Семенов-Тяншанский
          .call-subname Александр Александрович
        .call-status
          .call-status-main
            p Статус:
            span.-in-work В работе
          .call-status-add
            p Доп. статус:
            Select(:list="list")
        .call-info
          .call-row
            .call-info-name Адрес
            .call-info-val Маршала Блюхера пр. 4/2 г. Санкт-Петербург
          .call-row
            .call-info-name Основной телефон
            .call-info-val + 7 (999)123-22-29
            .call-info-options
              router-link.call-info-option.icon.i_phone.show-message.show-message-center(:to="'/newAdmin/call/' + 2")
                span Добавить дополнительный <br>номер телефона
              router-link.call-info-option.icon.i_edit(:to="'/newAdmin/call/' + 2")
          .call-row
            .call-info-name Электронная почта
            .call-info-val name@name.com
            .call-info-options
              router-link.call-info-option.icon.i_edit(:to="'/newAdmin/call/' + 2")
              router-link.call-info-option.icon.i_edit(:to="'/newAdmin/call/' + 2")
      .call-bottom
        .call-bottom-title Общая задолженность
        .call-bottom-val - 800 995,05 ₽
        .call-bottom-link.show-message.show-message-center
          .icon.i_calculate
          span Прикрепить лицевой счет
        .call-bottom-list
          .call-bottom-item
            .call-bottom-col
              .journal-id 620058718
            .call-bottom-col
              .journal-val
                | - 800 995,05 ₽
                v-lazy-image(:src="require(`@/assets/images/journal-val-icon.svg`)" alt="")
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-end 995,05 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-balance + 2 995,05 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
          .call-bottom-item
            .call-bottom-col
              .journal-id 620058718
            .call-bottom-col
              .journal-val
                | 0 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-end 0 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-balance + 2 995,05 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
          .call-bottom-item
            .call-bottom-col
              .journal-id 620058718
            .call-bottom-col
              .journal-val
                | 0 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-end 0 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
            .call-bottom-col
              .journal-balance + 2 995,05 ₽
              .journal-date 27 дек 2020, 10:21
              .journal-type Последнее поступление
    .call-right
      .call-right-top
        .call-right-title Планировщик
        .call-right-options
          router-link.call-right-option.show-message(:to="'/newAdmin/call/' + 2")
            v-lazy-image(:src="require(`@/assets/images/plus.svg`)" alt="")
            span Запланировать звонок
          router-link.call-right-option(:to="'/newAdmin/call/' + 2")
            v-lazy-image(:src="require(`@/assets/images/call-icon-2.svg`)" alt="")
          router-link.call-right-option.show-message(:to="'/newAdmin/call/' + 2")
            v-lazy-image(:src="require(`@/assets/images/call-calendar.svg`)" alt="")
            span Отметить дату <br>планируемого платежа
      .call-right-links
        router-link.call-right-link(:to="'/newAdmin/call/' + 2")
          .icon.i_phone
          | Перезвонить
        router-link.call-right-link.-hollow(:to="'/newAdmin/call/' + 2") Отправить смс
      .call-events.scroll-style
        .call-events-title События
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
        .call-events-item
          .call-events-date 24 дек 2020, 10:11
          .call-events-text Поступила заявка от Семенова-Тяншанского А.А.
      .call-pagination
        .pagination
          router-link.pagination-item(to="/newAdmin/call") 1
          router-link.pagination-item(to="/newAdmin/call/2") 2
          router-link.pagination-item(to="/newAdmin/call/3") 3
          router-link.pagination-item(to="/newAdmin/call/4") 4
          router-link.pagination-item.pagination-next(to="/newAdmin/call/2")
            | Вперёд
            v-lazy-image(:src="require(`@/assets/images/pagi-arrow.svg`)" alt="")
    .call-tabs
      button.call-tab(@click.prevent="setActive('pay')" :class="{ active: isActive('pay') }") Оплаты
      button.call-tab(@click.prevent="setActive('bids')" :class="{ active: isActive('bids') }") Заявки
      button.call-tab(@click.prevent="setActive('history')" :class="{ active: isActive('history') }") История звонков
      button.call-tab(@click.prevent="setActive('comments')" :class="{ active: isActive('comments') }") Комментарии
      button.call-tab(@click.prevent="setActive('files')" :class="{ active: isActive('files') }") Файлы
    .call-contents
      .call-content.fade#pay(:class="{ 'active show': isActive('pay') }")
        Pay
      .call-content.fade#bids(:class="{ 'active show': isActive('bids') }")
        Bids
      .call-content.fade#history(:class="{ 'active show': isActive('history') }")
        History
      .call-content.fade#comments(:class="{ 'active show': isActive('comments') }")
        Comments
      .call-content.fade#files(:class="{ 'active show': isActive('files') }")
        Files

</template>

<script>
import Select from '@/components/Select.vue';
import Pay from '@/components/newAdmin/Pay.vue';
import Bids from '@/components/newAdmin/Bids.vue';
import History from '@/components/newAdmin/History.vue';
import Comments from '@/components/newAdmin/Comments.vue';
import Files from '@/components/newAdmin/Files.vue';

export default {
  name: 'Call',

  data() {
    return {
      activeItem: 'pay',
      ready: false,
      list: [
        {
          id: 1,
          text: 'Перезвонить',
        },
        {
          id: 2,
          text: 'Сверка',
        },
        {
          id: 3,
          text: 'Рассрочка',
        },
        {
          id: 4,
          text: 'Выдача справки',
        },
      ],
    };
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },

  mounted() {
    this.ready = true;
  },

  components: {
    Select,
    Pay,
    Bids,
    History,
    Comments,
    Files,
  },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"
@import "../../styles/blocks/newAdmin"

.fade
  display: none
.show
  display: block

.call
  &-wrapper
    flex: 1
    display: flex
    flex-wrap: wrap
  &-status
    .input-text
      height: 24px !important
      padding: 0 !important
    .select .select-arr
      color: #00b2cc

</style>
