//------CHANGE PASSWORD--------
function checkPwd() {
    var checkValid = true;
    var errorPwd = $('#errorPwd').html('');
    var password  = $('#user_change_password').val();

    if (password == null || password == '') {
        errorPwd.html(I18n.t('js.register.error.password.blank'));
        checkValid = false;
    } else if (password.length < 6) {
        errorPwd.html(I18n.t('js.register.error.password.length'));
        checkValid = false;
    }
    return checkValid;
}
function checkPwdConfirm() {
    var checkValid = true;
    var errorPwdConfirm = $('#errorPwdConfirm').html('');
    var passwordConfirm  = $('#user_change_password_confirmation').val();
    var password  = $('#user_change_password').val();
    if (passwordConfirm == null || passwordConfirm == '') {
        errorPwdConfirm.html(I18n.t('js.register.error.password.confirm_blank'));
        checkValid = false;
    } else if (passwordConfirm !== password) {
        errorPwdConfirm.html(I18n.t('js.register.error.password.confirm_not_match'));
        checkValid = false;
    }

    return checkValid;
}

function confirmOldPwd() {
    $('#noti_pwd').html('');
    var old_password  = $('#old_password').val();
    if (old_password == null || old_password == '') {
        $('#oldPwd').html(I18n.t('js.register.error.password.blank'))
    } else {
        $('#errorPwd').html('');
        $('#errorPwdConfirm').html('');
        $.ajax({
            url: '/confirm_password',
            method: 'get',
            data: {old_password: old_password},
            success: function(data) {
                if (data.checkPwd == true) {
                    $('#oldPwd').html('')
                    $('#formChangePwd').show();
                    $('#div_2_button').hide();                    
                    $('#old_password').prop('readonly', true);
                } else {
                    $('#oldPwd').html(I18n.t('js.register.error.password.old_not_match'))
                }
            }
        })
    }
}

function submitChangePwd() {
    if (checkPwd() && checkPwdConfirm()) {
        $('#new_user').submit();
    }
}