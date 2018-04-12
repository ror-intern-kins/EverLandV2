document.addEventListener("turbolinks:load", function (event) {
    //-------Validate form-------
    $('#from-create-post').submit(function () {
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
        var flag = true;

        //THÔNG TIN CƠ BẢN
        //title

        if (title == "") {
            $('#title_error').text(I18n.t('js.post.error.title.blank'));
            flag = false;
        } else if (title.length < 30) {
            $('#title_error').text(I18n.t('js.post.error.title.too_short'));
            flag = false;
        } else if (title.length > 99) {
            $('#title_error').text(I18n.t('js.post.error.title.too_long'));
            flag = false;
        } else $('#title_error').text('');
        //category
        if (category == "-- Hình Thức --") {
            $('#category_error').text(I18n.t('js.post.error.category.blank'));
            flag = false;
        } else $('#category_error').text('');

        //sub category
        if (sub_category == "--Phân Mục--") {
            $('#subcategory_error').text(I18n.t('js.post.error.sub_category.blank'));
            flag = false;
        } else $('#subcategory_error').text('');
        //city
        if (city == '-- Tỉnh/Thành Phố --') {
            $('#city_error').text(I18n.t('js.post.error.city.blank'));
            flag = false;
        } else $('#city_error').text('');
        //district
        if (district == '--Quận Huyện--') {
            $('#district_error').text(I18n.t('js.post.error.district.blank'));
            flag = false;
        } else $('#district_error').text('');
        //project
        if (project.length > 200) {
            $('#project_error').text(I18n.t('js.post.error.project.too_long'));
            flag = false;
        } else if (!project.match(validate_characters) && project != '') {
            //console.log(project.match(validate_characters))
            $('#project_error').text(I18n.t('js.post.error.project.invalid'));
            flag = false;
        } else $('#project_error').text('');
        //area
        if (area.length > 6) {
            $('#area_error').text(I18n.t('js.post.error.area.max_value'));
            flag = false;
        } else if ((!$.isNumeric(area) && area != '') || (area <= 0 && area != '')) {
            $('#area_error').text(I18n.t('js.post.error.area.not_a_number'));
            flag = false;
        } else $('#area_error').text('');
        //price
        if (price.length > 6) {
            $('#price_error').text(I18n.t('js.post.error.price.max_value'));
            flag = false;
        } else if ((!$.isNumeric(price) && price != '') || (price <= 0 && price != '')) {
            $('#price_error').text(I18n.t('js.post.error.price.not_a_number'));
            flag = false;
        } else $('#price_error').text('');
        //address
        if (address == '') {
            $('#address_error').text(I18n.t('js.post.error.address.blank'));
            flag = false;
        } else if (address.length > 200) {
            $('#address_error').text(I18n.t('js.post.error.address.too_long'));
            flag = false;
        } else $('#address_error').text('');
        //THÔNG TIN CƠ BẢN

        //THÔNG TIN MÔ TẢ - desciption
        if (desciption == '') {
            $('#desciption_error').text(I18n.t('js.post.error.description.blank'));
            flag = false;
        } else if (desciption.length > 3000) {
            $('#desciption_error').text(I18n.t('js.post.error.description.too_long'));
            flag = false;
        } else if (desciption.length < 30) {
            $('#desciption_error').text(I18n.t('js.post.error.description.too_short'));
            flag = false;
        } else $('#desciption_error').text('');
        //THÔNG TIN KHÁC
        //front
        if ((!$.isNumeric(front) && front != '') || (front <= 0 && front != '')) {
            $('#front_error').text(I18n.t('js.post.error.front.not_a_number'));
            flag = false;
        } else if (front.length > 6) {
            $('#front_error').text(I18n.t('js.post.error.front.max_value'));
            flag = false;
        } else $('#front_error').text('');
        //entrance
        if ((!$.isNumeric(entrance) && entrance != '') || (entrance <= 0 && entrance != '')) {
            $('#entrance_error').text(I18n.t('js.post.error.front.not_a_number'));
            flag = false;
        } else if (entrance.length > 6) {
            $('#entrance_error').text(I18n.t('js.post.error.entrance.max_value'));
            flag = false;
        } else $('#entrance_error').text('');
        //floor
        if ((!floor.match(validate_digits) && floor != '') || (floor <= 0 && floor != '')) {
            $('#floor_error').text(I18n.t('js.post.error.entrance.not_a_number'));
            flag = false;
        } else if (floor.length > 3) {
            $('#floor_error').text(I18n.t('js.post.error.floow.max_value'));
            flag = false;
        } else $('#floor_error').text('');
        //bedroom
        if ((!bedroom.match(validate_digits) && bedroom != '') || (bedroom != '' && bedroom <= 0)) {
            $('#bedroom_error').text(I18n.t('js.post.error.bedroom.not_a_number'));
            flag = false;
        } else if (bedroom.length > 3) {
            $('#bedroom_error').text(I18n.t('js.post.error.bedroom.max_value'));
            flag = false;
        } else $('#bedroom_error').text('');
        //toilet
        if ((!toilet.match(validate_digits) && toilet != '') || (toilet != '' && toilet <= 0)) {
            $('#toilet_error').text(I18n.t('js.post.error.toilet.not_a_number'));
            flag = false;
        } else if (toilet.length > 3) {
            $('#toilet_error').text(I18n.t('js.post.error.toilet.max_value'));
            flag = false;
        } else $('#toilet_error').text('');
        //furniture
        if (furniture.length > 200) {
            $('#furniture_error').text(I18n.t('js.post.error.furniture_description.too_long'));
            flag = false;
        } else $('#furniture_error').text('');
        //THÔNG TIN KHÁC
        //LIÊN HỆ
        //contact name
        if (contact_name.length > 200) {
            $('#contact_name_error').text(I18n.t('js.post.error.contact_name.too_long'));
            flag = false;
        } else $('#contact_name_error').text('');
        //contact address
        if (contact_addr.length > 200) {
            $('#contact_address_error').text(I18n.t('js.post.error.contact_address.too_long'));
            flag = false;
        } else $('#contact_address_error').text('');
        //contact phone
        if (!contact_phone.match(validate_phone) && contact_phone != '') {
            $('#contact_phone_error').text(I18n.t('js.post.error.contact_phone.invalid'));
            flag = false;
        } else $('#contact_phone_error').text('');
        //contact mobile
        if (contact_mobile == '') {
            $('#contact_mobile_error').text(I18n.t('js.post.error.contact_mobile.blank'));
            flag = false;
        } else if (!contact_mobile.match(validate_phone)) {
            $('#contact_mobile_error').text(I18n.t('js.post.error.contact_mobile.invalid'));
            flag = false;
        } else $('#contact_mobile_error').text('');
        //mail
        if (!contact_mail.match(validate_mail) && contact_mail != '') {
            $('#contact_mail_error').text(I18n.t('js.post.error.contact_mail.invalid'));
            flag = false;
        } else if (contact_mail.length > 100) {
            $('#contact_mail_error').text(I18n.t('js.post.error.contact_mail.too_long'));
            flag = false;
        } else $('#contact_mail_error').text('');
        //LIÊN HỆ
        if (!flag) {
            $('#notice_error').text(I18n.t('js.post.error.error_total')).css({
                "color": "red"
            });
        }
        return flag;
    });

    //-------Calculate Price-------
    $(function calPrice() {
        $('#totalPrice').text(I18n.t('agreement')).css({
            'color': 'red'
        });
        checkPrice();
        //price lost focus event
        $('#post_price').focusout(function () {
            checkPrice();
        });
        //area lost focus event
        $('#post_area').focusout(function () {
            checkPrice();
        });
        // unit dropdown on change
        $('#post_unit').change(function () {
            checkPrice();
        });
    });
    //-------Event onchange of dropdown-------
    $(function loadDataDropDown() {
        $('#cate_id').change(function () {
            getCategoriesList()
        });
        $('#city_details').change(function () {
            getCitiesList()
        })
        $('#district_details').change(function () {
            getDistrictsList()
        })
        $('#ward_details').change(function () {
            getWardsList()
        });
        $('#street_details').change(function () {
            getStreetsList()
        })
    });
    
});

//--------support calPrice function--------
function checkPrice() {
    var unit, area, price;
    price = $('#post_price').val();
    area = $('#post_area').val();
    unit = $('#post_unit :selected').text();
    if (price > 0) {
        if (area > 0) {
            switch (unit) {
                case 'Triệu':
                    $('#totalPrice').text(price + ' ' + I18n.t('million')).css({
                        'color': 'red'
                    });
                    break;
                case 'Tỷ':
                    $('#totalPrice').text(price + ' ' + I18n.t('billion')).css({
                        'color': 'red'
                    });
                    break;
                case 'Trăm nghìn/m2':
                    $('#totalPrice').text((price * area * 100) + ' ' + I18n.t('hunderm2')).css({
                        'color': 'red'
                    });
                    break;
                case 'Triệu/m2':
                    $('#totalPrice').text((price * area) + ' ' + I18n.t('millionm2')).css({
                        'color': 'red'
                    });
                    break;
                default:
                    $('#totalPrice').text(I18n.t('agreement')).css({
                        'color': 'red'
                    });
                    break;
            }
        } else {
            switch (unit) {
                case 'Triệu':
                    $('#totalPrice').text(price + ' ' + I18n.t('million')).css({
                        'color': 'red'
                    })
                    break;
                case 'Tỷ':
                    $('#totalPrice').text(price + ' ' + I18n.t('billion')).css({
                        'color': 'red'
                    })
                    break;
                case 'Trăm nghìn/m2':
                case 'Triệu/m2':
                    $('#totalPrice').text(I18n.t('agreement')).css({
                        'color': 'red'
                    });
                    break;

                default:
                    $('#totalPrice').text(I18n.t('js.post.error.unit.blank')).css({
                        'color': 'red'
                    });
                    break;
            }
        }
    } else {
        $('#totalPrice').text(I18n.t('agreement')).css({
            'color': 'red'
        });
    }
};

//----------------Get category list ----------------
function getCategoriesList() {
    var value = $('#cate_id').val();
    $('#cate_detail_id').html("<option>--Phân Mục--</option>"); //clear option     
    $.post("/getcate.json", {
            category_id: value
        },
        function (data, status) {
            data.forEach(function(item) {
                $('#cate_detail_id').append("<option value=" + item.id + ">" + item.name + "</option>")
            });
    })
}

//----------------Get city list ----------------
var str_addr = [3];

function getCitiesList() {
    var value = $('#city_details').val();
    $('#district_details').html("<option>--Quận Huyện--</option>"); //clear option 

    if (value > 0) {
        str_addr[3] = $('#city_details :selected').text(); //get city when onchange
        $('#post_address_number').val(str_addr[3]); //set to address
        $('#post_address_number').trigger('input');
        $.post("/getdata.json", {
            city_id: value
        }, function (data, status) {
            var district = data[1];
            district.forEach(function(item) {
                $('#district_details').append("<option value=" + item.id + ">" + item.name +
                    "</option>")
            });
        });
    } else {
        $('select#district_details').prop('selectedIndex', 0);
        $('#district_details').html("<option>--Quận Huyện--</option>");

        $('select#ward_details').prop('selectedIndex', 0);
        $('#ward_details').html("<option>-- Phường/Xã  --</option>");

        $('select#street_details').prop('selectedIndex', 0);
        $('#street_details').html("<option>-- Đường Phố --</option>");

        $('#post_address_number').val('') //reset if value dropdown = 0
    }
}

//----------------Get districts list ----------------
function getDistrictsList() {
    var value = $('#district_details').val();
    $('#ward_details').html("<option>-- Phường/Xã  --</option>"); //clear option 

    if (value > 0) {
        str_addr[3] = $('#city_details :selected').text() //get value if onchange any dropdown
        str_addr[2] = $('#district_details :selected').text() 
        $('#post_address_number').val(str_addr[2] + ', ' + str_addr[3]);
        $('#post_address_number').trigger('input');
        $.post("/getdata.json", {
            district_id: value
        }, function (data, status) {
            data.forEach(function(item) {
                $('#ward_details').append("<option value=" + item.id + ">" + item.name + "</option>")
            });
        })
    } else {
        $('select#ward_details').prop('selectedIndex', 0);
        $('#ward_details').html("<option>-- Phường/Xã  --</option>");

        $('select#street_details').prop('selectedIndex', 0);
        $('#street_details').html("<option>-- Đường Phố --</option>");

        $('#post_address_number').val('') //reset if value dropdown = 0
    }
};

//----------------Get wards list ----------------
function getWardsList() {
    var value = $('#ward_details').val();
    $('#street_details').html("<option>-- Đường Phố --</option>"); //clear option 
    if (value > 0) {
        str_addr[3] = $('#city_details :selected').text() 
        str_addr[2] = $('#district_details :selected').text() 
        str_addr[1] = $('#ward_details :selected').text() //get ward onchange
        $('#post_address_number').val(str_addr[1] + ', ' + str_addr[2] + ', ' + str_addr[3])
        $('#post_address_number').trigger('input');
        $.post("/getdata.json", {
                ward_id: value
            },
            function (data, status) {
                data.forEach(function(item) {
                    $('#street_details').append("<option value=" + item.id + ">" + item.name + "</option>")
                });
            })
    } else {
        $('select#street_details').prop('selectedIndex', 0);
        $('#street_details').html("<option>-- Đường Phố --</option>");

        $('#post_address_number').val('') //reset if value dropdown = 0
    }
}
//----------------Get streets list ----------------

function getStreetsList() {
    var value = $('#street_details').val();
    if (value > 0) {
        str_addr[3] = $('#city_details :selected').text() 
        str_addr[2] = $('#district_details :selected').text() 
        str_addr[1] = $('#ward_details :selected').text()
        str_addr[0] = $('#street_details :selected').text()
        $('#post_address_number').val(str_addr[0] + ', ' + str_addr[1] + ', ' + str_addr[2] + ', ' + str_addr[3])
        $('#post_address_number').trigger('input');
    } else {
        $('#post_address_number').val('') //reset if value dropdown = 0
    }
}

//----------------Image show ----------------

var new_image_feild = '<div class="file_field"><button class="btn btn-info btn-image"><i class="fa fa-plus-circle fa-3x"></i><br>Add Image</button><input name="images[url][]" class="image-input" onchange="preview_image(event)" type="file" id="post_images_attributes_0_url"><div class="image-output"><div class="btn btn-danger image-remove" onclick="remove_image(event)"><i class="fa fa-trash"></i></div></div></div>'
var delete_image_feild = '<input type="hidden" value="7" name="image_delete[][id]"">'
var is_max_image_num = false;

function append_new_image_input() {
    if ($("#file_field_container").children(".file_field").length < 8) {
        $("#file_field_container").append(new_image_feild);
    } else {
        is_max_image_num = true;
    }
}

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = $(event.target).next();
        output.css("backgroundImage", 'url(' + reader.result + ')');
        output.css("display", "block");
        append_new_image_input();
    }
    reader.readAsDataURL(event.target.files[0]);
}


function remove_image(event) {
    var file_field = $(event.target).parents(".file_field");
    // console.log(file_field);
    file_field.remove();
    if (is_max_image_num) {
        append_new_image_input();
        is_max_image_num = false;
    }
}
function remove_image(event,id) {
    var file_field = $(event.target).parents(".file_field");
    $("#file_field_container").append('<input type="hidden" value=' + id + ' name="images_delete[][id]"">');
    file_field.remove();
    if (is_max_image_num) {
        append_new_image_input();
        is_max_image_num = false;
    }
}
