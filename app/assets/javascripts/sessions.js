
//----------------------check valid form login-----------------------
function validateLoginForm() {
    var checkValid = true;
    var errorU = $('#errorUsername').html('');
    var errorP = $('#errorPassword').html('');
    var username  = $('#username').val()
    var password = $('#password').val();

    if (username == null || username == '') {
        errorU.html(I18n.t('js.login.error.blank.username'));
        checkValid = false;
    }
    
    if (password == null || password == '') {
        errorP.html(I18n.t('js.login.error.blank.password'));
        checkValid = false;
    }
    if (checkValid) {
        $('#form_login').submit();
    }
}

//----------------------check valid form signup-----------------------
function validateSignupForm() {

    if (checkUsername() && checkEmail() && checkPassword() && checkPasswordConfirm() && checkName()) {
        $('#form_register').submit();
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
                errorUsername.html(I18n.t("js.register.error.username.existed"));
                checkValid = false;
            }       
            else {
                successUsername.html(I18n.t("js.register.success.username"));
            }    
        }
    })

    return checkValid;
}
function checkUsername() {
    var checkValid = true;
    var errorUsername = $('#errorUser').html('');
    var successUsername = $('#successUser').html('');
    var username  = $('#signup_username').val();

    if (username == null || username == '') {
        errorUsername.html(I18n.t("js.register.error.username.blank"));
        checkValid = false;
    } else if (!(/^[a-zA-Z0-9]+$/).test(username)) {
        errorUsername.html(I18n.t("js.register.error.username.invalid"))
        checkValid = false;
    } else if (username.length < 6 || username.length > 20) {
        errorUsername.html(I18n.t("js.register.error.username.length"));
        checkValid = false;
    } 
    else {
        checkValid = checkExistedUser(username);
    }
    return checkValid;
}
function checkEmail() {
    var checkValid = true;
    var errorEmail = $('#errorEmail').html('');
    var successEmail = $('#successEmail').html('');
    var email  = $('#signup_email').val();
    if (email == null || email == '') {
        errorEmail.html(I18n.t('js.register.error.email.blank'));
        checkValid = false;
    } else if (!(/^[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|vn|info))$/).test(email)) {
        errorEmail.html(I18n.t('js.register.error.email.invalid'));
        checkValid = false;
    }
    if (checkValid) {
        $.ajax({
            url: '/check_email',
            method: 'get',
            data: {txt_email: email},
            success: function(data) {
                if (data.checkEmail) {
                    errorEmail.html(I18n.t('js.register.error.email.existed'));
                    checkValid = false;
                } else {
                    errorEmail.html('');
                    successEmail.html(I18n.t('js.register.success.email'));
                }
            }        
        })
        
    }
    return checkValid;
}
function checkPassword() {
    var checkValid = true;
    var errorPassword = $('#errorPass').html('');
    var password  = $('#signup_password').val();

    if (password == null || password == '') {
        errorPassword.html(I18n.t('js.register.error.password.blank'));
        checkValid = false;
    } else if (password.length < 6) {
        errorPassword.html(I18n.t('js.register.error.password.length'));
        checkValid = false;
    }
    return checkValid;
}
function checkPasswordConfirm() {
    var checkValid = true;
    var errorPasswordConfirm = $('#errorPasswordConfirm').html('');
    var passwordConfirm  = $('#signup_password_confirmation').val();
    var password  = $('#signup_password').val();
    if (passwordConfirm == null || passwordConfirm == '') {
        errorPasswordConfirm.html(I18n.t('js.register.error.password.confirm_blank'));
        checkValid = false;
    } else if (passwordConfirm !== password) {
        errorPasswordConfirm.html(I18n.t('js.register.error.password.confirm_not_match'));
        checkValid = false;
    }
    return checkValid;
}
function checkPhone() {
    var checkValid = true;
    var errorPhone = $('#errorPhone').html('');
    var phone  = $('#signup_phone').val();
    if (phone != '' && !(/^[0]\d{9,10}$/).test(phone)) {
        errorPhone.html(I18n.t('js.register.error.phone.invalid'));
        checkValid = false;
    }
    return checkValid;
}
function checkName() {
    var checkValid = true;
    var errorName = $('#errorName').html('');
    var name  = $('#signup_name').val();
       
    if (name == null || name == '') {
        errorName.html(I18n.t('js.register.error.name.blank'));
        checkValid = false;
    }
    return checkValid;
}

//----------------------reset form------------------------
function resetLoginForm() {
    $('#errorUsername').html('');
    $('#errorPassword').html('');
    $('#invalid').html('');
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
    if (phone != '' && !(/^[0]\d{9,10}$/).test(phone)) {
        errorPhone.html(I18n.t('js.register.error.phone.invalid'));
        checkValid = false;
    }
    return checkValid;
}
function checkEditName() {
    var checkValid = true;
    var errorName = $('#errorName').html('');
    var name  = $('#user_edit_name').val();
       
    if (name == null || name == '') {
        errorName.html(I18n.t('js.register.error.name.blank'));
        checkValid = false;
    }
    return checkValid;
}
function validateEditForm() {
    if (checkEditName() && checkEditPhone()) {
        $('#update_form').submit();
    }
}
//kích hoạt nhấn enter cho button
$(document).bind('keypress', function(e) {
    if(e.keyCode == 13) {
        $('#login_btn').trigger('click');
        $('#signup_btn').trigger('click');
        // $('#btnConfirm').trigger('click');
        $('#btnChangePwd').trigger('click');
    }
})   