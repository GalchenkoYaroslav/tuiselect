/**
 * Created by bpali on 31.03.2017.
 */
// $(function() {
//     $('input[name="daterange"]').daterangepicker();
// });
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$( "#date1" ).datepicker({
    minDate: 0,
    dateFormat: 'yy-mm-dd',
    showOtherMonths: true,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true
});
// $("#nights-slide").slider({});
// $("#adult-slide").slider({});
// $("#children-slide").slider({});
// $("#child1age").slider({});
// $("#child2age").slider({});
// $("#child3age").slider({});
$(".slide-input-toggle").slider({});
$(".slide-input-toggle").slider("disable");
