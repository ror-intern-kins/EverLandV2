document.addEventListener("turbolinks:load", function(event) {
    $('#from-create-post').submit(function () {
        //alert('aaaaaaaa')        
        //messages
        $('#title_error').text('').css({
            "color": "red"
        });
        $('#category_error').text('').css({
            "color": "red"
        });
        $('#subcategory_error').text('').css({
            "color": "red"
        });
        $('#city_error').text('').css({
            "color": "red"
        });
        $('#district_error').text('').css({
            "color": "red"
        });
        $('#project_error').text('').css({
            "color": "red"
        });
        $('#area_error').text('').css({
            "color": "red"
        });
        $('#price_error').text('').css({
            "color": "red"
        });
        $('#address_error').text('').css({
            "color": "red"
        });
        $('#desciption_error').text('').css({
            "color": "red"
        });
        $('#front_error').text('').css({
            "color": "red"
        });
        $('#entrance_error').text('').css({
            "color": "red"
        });
        $('#floor_error').text('').css({
            "color": "red"
        });
        $('#bedroom_error').text('').css({
            "color": "red"
        });
        $('#toilet_error').text('').css({
            "color": "red"
        });
        $('#furniture_error').text('').css({
            "color": "red"
        });
        $('#contact_name_error').text('').css({
            "color": "red"
        });
        $('#contact_address_error').text('').css({
            "color": "red"
        });
        $('#contact_phone_error').text('').css({
            "color": "red"
        });
        $('#contact_mobile_error').text('').css({
            "color": "red"
        });
        $('#contact_mail_error').text('').css({
            "color": "red"
        });
        $('#notice_error').text('').css({
            "color": "red"
        });

        var title = $.trim($('#post_title').val())
        var category = $('#cate_id :selected').text()
        var sub_category = $('#cate_detail_id :selected').text()
        var city = $('#city_details :selected').text()
        var district = $('#district_details :selected').text()
        var project = $.trim($('#post_project').val())
        var area = $.trim($('#post_area').val())
        var price = $.trim($('#post_price').val())
        var address = $.trim($('#post_address_number').val())
        var desciption = $.trim($('#post_description').val())
        var front = $.trim($('#post_front').val())
        var entrance = $.trim($('#post_entrance').val())
        var floor = $.trim($('#post_floor').val())
        var bedroom = $.trim($('#post_bedroom').val())
        var toilet = $.trim($('#post_toilet').val())
        var furniture = $.trim($('#post_furniture').val())
        var contact_name = $.trim($('#post_contact_name').val())
        var contact_addr = $.trim($('#post_contact_address').val())
        var contact_phone = $.trim($('#post_contact_phone').val())
        var contact_mobile = $.trim($('#post_contact_mobile').val())
        var contact_mail = $.trim($('#post_contact_mail').val())

        var validate_characters = /[A-Z]?[- a-zA-Z]( [a-zA-Z])*$/;
        var validate_digits = /^[0-9,\+-]+$/
        var validate_phone = /^0[0-9]{9,10}$/
        var validate_mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
        var flag = true

        //THÔNG TIN CƠ BẢN
        //title
        if (title == "") {
            $('#title_error').text('Tiêu đề không thể bỏ trống.');
            flag = false;
        } else if (title.length < 30) {
            $('#title_error').text('Tiêu đề có tối thiểu 30 ký tự.');
            flag = false;
        } else if (title.length > 99) {
            $('#title_error').text('Tiêu đề có tối đa 99 ký tự.');
            flag = false;
        } else $('#title_error').text('');
        //category
        if (category == "-- Hình Thức --") {
            $('#category_error').text('Vui lòng chọn hình thức');
            flag = false;
        } else $('#category_error').text('');

        //sub category
        if (sub_category == "--Phân Mục--") {
            $('#subcategory_error').text('Vui lòng chọn loại');
            flag = false;
        } else $('#subcategory_error').text('');
        //city
        if (city == '-- Tỉnh/Thành Phố --') {
            $('#city_error').text('Vui lòng chọn tỉnh/thành phố');
            flag = false;
        } else $('#city_error').text('');
        //district
        if (district == '--Quận Huyện--') {
            $('#district_error').text('Vui lòng chọn quận huyện');
            flag = false;
        } else $('#district_error').text('');
        //project
        if (project.length > 200) {
            $('#project_error').text('Dự án có độ dài tối đa 200 ký tự.');
            flag = false;
        } else if (!project.match(validate_characters) && project != '') {
            //console.log(project.match(validate_characters))
            $('#project_error').text('Tên dự án không hợp lệ.');
            flag = false;
        } else $('#project_error').text('');
        //area
        if (area.length > 6) {
            $('#area_error').text('Diện tích tối đa 999999');
            flag = false;
        } else if ((!$.isNumeric(area) && area != '') || (area <= 0 && area != '')) {
            $('#area_error').text('Diện tích không hợp lệ.');
            flag = false;
        } else $('#area_error').text('');
        //price
        if (price.length > 6) {
            $('#price_error').text('Giá tối đa 999999');
            flag = false;
        } else if ((!$.isNumeric(price) && price != '') || (price <= 0 && price != '')) {
            $('#price_error').text('Giá không hợp lệ.');
            flag = false;
        } else $('#price_error').text('');
        //address
        if (address == '') {
            $('#address_error').text('Địa chỉ không thể bỏ trống.');
            flag = false;
        } else if (address.length > 200) {
            $('#address_error').text('Địa chỉ phải có độ dài tối đa 200 ký tự.');
            flag = false;
        } else $('#address_error').text('');
        //THÔNG TIN CƠ BẢN

        //THÔNG TIN MÔ TẢ - desciption
        if (desciption == '') {
            $('#desciption_error').text('Mô tả không thể bỏ trống.');
            flag = false;
        } else if (desciption.length > 3000) {
            $('#desciption_error').text('Mô tả có độ dài tối đa 3000 ký tự.');
            flag = false;
        } else if (desciption.length < 30) {
            $('#desciption_error').text('Mô tả phải có độ dài tối thiểu 30 ký tự.');
            flag = false;
        } else $('#desciption_error').text('');
        //THÔNG TIN KHÁC
        //front
        if ((!$.isNumeric(front) && front != '') || (front <= 0 && front != '')) {
            $('#front_error').text('Mặt tiền không hợp lệ.');
            flag = false;
        } else if (front.length > 6) {
            $('#front_error').text('Mặt tiền tối đa 999999m');
            flag = false;
        } else $('#front_error').text('');
        //entrance
        if ((!$.isNumeric(entrance) && entrance != '') || (entrance <= 0 && entrance != '')) {
            $('#entrance_error').text('Đường vào không hợp lệ.');
            flag = false;
        } else if (entrance.length > 6) {
            $('#entrance_error').text('Đường vào tối đa 999999m');
            flag = false;
        } else $('#entrance_error').text('');
        //floor
        if ((!floor.match(validate_digits) && floor != '') || (floor <= 0 && floor != '')) {
            $('#floor_error').text('Số tầng không hợp lệ.');
            flag = false;
        } else if (floor.length > 3) {
            $('#floor_error').text('Số tầng tối đa 999 tầng.');
            flag = false;
        } else $('#floor_error').text('');
        //bedroom
        if ((!bedroom.match(validate_digits) && bedroom != '') || (bedroom != '' && bedroom <= 0)) {
            $('#bedroom_error').text('Số phòng ngủ không hợp lệ.');
            flag = false;
        } else if (bedroom.length > 3) {
            $('#bedroom_error').text('Số phòng ngủ tối đa 999 phòng.');
            flag = false;
        } else $('#bedroom_error').text('');
        //toilet
        if ((!toilet.match(validate_digits) && toilet != '') || (toilet != '' && toilet <= 0)) {
            $('#toilet_error').text('Số toilet không hợp lệ.');
            flag = false;
        } else if (toilet.length > 3) {
            $('#toilet_error').text('Số toilet tối đa 999 phòng.');
            flag = false;
        } else $('#toilet_error').text('');
        //furniture
        if (furniture.length > 200) {
            $('#furniture_error').text('Mô tả nội thất có độ dài tối đa 200 ký tự.');
            flag = false;
        } else $('#furniture_error').text('');
        //THÔNG TIN KHÁC
        //LIÊN HỆ
        //contact name
        if (contact_name.length > 200) {
            $('#contact_name_error').text('Tên có độ dài tối đa 200 ký tự.');
            flag = false;
        } else $('#contact_name_error').text('');
        //contact address
        if (contact_addr.length > 200) {
            $('#contact_address_error').text('Địa chỉ liên hệ có độ dài tối đa 200 ký tự.');
            flag = false;
        } else $('#contact_address_error').text('');
        //contact phone
        if (!contact_phone.match(validate_phone) && contact_phone != '') {
            $('#contact_phone_error').text('Số điện thoại không hợp lệ.');
            flag = false;
        } else $('#contact_phone_error').text('');
        //contact mobile
        if (contact_mobile == '') {
            $('#contact_mobile_error').text('Di động không thể bỏ trống.');
            flag = false;
        } else if (!contact_mobile.match(validate_phone)) {
            $('#contact_mobile_error').text('Di động không hợp lệ.');
            flag = false;
        } else $('#contact_mobile_error').text('');
        //mail
        if (!contact_mail.match(validate_mail) && contact_mail != '') {
            $('#contact_mail_error').text('Địa chỉ email không hợp lệ.');
            flag = false;
        } else if (contact_mail.length > 100) {
            $('#contact_mail_error').text('Mail liên hệ có độ dài tối đa 100 ký tự.');
            flag = false;
        } else $('#contact_mail_error').text('');
        //LIÊN HỆ
        if (!flag) {
            $('#notice_error').text('Vui lòng kiểm tra lại thông tin đã nhập.').css({
                "color": "red"
            });
            console.log(flag)
        }
        return flag;
    });

});


function checkPrice() {
    price = $('#post_price').val()
    area = $('#post_area').val()
    unit = $('#post_unit :selected').text()
    if (price > 0) {
        if (area > 0) {
            switch (unit) {
                case 'Triệu':
                    $('#totalPrice').text(price + ' triệu').css({
                        'color': 'red'
                    })
                    break;
                case 'Tỷ':
                    $('#totalPrice').text(price + ' tỷ').css({
                        'color': 'red'
                    })
                    break;
                case 'Trăm nghìn/m2':
                    $('#totalPrice').text((price * area * 100) + ' nghìn').css({
                        'color': 'red'
                    })
                    break;
                case 'Triệu/m2':
                    $('#totalPrice').text((price * area) + ' triệu').css({
                        'color': 'red'
                    })
                    break;
                default:
                    $('#totalPrice').text('Thỏa Thuận.').css({
                        'color': 'red'
                    });
                    break;
            }
        } else {
            switch (unit) {
                case 'Triệu':
                    $('#totalPrice').text(price + ' triệu').css({
                        'color': 'red'
                    })
                    break;
                case 'Tỷ':
                    $('#totalPrice').text(price + ' tỷ').css({
                        'color': 'red'
                    })
                    break;
                case 'Trăm nghìn/m2':
                case 'Triệu/m2':
                    $('#totalPrice').text('Thỏa Thuận').css({
                        'color': 'red'
                    });
                    break;

                default:
                    $('#totalPrice').text('Vui lòng chọn đơn vị.').css({
                        'color': 'red'
                    });
                    break;
            }
        }
    } else {
        $('#totalPrice').text('Thoả Thuận.').css({
            'color': 'red'
        });
    }
};

$(function () {
    var unit, area, price;
    $('#totalPrice').text('Thỏa Thuận').css({
        'color': 'red'
    })
    //price lost focus event
    $('#post_price').focusout(function () {
        checkPrice()
    });
    //area lost focus event
    $('#post_area').focusout(function () {
        checkPrice()
    });
    // unit dropdown on change
    $('#post_unit').change(function () {
        checkPrice()
    });


});