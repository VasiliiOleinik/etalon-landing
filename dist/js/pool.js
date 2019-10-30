'use strict';

$(document).ready(function () {
    $('#pool--length').spinner({
        min: 2,
        max: 8,
        step: 0.1,
        start: 5,
        change: function change(event, ui) {
            $('#slider-top').slider('option', 'value', $(this).val());
            setTimeout(function () {
                getValues();
            }, 50);
        },
        spin: function spin(event, ui) {
            $('#slider-top').slider('option', 'value', ui.value);
            setTimeout(function () {
                getValues();
            }, 50);
        }
    });
    $('#pool--width').spinner({
        min: 2,
        max: 20,
        step: 0.1,
        start: 5,
        change: function change(event, ui) {
            var $spinner = $(this),
                min = $spinner.spinner('option', 'min'),
                max = $spinner.spinner('option', 'max'),
                value = $spinner.val();
            $('#slider-left').slider('option', 'value', max - value + min);
            setTimeout(function () {
                getValues();
            }, 50);
        },
        spin: function spin(event, ui) {
            var $spinner = $(this),
                min = $spinner.spinner('option', 'min'),
                max = $spinner.spinner('option', 'max');
            $('#slider-left').slider('option', 'value', max - ui.value + min);
            setTimeout(function () {
                getValues();
            }, 50);
        }
    });

    $('#pool-height').spinner({
        min: 0.4,
        max: 3.6,
        step: 0.4,
        start: 1,
        change: function change(event, ui) {
            $('#slider-right').slider('option', 'value', $(this).val());
        },
        spin: function spin(event, ui) {
            $('#slider-right').slider('option', 'value', ui.value);
        }
    });

    $('#slider-left').slider({
        orientation: 'vertical',
        range: 'min',
        animate: 'fast',
        min: 2,
        max: 20,
        step: 0.1,
        value: 10,

        slide: function slide(event, ui) {
            var $slider = $(this),
                min = $slider.slider('option', 'min'),
                max = $slider.slider('option', 'max');

            $('#pool--width').val(max - ui.value + min);
            setTimeout(function () {
                getValues();
            }, 50);
        }
    });
    $('#slider-right').slider({
        orientation: 'vertical',
        range: 'min', animate: 'fast',
        min: 0.4,
        max: 3.6,
        step: 0.4,
        value: 1,
        slide: function slide(event, ui) {
            $('#pool-height').val(ui.value);
        }
    });
    $('#slider-top').slider({
        range: 'min',
        animate: 'fast',
        min: 2,
        max: 8,
        step: 0.1,
        value: 5,
        slide: function slide(event, ui) {
            $('#pool--length').val(ui.value);
            setTimeout(function () {
                getValues();
            }, 50);
        }
    });

    function getValues() {
        var poolwidth = window.getComputedStyle(document.querySelector('.polzunok-container-3 .ui-slider-range.ui-slider-range-min')).width,
            poolfullwidth = window.getComputedStyle(document.querySelector('#slider-top')).width,
            poolheight = window.getComputedStyle(document.querySelector('.polzunok-container-1 .ui-slider-range.ui-slider-range-min')).height,
            poolfullheight = window.getComputedStyle(document.querySelector('#slider-left')).height,
            poolarea = $('#poolarea'),
            tempheight = void 0,
            deltaheight = 2,
            deltawidth = 0;
        if ($(window).width() >= 1200) {
            deltaheight = 4;
            deltawidth = 2;
        }

        poolwidth = Number(poolwidth.replace(/([a-z])/g, ''));
        poolheight = Number(poolheight.replace(/([a-z])/g, ''));
        poolfullheight = Number(poolfullheight.replace(/([a-z])/g, ''));
        tempheight = poolfullheight - poolheight - deltaheight;
        poolarea.css('height', tempheight + 'px');
        poolarea.css('width', poolwidth - deltawidth + 'px');
    }
});