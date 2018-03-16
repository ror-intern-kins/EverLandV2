
//----------------------check valid form login-----------------------
function validateLoginForm() {
    var checkValid = true;
    var errorU = $('#errorUsername').html('');
    var errorP = $('#errorPassword').html('');
    var username  = $('#session_username').val()
    var password = $('#session_password').val();

    if (username == null || username == '') {
        errorU.html('Tên đăng nhập không được để trống.');
        checkValid = false;
    }
    
    if (password == null || password == '') {
        errorP.html('Mật khẩu không được để trống.');
        checkValid = false;
    }
    if (checkValid) {
        checkInvalid(username, password)      
    }
}
function checkInvalid(username, password) {
    $.ajax({
        url: '/check_login',
        method: 'get',
        data: { txtUsername : username, txtPassword : password  },
        success: function(data) {
            if (!data.checkAll) {
                $('#invalid').html('Tên đăng nhập hoặc mật khẩu không đúng.');
            } else {
                $('#login_form').submit();
            }
        }
    })
    
}


//----------------------check valid form signup-----------------------
function validateSignupForm() {
    if (checkUsername() || checkEmail() || checkPassword() || checkPasswordConfirm() || checkPhone() || checkName()) {
        $('#register_form').submit();
    }
}
function checkExistedUser(username) {
    var checkValid = true;
    var errorUsername = $('#errorUser').html('');
    var successUsername = $('#successUser').html('');
    $.ajax({
        url: '/check_user',
        method: 'get',
        data: {current_user_id: username},
        success: function(data) {
            if (data.check === true) {
                errorUsername.html('Tên tài khoản đã tồn tại.');
                checkValid = false;
            }       
            else {
                successUsername.html('Tên đăng nhập có thể sử dụng.');
            }    
        }
    })

    return checkValid;
}
function checkUsername() {
    var checkValid = true;
    var errorUsername = $('#errorUser').html('');
    var successUsername = $('#successUser').html('');
    var username  = $('#user_username').val();

    if (username == null || username == '') {
        errorUsername.html('Tên đăng nhập không được để trống.');
        checkValid = false;
    } else if (!(/^[a-zA-Z0-9]+$/).test(username)) {
        errorUsername.html('Tên tài khoản không cho phép chứa ký tự đặc biệt.')
        checkValid = false;
    } else if (username.length < 6 || username.length > 20) {
        errorUsername.html('Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự.');
        checkValid = false;
    } else {
        checkValid = checkExistedUser(username);
    }
    return checkValid;
}
function checkEmail() {
    var checkValid = true;
    var errorEmail = $('#errorEmail').html('');
    var successEmail = $('#successEmail').html('');
    var email  = $('#user_email').val();
    if (email == null || email == '') {
        errorEmail.html('Địa chỉ email không được để trống.');
        checkValid = false;
    } else if (!(/^[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|vn|info))$/).test(email)) {
        errorEmail.html('Địa chỉ email không hợp lệ.');
        checkValid = false;
    }
    if (checkValid) {
        successEmail.html('Email có thể sử dụng.');
    }
    return checkValid;
}
function checkPassword() {
    var checkValid = true;
    var errorPassword = $('#errorPass').html('');
    var password  = $('#user_password').val();

    if (password == null || password == '') {
        errorPassword.html('Mật khẩu không được để trống.');
        checkValid = false;
    } else if (password.length < 6) {
        errorPassword.html('Mật khẩu phải có độ dài từ 6 kí tự.');
        checkValid = false;
    }
    return checkValid;
}
function checkPasswordConfirm() {
    var checkValid = true;
    var errorPasswordConfirm = $('#errorPasswordConfirm').html('');
    var passwordConfirm  = $('#user_password_confirmation').val();
    var password  = $('#user_password').val();
    if (passwordConfirm == null || passwordConfirm == '') {
        errorPasswordConfirm.html('Xác thực mật khẩu không được để trống.');
        checkValid = false;
    } else if (passwordConfirm !== password) {
        errorPasswordConfirm.html('Xác thực mật khẩu không đúng.');
        checkValid = false;
    }
    return checkValid;
}
function checkPhone() {
    var checkValid = true;
    var errorPhone = $('#errorPhone').html('');
    var phone  = $('#user_phone').val();
    if (phone == null || phone == '') {
        errorPhone.html('Số điện thoại di động không được để trống.');
        checkValid = false;
    } else if (!(/^[0]\d{9,10}$/).test(phone)) {
        errorPhone.html('Số điện thoại không đúng. Độ dài từ 10 đến 11 số.');
        checkValid = false;
    }
    return checkValid;
}
function checkName() {
    var checkValid = true;
    var errorName = $('#errorName').html('');
    var name  = $('#user_name').val();
       
    if (name == null || name == '') {
        errorName.html('Tên không được để trống.');
        checkValid = false;
    }
    return checkValid;
}

//----------------------reset form------------------------
function resetLoginForm() {
    $('#errorUsername').html('');
    $('#errorPassword').html('');
    $('#session_username').val('');
    $('#session_password').val('');
}
//reset mọi thứ trên form đăng ký
function resetSignupForm() {
    $('#errorUser').html('');
    $('#errorPass').html('');
    $('#errorEmail').html('');
    $('#errorPasswordConfirm').html('');
    $('#errorPhone').html('');
    $('#errorName').html('');

    $('#successUser').html('');
    $('#successEmail').html('');

    $('#user_username').val('');
    $('#user_password').val('');
    $('#user_password_confirmation').val('');
    $('#user_email').val('');
    $('#user_phone').val('');
    $('#user_name').val('');
    $('#user_address').val('');

        
}
//-------------validate Edit User----------------------
function checkEditPhone() {
    var checkValid = true;
    var errorPhone = $('#errorPhone').html('');
    var phone  = $('#user_edit_phone').val();
    if (phone == null || phone == '') {
        errorPhone.html('Số điện thoại di động không được để trống.');
        checkValid = false;
    } else if (!(/^[0]\d{9,10}$/).test(phone)) {
        errorPhone.html('Số điện thoại không đúng. Độ dài từ 10 đến 11 số.');
        checkValid = false;
    }
    return checkValid;
}
function checkEditName() {
    var checkValid = true;
    var errorName = $('#errorName').html('');
    var name  = $('#user_edit_name').val();
       
    if (name == null || name == '') {
        errorName.html('Tên không được để trống.');
        checkValid = false;
    }
    return checkValid;
}
function validateEditForm() {
    if (checkEditName() || checkEditPhone()) {
        $('#update_form').submit();
    }
}
//kích hoạt nhấn enter cho button
$(document).bind('keypress', function(e) {
    if(e.keyCode == 13) {
        $('#login_btn').trigger('click');
        $('#signup_btn').trigger('click');
    }
})   