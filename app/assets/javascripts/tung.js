//------CHANGE PASSWORD--------
function checkPwd() {
    var checkValid = true;
    var errorPwd = $('#errorPwd').html('');
    var password  = $('#user_change_password').val();

    if (password == null || password == '') {
        errorPwd.html('Mật khẩu không được để trống.');
        checkValid = false;
    } else if (password.length < 6) {
        errorPwd.html('Mật khẩu phải có độ dài từ 6 kí tự.');
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
        errorPwdConfirm.html('Xác thực mật khẩu không được để trống.');
        checkValid = false;
    } else if (passwordConfirm !== password) {
        errorPwdConfirm.html('Xác thực mật khẩu không đúng.');
        checkValid = false;
    }

    return checkValid;
}

function confirmOldPwd() {

    var old_password  = $('#old_password').val();
    if (old_password == null || old_password == '') {
        $('#oldPwd').html('Mật khẩu không được để trống!')
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
                    $('#oldPwd').html('Mật khẩu cũ không đúng!')
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