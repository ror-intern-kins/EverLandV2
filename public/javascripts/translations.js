I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}},"models":{"post":{"attributes":{"address_number":{"blank":"Address can't be blank.","too_long":"Address maximum is 200 characters."},"area":{"not_a_number":"Area is invalid."},"bedroom":{"not_a_number":"Bedroom is invalid."},"category_id":{"blank":"Category can't be blank.","exit_category":"Category didn't exist."},"city_id":{"blank":"City can't be blank.","exit_city":"City didn't exist."},"contact_address":{"too_long":"Address of contact maximum is 200 characters."},"contact_mail":{"invalid":"Mail of contact is invalid.","too_long":"Mail of contact maximum is 100 characters."},"contact_mobile":{"blank":"Mobile can't be blank.","invalid":"Mobile is invalid.","too_long":"Mobile maximum is 11 characters.","too_short":"Mobile minimum is 10 characters."},"contact_name":{"invalid":"Name of contact is invalid.","too_long":"Name of contact maximum is 200 characters."},"contact_phone":{"invalid":"Phone is invalid.","too_long":"Phone maximum is 11 characters.","too_short":"Phone minimum is 10 characters."},"description":{"blank":"Description can't be blank.","too_long":"Description maximum is 3000 characters.","too_short":"Description minimum is 30 characters."},"district_id":{"blank":"District can't be blank.","exit_district":"District didn't exist."},"entrance":{"not_a_number":"Entrance is invalid."},"floor":{"not_a_number":"Floor is invalid."},"front":{"not_a_number":"Front is invalid."},"furniture":{"too_long":"Description of furniture maximum is 200 characters."},"price":{"not_a_number":"Price is invalid."},"project":{"invalid":"Name of project is invalid.","too_long":"Project maximum is 200 characters."},"title":{"blank":"Title can't be blank.","too_long":"Title maximum is 30 characters.","too_short":"Title minimum is 30 characters."},"toilet":{"not_a_number":"Toilet is invalid."}}},"user":{"attributes":{"email":{"blank":"can't be blank."},"password":{"blank":"can't be blank.","too_short":"is too short. Mininum must have 6 characters."},"password_confirmation":{"confirmation":"is invalid."},"reset_password_token":{"invalid":"is invalid. Check your mail again."},"unlock_token":{"invalid":"is invalid. Please come back Home page."}}}}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","content_type_blacklist_error":"You are not allowed to upload %{content_type} files","content_type_whitelist_error":"You are not allowed to upload %{content_type} files","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","extension_blacklist_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_whitelist_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","max_size_error":"File size should be less than %{max_size}","min_size_error":"File size should be greater than %{min_size}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image?","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"hello":"Hello world","helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create Post","submit":"Save %{model}","update":"Update Post"}},"js":{"login":{"error":{"blank":{"password":"Mật khẩu không được để trống.","username":"Tên đăng nhập không được để trống."}}},"post":{"agree":"Thỏa Thuận","billion":"tỷ","error":{"address":{"blank":"Địa chỉ không thể bỏ trống.","too_long":"Địa chỉ có độ dài tối đa 200 ký tự."},"area":{"max_value":"Diện tích tối đa 999999.","not_a_number":"Diện tích không hợp lệ."},"bedroom":{"max_value":"Số phòng ngủ tối đa 999 phòng.","not_a_number":"Số phòng ngủ không hợp lệ."},"category":{"blank":"Vui lòng chọn hình thức.","exit_category":"Hình thức không tồn tại."},"city":{"blank":"Vui lòng chọn tỉnh/thành phố.","exit_city":"Thành phố không có thật."},"contact_address":{"too_long":"Địa chỉ liên hệ có độ dài tối đa 200 ký tự."},"contact_mail":{"invalid":"Địa chỉ email không hợp lệ.","too_long":"Mail liên hệ có độ dài tối đa 100 ký tự."},"contact_mobile":{"blank":"Di động không thể bỏ trống.","invalid":"Số di động không đúng.","too_long":"Di động phải có độ dài tối đa 11 ký tự.","too_short":"Di động phải có độ dài tối thiểu 10 ký tự."},"contact_name":{"invalid":"Tên không hợp lệ.","too_long":"Tên có độ dài tối đa 200 ký tự."},"contact_phone":{"invalid":"Số điện thoại không đúng.","too_long":" Điện thoại phải có độ dài tối đa 11 ký tự.","too_short":"Điện thoại phải có độ dài tối thiểu 10 ký tự."},"description":{"blank":"Mô tả không thể bỏ trống.","too_long":"Mô tả phải có độ dài tối đa 3000 ký tự.","too_short":"Mô tả phải có độ dài tối thiểu 30 ký tự."},"district":{"blank":"Vui lòng chọn quận huyện.","exit_district":"Quận không có thật"},"entrance":{"max_value":"Đường vào tối đa 999999m.","not_a_number":"Đường vào không hợp lệ."},"error_total":"Vui lòng kiểm tra lại thông tin đã nhập.","floor":{"max_value":"Số tầng tối đa 999 tầng.","not_a_number":"Số tầng không hợp lệ."},"front":{"max_value":"Mặt tiền tối đa 999999m.","not_a_number":"Mặt tiền không hợp lệ."},"furniture_description":{"too_long":"Mô tả nội thất có độ dài tối đa 200 ký tự."},"price":{"max_value":"Giá tối đa 999999.","not_a_number":"Giá không hợp lệ."},"project":{"invalid":"Tên dự án không hợp lệ.","too_long":"Dự án có độ dài tối đa 200 ký tự."},"sub_category":{"blank":"Vui lòng chọn loại."},"title":{"blank":"Tiêu đề không thể bỏ trống.","too_long":"Tiêu đề có tối đa 99 ký tự.","too_short":"Tiêu đề có tối thiểu 30 ký tự."},"toilet":{"max_value":"Số toilet tối đa 999 phòng.","not_a_number":"Số toilet không hợp lệ."},"unit":{"blank":"Vui lòng chọn đơn vị."}},"million":"triệu","thousand":"nghìn"},"register":{"error":{"email":{"blank":"Địa chỉ email không được để trống.","existed":"Địa chỉ email đã tồn tại.","invalid":"Địa chỉ email không hợp lệ."},"name":{"blank":"Tên không được để trống."},"password":{"blank":"Mật khẩu không được để trống.","confirm_blank":"Xác thực mật khẩu không được để trống.","confirm_not_match":"Xác thực mật khẩu không đúng.","length":"Mật khẩu phải có độ dài từ 6 kí tự."},"phone":{"invalid":"Số điện thoại không đúng. Độ dài từ 10 đến 11 số."},"username":{"blank":"Tên đăng nhập không được để trống.","existed":"11Tên tài khoản đã tồn tại.","invalid":"Tên tài khoản không cho phép chứa ký tự đặc biệt.","length":"Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự."}},"success":{"email":"Email có thể sử dụng.","username":"Tên đăng nhập có thể sử dụng."}}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"views":{"pagination":{"first":"\u0026laquo;","last":"\u0026raquo;","next":"\u0026rsaquo;","previous":"\u0026lsaquo;","truncate":"\u0026hellip;"}}});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"activerecord":{"errors":{"models":{"post":{"attributes":{"address_number":{"blank":"Địa chỉ không thể bỏ trống.","too_long":"Địa chỉ có độ dài tối đa 200 ký tự."},"area":{"not_a_number":"Diện tích không hợp lệ."},"bedroom":{"not_a_number":"Số phòng ngủ không hợp lệ."},"category_id":{"blank":"Hình thức không thể bỏ trống.","exit_category":"Hình thức không tồn tại."},"city_id":{"blank":"Thành phố không thể bỏ trống.","exit_city":"Thành phố không có thật."},"contact_address":{"too_long":"Địa chỉ liên hệ có độ dài tối đa 200 ký tự."},"contact_mail":{"invalid":"Địa chỉ email không hợp lệ.","too_long":"Mail liên hệ có độ dài tối đa 100 ký tự."},"contact_mobile":{"blank":"Di động không thể bỏ trống.","invalid":"Số di động không đúng.","too_long":"Di động phải có độ dài tối đa 11 ký tự.","too_short":"Di động phải có độ dài tối thiểu 10 ký tự."},"contact_name":{"invalid":"Tên không hợp lệ.","too_long":"Tên có độ dài tối đa 200 ký tự."},"contact_phone":{"invalid":"Số điện thoại không đúng.","too_long":" Điện thoại phải có độ dài tối đa 11 ký tự.","too_short":"Điện thoại phải có độ dài tối thiểu 10 ký tự."},"description":{"blank":"Mô tả không thể bỏ trống.","too_long":"Mô tả phải có độ dài tối đa 3000 ký tự.","too_short":"Mô tả phải có độ dài tối thiểu 30 ký tự."},"district_id":{"blank":"Quận không thể bỏ trống.","exit_district":"Quận không có thật"},"entrance":{"not_a_number":"Đường vào không hợp lệ."},"floor":{"not_a_number":"Số tầng không hợp lệ."},"front":{"not_a_number":"Mặt tiền không hợp lệ."},"furniture":{"too_long":"Mô tả nội thất có độ dài tối đa 200 ký tự."},"price":{"not_a_number":"Giá không hợp lệ."},"project":{"invalid":"Tên dự án không hợp lệ.","too_long":"Dự án có độ dài tối đa 200 ký tự."},"title":{"blank":"Tiêu đề không thể bỏ trống.","too_long":"Tiêu đề tối đa 99 ký tự.","too_short":"Tiêu đề phải có độ dài tối thiểu 30 ký tự."},"toilet":{"not_a_number":"Số toilet không hợp lệ."}}},"user":{"attributes":{"email":{"blank":"Email không được để trống."},"password":{"blank":"Mật khẩu không được để trống.","too_short":"Mậu khẩu quá ngắn. Tối thiểu phải từ 6 ký tự trở lên."},"password_confirmation":{"confirmation":"Mật khẩu không đúng."},"reset_password_token":{"invalid":"Mã không hợp lệ. Vui lòng kiểm tra lại email."},"unlock_token":{"invalid":"Mã không hợp lệ. Vui lòng trở về trang chủ."}}}}}},"devise":{"confirmations":{"confirmed":"Xác nhận tài khoản thành công.","send_instructions":"Bạn sẽ nhận được mail trong vài phút tới. Vui lòng kiểm tra mail để xác nhận tài khoản.","send_paranoid_instructions":"Nếu email của bạn có trong hệ thống, bạn sẽ nhận được email hướng dẫn xác nhận tài khoản trong một vài phút nữa."},"failure":{"already_authenticated":"Đăng nhập thành công.","inactive":"Tài khoản của bạn chưa được xác nhận.","invalid":"Tên tài khoản hoặc mật khẩu không đúng.","last_attempt":"Tài khoản của bạn còn 1 lần thử nữa trước khi bị khóa.","locked":"Tài khoản của bạn đã bị khóa.","not_found_in_database":"%{authentication_keys} hoặc password không đúng.","timeout":"Hết phiên đăng nhập. Bạn cần đăng nhập lại.","unauthenticated":"Bạn cần đăng nhập hoặc đăng kí để tiếp tục.","unconfirmed":"Bạn phải xác nhận tài khoản trước khi tiếp tục."},"mailer":{"confirmation_instructions":{"subject":"Xác nhận tài khoản Everland"},"email_changed":{"subject":"Thay đổi email Everland"},"password_change":{"subject":"Thay đổi mật khẩu Everland"},"reset_password_instructions":{"subject":"Đặt lại mật khẩu Everland"},"unlock_instructions":{"subject":"Mở khóa tài khoản Everland"}},"omniauth_callbacks":{"failure":"Không thể đăng nhập qua tài khoản %{kind} vì \"%{reason}\".","success":"Đăng nhập thành công bằng tài khoản %{kind}."},"passwords":{"no_token":"Bạn chỉ có thể truy cập trang này từ email đặt lại mật khẩu. Nếu bạn truy cập từ email đặt lại mật khẩu, xin chắc chắn rằng bạn dùng đường dẫn đầy đủ trong email.","send_instructions":"Bạn sẽ nhận được email hướng dẫn thiết lập lại mật khẩu trong vài phút nữa.","send_paranoid_instructions":"Nếu email của bạn có trong hệ thống, bạn sẽ nhận được đường dẫn khôi phục mật khẩu trong vài phút nữa qua email.","updated":"Đổi mật khẩu thành công! Bạn hiện đang đăng nhập.","updated_not_active":"Mật khẩu đã được đổi thành công."},"registrations":{"destroyed":"Tạm biệt! Tài khoản của bạn đã được xóa. Chúng tôi hy vọng sẽ sớm gặp lại bạn.","signed_up":"Xin chào! Bạn đã đăng ký thành công.","signed_up_but_inactive":"Bạn đã đăng ký thành công. Tuy nhiên, bạn cần phải kích hoạt tài khoản trước khi có thể đăng nhập được.","signed_up_but_locked":"Bạn đã đăng ký thành công. Tuy nhiên tài khoản của bạn đã bị khóa nên không thể đăng nhập được.","signed_up_but_unconfirmed":"Một email chứa đường dẫn xác nhận tài khoản đã được gửi cho bạn. Bạn vui lòng kiểm tra email.","update_needs_confirmation":"Tài khoản của bạn được cập nhật thành công, nhưng bạn cần xác nhận địa chỉ email mới. Vui lòng kiểm tra email và nhấn vào đường dẫn xác nhận tài khoản để hoàn tất việc thay đổi địa chỉ email.","updated":"Cập nhật tài khoản thành công."},"sessions":{"already_signed_out":"Đăng xuất thành công.","signed_in":"Đăng nhập thành công.","signed_out":"Đăng xuất thành công."},"unlocks":{"send_instructions":"Bạn sẽ nhận được mail trong vài phút tới. Vui lòng kiểm tra mail để mở khóa tài khoản.","send_paranoid_instructions":"Nếu tài khoản của bạn tồn tại, bạn sẽ nhận được email hướng dẫn cách mở khóa tài khoản trong vài phút nữa.","unlocked":"Tài khoản của bạn đã được mở khóa thành công. Vui lòng đăng nhập để tiếp tục."}},"errors":{"messages":{"already_confirmed":"đã xác thực tài khoản, vui lòng đăng nhập","confirmation_period_expired":"cần được xác nhận trong %{period}, xin vui lòng yêu cầu mã mới.","expired":"đã hết hạn, vui lòng gửi yêu cầu mới.","not_found":"không tìm thấy","not_locked":"không bị khóa","not_saved":{"one":"1 lỗi khi lưu %{resource}:","other":"%{count} lỗi khi lưu %{resource}:"}}},"helpers":{"submit":{"create":"Đăng Tin","update":"Cập Nhật Tin"}},"js":{"login":{"error":{"blank":{"password":"Mật khẩu không được để trống.","username":"Tên đăng nhập không được để trống."}}},"post":{"agree":"Thỏa Thuận","error":{"address":{"blank":"Địa chỉ không thể bỏ trống.","too_long":"Địa chỉ có độ dài tối đa 200 ký tự."},"area":{"max_value":"Diện tích tối đa 999999.","not_a_number":"Diện tích không hợp lệ."},"bedroom":{"max_value":"Số phòng ngủ tối đa 999 phòng.","not_a_number":"Số phòng ngủ không hợp lệ."},"category":{"blank":"Vui lòng chọn hình thức.","exit_category":"Hình thức không tồn tại."},"city":{"blank":"Vui lòng chọn tỉnh/thành phố.","exit_city":"Thành phố không có thật."},"contact_address":{"too_long":"Địa chỉ liên hệ có độ dài tối đa 200 ký tự."},"contact_mail":{"invalid":"Địa chỉ email không hợp lệ.","too_long":"Mail liên hệ có độ dài tối đa 100 ký tự."},"contact_mobile":{"blank":"Di động không thể bỏ trống.","invalid":"Số di động không đúng.","too_long":"Di động phải có độ dài tối đa 11 ký tự.","too_short":"Di động phải có độ dài tối thiểu 10 ký tự."},"contact_name":{"invalid":"Tên không hợp lệ.","too_long":"Tên có độ dài tối đa 200 ký tự."},"contact_phone":{"invalid":"Số điện thoại không đúng.","too_long":" Điện thoại phải có độ dài tối đa 11 ký tự.","too_short":"Điện thoại phải có độ dài tối thiểu 10 ký tự."},"description":{"blank":"Mô tả không thể bỏ trống.","too_long":"Mô tả phải có độ dài tối đa 3000 ký tự.","too_short":"Mô tả phải có độ dài tối thiểu 30 ký tự."},"district":{"blank":"Vui lòng chọn quận huyện.","exit_district":"Quận không có thật"},"entrance":{"max_value":"Đường vào tối đa 999999m.","not_a_number":"Đường vào không hợp lệ."},"error_total":"Vui lòng kiểm tra lại thông tin đã nhập.","floor":{"max_value":"Số tầng tối đa 999 tầng.","not_a_number":"Số tầng không hợp lệ."},"front":{"max_value":"Mặt tiền tối đa 999999m.","not_a_number":"Mặt tiền không hợp lệ."},"furniture_description":{"too_long":"Mô tả nội thất có độ dài tối đa 200 ký tự."},"price":{"max_value":"Giá tối đa 999999.","not_a_number":"Giá không hợp lệ."},"project":{"invalid":"Tên dự án không hợp lệ.","too_long":"Dự án có độ dài tối đa 200 ký tự."},"sub_category":{"blank":"Vui lòng chọn loại."},"title":{"blank":"111Tiêu đề không thể bỏ trống.","max_length":"Tiêu đề có tối đa 99 ký tự.","min_length":"Tiêu đề có tối thiểu 30 ký tự.","too_long":"Tiêu đề có tối đa 99 ký tự.","too_short":"Tiêu đề có tối thiểu 30 ký tự."},"toilet":{"max_value":"Số toilet tối đa 999 phòng.","not_a_number":"Số toilet không hợp lệ."},"unit":{"blank":"Vui lòng chọn đơn vị."}}},"register":{"error":{"email":{"blank":"Địa chỉ email không được để trống.","existed":"Địa chỉ email đã tồn tại.","invalid":"Địa chỉ email không hợp lệ."},"name":{"blank":"Tên không được để trống."},"password":{"blank":"Mật khẩu không được để trống.","confirm_blank":"Xác thực mật khẩu không được để trống.","confirm_not_match":"Xác thực mật khẩu không đúng.","length":"Mật khẩu phải có độ dài từ 6 kí tự."},"phone":{"invalid":"Số điện thoại không đúng. Độ dài từ 10 đến 11 số."},"username":{"blank":"Tên đăng nhập không được để trống.","existed":"111Tên tài khoản đã tồn tại.","invalid":"Tên tài khoản không cho phép chứa ký tự đặc biệt.","length":"Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự."}},"success":{"email":"Email có thể sử dụng.","username":"Tên đăng nhập có thể sử dụng."}}},"views":{"pagination":{"first":"\u0026laquo;","last":"\u0026raquo;","next":"\u0026rsaquo;","previous":"\u0026lsaquo;","truncate":"\u0026hellip;"}}});
