$(document).ready(function () {
    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });

    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("invalid");
        $(this).closest('.form-group').removeClass('has-error');
        $(this).closest('.radio-fields').removeClass('invalid');
        $(this).closest('.check-field').removeClass('invalid');
    });

    $('select').selectmenu();
    $('select').on('change selectmenuchange', function () {
        $(this).closest('.form-group').removeClass('has-error');
    });

    $(".form-group .ui-selectmenu-button").on("focus", function () {
        $(this).closest(".form-group").addClass("is-focused");
    });

    $(".form-group .ui-selectmenu-button").on("focusout", function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $(".form-control").focusin(function () {
        $(this).closest(".form-group").addClass("is-focused");
    });

    $(".form-control").focusout(function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $.validator.addMethod(
        "email",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                )
            );
        },
        "Enter valid email address !"
    );

    $.validator.addMethod("mobileNumber", function (value, element) {
        return this.optional(element) || value.match(/^[6-9]\d+$/) && value.length >= 10;
    }, "Invalid mobile number!");

    $("#header_form").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            enterKeyword: {
                required: true,
            },
            propertyType: {
                required: true,
            },
            location: {
                required: true,
            },
            price: {
                required: true,
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $("#inquiry_form").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
                mobileNumber: true
            },
            emailID: {
                required: true,
                email: true,
            },
            project: {
                required: true,
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

$(".NumericFormat").autoNumeric({
    mDec: "0",
    lZero: "deny",
    vMax: "9999999"
});

function OnlyCharSpace(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[a-zA-Z ]+$/i);
    return pattern.test(value);
}

function OnlyNumeric(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[0-9]*$/i);
    return pattern.test(value);
}

$('#enterKeyword').bind('keypress', OnlyCharSpace);
$('#propertyType').bind('keypress', OnlyCharSpace);
$('#project').bind('keypress', OnlyCharSpace);
$('#name').bind('keypress', OnlyCharSpace);
$('#location').bind('keypress', OnlyCharSpace);
$('#price').bind('keypress', OnlyNumeric);
$('#phone').bind('keypress', OnlyNumeric);


var navbar = document.querySelector('nav')
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });