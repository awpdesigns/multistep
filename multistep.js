/*
    Project Name: AN Multistep Form
    Description: AN Multistep Form
    Author: Atas Nalar
    Version: 1.0
    License: GNU General Public License v2 or later
    License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
(function () {
    'use strict';

    var ANForm = function () {
        //! Inputs Validation
        $('input').each(function () {
            // Add Email Validation to input[type=email] that has a [data-email-validation=true]
            if ($(this).is('[type="email"]')) {
                var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if ($(this).attr('data-email-validation') === 'true') {
                    // Add Email Validation Element
                    $(this).before('<small class="email-validation"></small>');
                    // Hide Email Validation Element First
                    $(this).prev().hide();
                    // Email Validation css
                    $(this).prev().css({
                        'color': '#FFFFFF',
                        'font-size': '0.75rem',
                        'padding': '0 .25rem',
                        'border-radius': '0.25rem',
                    });

                    // Check if value match with pattern
                    $(this).on('keyup', function () {
                        var email_validation = $(this).prev();

                        if ($(this).val().length > 0) {
                            if (emailRegexp.test($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                email_validation.removeClass('bg-danger');
                                email_validation.addClass('bg-success');
                                email_validation.text('Valid');
                                email_validation.show();
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                email_validation.removeClass('bg-success');
                                email_validation.addClass('bg-danger');
                                email_validation.text('Not valid');
                                email_validation.show();
                            }
                        } else {
                            email_validation.removeClass('bg-success');
                            email_validation.removeClass('bg-danger');
                            $(this).removeClass('is-valid');
                            email_validation.text('');
                        }
                    });
                }
            }

            // Add Phone Validation to input[type=tel] or input[type=text] that has a [data-phone-validation=true] and force to only numbers
            if ($(this).is('[type="tel"]') || $(this).is('[type="text"]')) {
                var phoneRegexp = /^62[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im;
                // Indonesia Phone Number

                if ($(this).attr('data-phone-validation') === 'true') {
                    // Add Phone Validation Element
                    $(this).before('<small class="phone-validation"></small>');
                    // Hide Phone Validation Element First
                    $(this).prev().hide();
                    // Phone Validation css
                    $(this).prev().css({
                        'color': '#FFFFFF',
                        'font-size': '0.75rem',
                        'padding': '0 .25rem',
                        'border-radius': '0.25rem',
                    });
                    // Force input only number / Only ASCII character in that range allowed
                    /* Use on attribute version
                    $(this).attr('onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57)');
                    */
                    $(this).on('keypress', function (e) {
                        var charCode = e.which || e.keyCode;
                        var phone_validation = $(this).prev();

                        if (charCode >= 48 && charCode <= 57) {
                            phone_validation.show();
                        } else {
                            phone_validation.addClass('bg-danger');
                            phone_validation.text('Only number allowed');
                            phone_validation.show();
                        }
                        return (charCode >= 48 && charCode <= 57);
                    });
                    // Check if value match with pattern
                    $(this).on('keyup', function () {
                        var phone_validation = $(this).prev();
                        var phoneValue = $(this).val();

                        // if first number is 0 and this input is required, replace it with 62
                        if (phoneValue.substring(0, 1) == 0) {
                            phoneValue = '62' + phoneValue.substring(1);
                            $(this).val(phoneValue);
                        }

                        if ($(this).val().length > 0) {
                            if (phoneRegexp.test($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                phone_validation.removeClass('bg-danger');
                                phone_validation.addClass('bg-success');
                                phone_validation.text('Valid');
                                phone_validation.show();
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                phone_validation.removeClass('bg-success');
                                phone_validation.addClass('bg-danger');
                                phone_validation.text('Not valid');
                                phone_validation.show();
                            }
                        } else {
                            phone_validation.removeClass('bg-success');
                            phone_validation.removeClass('bg-danger');
                            $(this).removeClass('is-valid');
                            phone_validation.text('');
                        }
                    });
                }
            }

            // Add Postcode Validation to input[type=number] or input[type=text] that has a [data-postcode-validation=true] and force to only numbers
            if ($(this).is('[type="number"]') || $(this).is('[type="text"]')) {
                var postcodeRegexp = /^[0-9]{5}$/;

                if ($(this).attr('data-postcode-validation') === 'true') {
                    // Add Postcode Validation Element
                    $(this).before('<small class="postcode-validation"></small>');
                    // Hide Postcode Validation Element First
                    $(this).prev().hide();
                    // Postcode Validation css
                    $(this).prev().css({
                        'color': '#FFFFFF',
                        'font-size': '0.75rem',
                        'padding': '0 .25rem',
                        'border-radius': '0.25rem',
                    });
                    // Force input only number / Only ASCII character in that range allowed
                    /* Use on attribute version
                    $(this).attr('onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57)');
                    */
                    $(this).on('keypress', function (e) {
                        var charCode = e.which || e.keyCode;
                        var postcode_validation = $(this).prev();

                        if (charCode >= 48 && charCode <= 57) {
                            postcode_validation.show();
                        } else {
                            postcode_validation.addClass('bg-danger');
                            postcode_validation.text('Only number allowed');
                            postcode_validation.show();
                        }
                        return (charCode >= 48 && charCode <= 57);
                    });
                    // Check if value match with pattern
                    $(this).on('keyup', function () {
                        var postcode_validation = $(this).prev();

                        if ($(this).val().length > 0) {
                            if (postcodeRegexp.test($(this).val())) {
                                $(this).removeClass('is-invalid');
                                $(this).addClass('is-valid');
                                postcode_validation.removeClass('bg-danger');
                                postcode_validation.addClass('bg-success');
                                postcode_validation.text('Valid');
                                postcode_validation.show();
                            } else {
                                $(this).removeClass('is-valid');
                                $(this).addClass('is-invalid');
                                postcode_validation.removeClass('bg-success');
                                postcode_validation.addClass('bg-danger');
                                postcode_validation.text('Not valid');
                                postcode_validation.show();
                            }
                        } else {
                            postcode_validation.removeClass('bg-success');
                            postcode_validation.removeClass('bg-danger');
                            $(this).removeClass('is-valid');
                            postcode_validation.text('');
                        }
                    });
                }
            }
        });

        //! File upload validation (Vendor Legality only jpg, jpeg, pdf with max size 500kb)
        $('#vendor-legality').on('change', function () {
            var file = $(this).val();
            var ext = file.split('.').pop().toLowerCase();
            var fileSize = this.files[0].size;
            var textValidation = $('#validate-legality').text();

            if ($.inArray(ext, ['jpg', 'jpeg', 'pdf']) == -1) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $('#validate-legality').text('Only jpg, jpeg, pdf allowed');
            } else {
                if (fileSize > 500000) {
                    $(this).addClass('is-invalid');
                    $(this).removeClass('is-valid');
                    $('#validate-legality').text('Max file size 500kb');
                } else {
                    $(this).removeClass('is-invalid');
                    $(this).addClass('is-valid');
                    $('#validate-legality').text(textValidation);
                }
            }
        });

        //! Select2
        // Category Multiple
        $('#vendor_category').select2({
            placeholder: function () {
                $(this).data('placeholder');
            },
            allowClear: true,
            closeOnSelect: false,
            width: '100%',
        });
        // Trigger empty value
        $('#vendor_category').siblings().find('.select2-selection__rendered').each(function () {
            // if select2-selection__choice not exist
            if ($(this).find('.select2-selection__choice').length == 0) {
                $(this).find('.select2-search__field').css('width', '100%');
            }
        });
        // On change select2
        $('#vendor_category').on('change', function () {
            var options = $(this).val();
            $('#vendor_category option').each(function () {
                // Check selected options (multiple)
                if (options.indexOf($(this).val()) > -1) {
                    $(this).attr('selected', 'selected');
                } else {
                    $(this).removeAttr('selected');
                }
            });
        });
        //! State>City>District Select2
        // State
        $('#vendor_state').select2({
            placeholder: 'Select State/Province',
            searchInputPlaceholder: 'Search State/Province',
            allowClear: false,
            closeOnSelect: true,
            width: '100%',
            //dropdownParent: $('#ModalID'), // Use this if you want to use modal
            tags: true,
            // Ajax Default Available Option State
            ajax: {
                url: '/assets/address/state.json',
                type: 'GET',
                dataType: 'json',
                delay: 250,
                // Append options to select from ajax
                processResults: function (data) {
                    // Push data to array
                    var options = [];
                    // Get data from json value and label
                    $.each(data, function (key, value) {
                        options.push({
                            id: value.value,
                            text: value.label,
                        });
                    });
                    return {
                        results: options,

                    };
                }
            },
        });
        // On change state
        $('#vendor_state').on('change', function () {
            var options = $(this).val();
            $('#vendor_state option').each(function () {
                if ($(this).val() !== options) {
                    $(this).removeAttr('selected');
                } else {
                    $(this).attr('selected', 'selected');
                }
            });
        });
        // City
        $('#vendor_city').select2({
            placeholder: 'Select City',
            searchInputPlaceholder: 'Search City',
            allowClear: false,
            closeOnSelect: true,
            width: '100%',
            //dropdownParent: $('#ModalID'), // Use this if you want to use modal
            tags: true,
            // Ajax Default Available Option based on selected State
            ajax: {
                url: '/assets/address/city.json',
                type: 'GET',
                dataType: 'json',
                delay: 250,
                processResults: function (data) {
                    var kota = [];
                    $.each(data, function (index, item) {
                        if (item.state == $('#vendor_state option:selected').val()) {
                            kota.push({
                                id: item.value,
                                text: item.value
                            });
                        }
                    });
                    return {
                        results: kota
                    };
                },
            },
            language: {
                noResults: function () {
                    return "Please select State/Province first";
                }
            },
        });
        // Load vendor_city option on change vendor_state
        $('#vendor_state').on('change', function () {
            var state_selected = $(this).find('option:selected').val();
            $.ajax({
                url: '/assets/address/city.json',
                type: 'GET',
                dataType: 'json',
                // State JSON : {"id":6,"value":"JK","label":"DKI Jakarta"}
                // City JSON: {"id":151,"value":"Kota Jakarta Barat","state":"JK","state_id":6}
                // District JSON: {"id":2089,"value":"Kalideres","state":"JK","state_id":6,"city":"Kota Jakarta Barat","city_id":151}
                // Append option to vendor_city based on vendor_state value
                // Example: if vendor_state value selected is JK (state), then load all vendor_city with state_id = 6
                success: function (data) {
                    $('#vendor_city').empty();
                    $('#vendor_district').empty();
                    $('#vendor_city').append('<option value="" selected disabled>Select City</option>');
                    $.each(data, function (i, item) {
                        if (item.state == state_selected) {
                            $('#vendor_city').append('<option value="' + item.value + '">' + item.value + '</option>');
                        }
                    });
                    // On change select2
                    $('#vendor_city').on('change', function () {
                        var options = $(this).val();
                        $('#vendor_city option').each(function () {
                            if ($(this).val() !== options) {
                                $(this).removeAttr('selected');
                            } else {
                                $(this).attr('selected', 'selected');
                            }
                        });
                    });
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        });
        // District
        $('#vendor_district').select2({
            placeholder: 'Select District',
            searchInputPlaceholder: 'Search District',
            allowClear: false,
            closeOnSelect: true,
            width: '100%',
            //dropdownParent: $('#ModalID'), // Use this if you want to use modal
            tags: true,
            language: {
                noResults: function () {
                    return "Please select City first";
                }
            },
        });
        // Load vendor_district option on change vendor_city
        $('#vendor_city').on('change', function () {
            var city_selected = $(this).find('option:selected').val();
            $.ajax({
                url: '/assets/address/district.json',
                type: 'GET',
                dataType: 'json',
                // State JSON : {"id":6,"value":"JK","label":"DKI Jakarta"}
                // City JSON: {"id":151,"value":"Kota Jakarta Barat","state":"JK","state_id":6}
                // District JSON: {"id":2089,"value":"Kalideres","state":"JK","state_id":6,"city":"Kota Jakarta Barat","city_id":151}
                // Append option to vendor_district based on vendor_city value
                // Example: if vendor_city value selected is Kota Jakarta Barat (city), then load all vendor_district with city_id = 151
                success: function (data) {
                    $('#vendor_district').empty();
                    $('#vendor_district').append('<option value="" selected disabled>Select District</option>');
                    $.each(data, function (i, item) {
                        if (item.city == city_selected) {
                            $('#vendor_district').append('<option value="' + item.value + '">' + item.value + '</option>');
                        }
                    });
                    // On change select2
                    $('#vendor_district').on('change', function () {
                        var options = $(this).val();
                        $('#vendor_district option').each(function () {
                            if ($(this).val() !== options) {
                                $(this).removeAttr('selected');
                            } else {
                                $(this).attr('selected', 'selected');
                            }
                        });
                    });
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        });

        //! Multistep Form
        // Form Selector
        var form1 = $('#form-step-1');
        var form2 = $('#form-step-2');
        var form3 = $('#form-step-3');
        // Button Selector
        var btnNext1 = $('#btnNext-1');
        var btnNext2 = $('#btnNext-2');
        var btnPrev1 = $('#btnPrev-1');
        var btnPrev2 = $('#btnPrev-2');
        var btnSubmit = $('#btnSubmitVendor');
        var loadingIcon = btnSubmit.find('.loading-icon');

        // Step 1
        btnNext1.addClass('disabled');
        // Check input/select required
        form1.find('input[required], select[required]').on('keyup change blur', function () {
            var empty = false;
            form1.find('input[required], select[required]').each(function () {
                if ($(this).val() == '' || $(this).hasClass('is-invalid')) {
                    empty = true;
                }
            });
            if (empty) {
                btnNext1.addClass('disabled');
            } else {
                btnNext1.removeClass('disabled');
            }
        });
        btnNext1.on('click', function () {
            // Show next form
            form1.addClass('d-none');
            form2.removeClass('d-none');
            $('.step-col-1').removeClass('active');
            $('.step-col-1').addClass('filled');
            $('.step-col-2').addClass('active');
        });
        btnPrev1.on('click', function () {
            // Show previous form
            form1.removeClass('d-none');
            form2.addClass('d-none');
            $('.step-col-1').addClass('active');
            $('.step-col-1').removeClass('filled');
            $('.step-col-2').removeClass('active');
        });
        // Step 2
        // Disable Next Button first
        btnNext2.addClass('disabled');
        // Check input required
        form2.find('input[required], select[required]').on('keyup change blur', function () {
            var empty = false;
            form2.find('input[required], select[required]').each(function () {
                if ($(this).val() == '' || $(this).hasClass('is-invalid')) {
                    empty = true;
                }
            });
            if (empty) {
                btnNext2.addClass('disabled');
            } else {
                btnNext2.removeClass('disabled');
            }
        });
        btnNext2.on('click', function () {
            // Show next form
            form2.addClass('d-none');
            form3.removeClass('d-none');
            $('.step-col-2').removeClass('active');
            $('.step-col-2').addClass('filled');
            $('.step-col-3').addClass('active');
        });
        btnPrev2.on('click', function () {
            // Show previous form
            form2.removeClass('d-none');
            form3.addClass('d-none');
            $('.step-col-2').addClass('active');
            $('.step-col-2').removeClass('filled');
            $('.step-col-3').removeClass('active');
        });
        // Step 3 - Submit
        btnSubmit.addClass('disabled');
        // Check input required
        form3.find('input[required], select[required]').on('keyup change blur', function () {
            var empty = false;
            form3.find('input[required], select[required]').each(function () {
                if ($(this).val() == '' || $(this).hasClass('is-invalid')) {
                    empty = true;
                }
            });
            if (empty) {
                btnSubmit.addClass('disabled');
            } else {
                btnSubmit.removeClass('disabled');
            }
        });
        $('#vendor_form').submit(function (e) {
            e.preventDefault();
            // Show loading icon
            loadingIcon.removeAttr('hidden');
            // Disable submit button
            btnSubmit.attr('disabled', true);
            setTimeout(function () {
                // Submit form
                $.ajax({
                    url: 'multistep.html',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function (data) {
                        // Hide loading icon
                        loadingIcon.attr('hidden', true);
                        // Show success message
                        $('#success-message').removeClass('d-none');
                        // Hide success message after 3 seconds
                        setTimeout(function () {
                            $('#success-message').fadeOut('slow', function () {
                                $(this).addClass('d-none');
                            });
                            // Reload page
                            location.reload();
                        }, 3000);
                    }
                });
            }, 1500);
        });
    };
    //Load functions
    $(document).ready(function () {
        ANForm();
    });
})(jQuery);