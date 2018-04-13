I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}},"models":{"post":{"attributes":{"address_number":{"blank":"Address can't be blank.","too_long":"Address maximum is 200 characters."},"area":{"not_a_number":"Area is invalid."},"bedroom":{"not_a_number":"Bedroom is invalid."},"category_id":{"blank":"Category can't be blank.","exit_category":"Category didn't exist."},"city_id":{"blank":"City can't be blank.","exit_city":"City didn't exist."},"contact_address":{"too_long":"Address of contact maximum is 200 characters."},"contact_mail":{"invalid":"Mail of contact is invalid.","too_long":"Mail of contact maximum is 100 characters."},"contact_mobile":{"blank":"Mobile can't be blank.","invalid":"Mobile is invalid.","too_long":"Mobile maximum is 11 characters.","too_short":"Mobile minimum is 10 characters."},"contact_name":{"invalid":"Name of contact is invalid.","too_long":"Name of contact maximum is 200 characters."},"contact_phone":{"invalid":"Phone is invalid.","too_long":"Phone maximum is 11 characters.","too_short":"Phone minimum is 10 characters."},"description":{"blank":"Description can't be blank.","too_long":"Description maximum is 3000 characters.","too_short":"Description minimum is 30 characters."},"district_id":{"blank":"District can't be blank.","exit_district":"District didn't exist."},"entrance":{"not_a_number":"Entrance is invalid."},"floor":{"not_a_number":"Floor is invalid."},"front":{"not_a_number":"Front is invalid."},"furniture":{"too_long":"Description of furniture maximum is 200 characters."},"price":{"not_a_number":"Price is invalid."},"project":{"invalid":"Name of project is invalid.","too_long":"Project maximum is 200 characters."},"title":{"blank":"Title can't be blank.","too_long":"Title maximum is 99 characters.","too_short":"Title minimum is 30 characters."},"toilet":{"not_a_number":"Toilet is invalid."}}},"user":{"attributes":{"email":{"blank":"can't be blank."},"password":{"blank":"can't be blank.","too_short":"is too short. Mininum must have 6 characters."},"password_confirmation":{"confirmation":"is invalid."},"reset_password_token":{"invalid":"is invalid. Check your mail again."},"unlock_token":{"invalid":"is invalid. Please come back Home page."}}}}}},"address":"Address","agreement":"Agreement","apartments_rent":"Rent Apartments","apartments_sell":"Sell Apartments","area":"Area","balcony_direction":"Balcony's direction","bedroom":"Bedroom","billion":"Billion","category":"Category","city":"City","contact_address":"Address contact","contact_mobile":"Mobile contact","contact_name":"Name contact","contact_phone":"Phone contact","create_day":"Created day","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"delete_post":"Delete","devise":{"confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.","updated":"Your account has been updated successfully."},"sessions":{"already_signed_out":"Signed out successfully.","signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"district":"District","east":"East","edit_post":"Edit","edit_post_title":"Edit Post","entrance":"Entrance","errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"floor":"Floor","front":"Front","furniture":"Furniture","hello":"Hello world","helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"placeholder":{"post":{"title":"Type your title here. Min is 30 characters \u0026 max is 99 characters."}},"select":{"prompt":"Please select"},"submit":{"create":"Create Post","submit":"Save %{model}","update":"Update Post"}},"hostel_rent":"Rent Hostel","house_direction":"House's direction","house_land_rent":"Rent House","house_land_sell":"Sell House","house_rent":"Rent House","house_sell":"Sell Self House","hunderm2":"Hundred thousand / m2","index_posts_user_title":"%{name}'s posts","js":{"login":{"error":{"blank":{"password":"Password can't be blank.","username":"Username can't be blank."}}},"post":{"error":{"address":{"blank":"Address can't be blank.","too_long":"Address maximum is 200 characters."},"area":{"max_value":"Area maxium is 999999.","not_a_number":"Area is invalid."},"bedroom":{"max_value":"Bedroom maxium is 999rooms.","not_a_number":"Bedroom is invalid."},"category":{"blank":"Please choose category.","exit_category":"Category didn't exist."},"city":{"blank":"City can't be blank.","exit_city":"City didn't exist."},"contact_address":{"too_long":"Address of contact maximum is 200 characters."},"contact_mail":{"invalid":"Mail of contact is invalid.","too_long":"Mail of contact maximum is 100 characters."},"contact_mobile":{"blank":"Mobile can't be blank.","invalid":"Mobile is invalid.","too_long":"Mobile maximum is 11 characters.","too_short":"Mobile minimum is 10 characters."},"contact_name":{"invalid":"Name of contact is invalid.","too_long":"Name of contact maximum is 200 characters."},"contact_phone":{"invalid":"Phone is invalid.","too_long":"Phone maximum is 11 characters.","too_short":"Phone minimum is 10 characters."},"description":{"blank":"Description can't be blank.","too_long":"Description maximum is 3000 characters.","too_short":"Description minimum is 30 characters."},"district":{"blank":"District can't be blank.","exit_district":"District didn't exist."},"entrance":{"max_value":"Entrance maxium is 999999m.","not_a_number":"Entrance is invalid."},"error_total":"Please check the information entered.","floor":{"max_value":"Floor maxium is 999.","not_a_number":"Floor is invalid."},"front":{"max_value":"Front maxium is 999999m.","not_a_number":"Front is invalid."},"furniture_description":{"too_long":"Description of furniture maximum is 200 characters."},"price":{"max_value":"Price maxium is 999999.","not_a_number":"Price is invalid."},"project":{"invalid":"Project of project is invalid.","too_long":"Project maximum is 200 characters."},"sub_category":{"blank":"Please choose type."},"title":{"blank":"Title can't be blank.","too_long":"Title maximum is 99 characters.","too_short":"Title minimum is 30 characters."},"toilet":{"max_value":"Toilet maxium is 999rooms.","not_a_number":"Toilet is invalid."},"unit":{"blank":"Unit can't be blank."}}},"register":{"error":{"email":{"blank":"Email can't be blank.","existed":"Email is already exist.","invalid":"Email is invalid."},"name":{"blank":"Name can't be blank"},"password":{"blank":"Password can't be blank.","confirm_blank":"Confirm password can't be blank","confirm_not_match":"Confirm password is invalid","length":"Mật khẩu phải có độ dài từ 6 kí tự.","old_not_match":"Mật khẩu cũ không đúng.","too_short":"Password is too short. Mininum must have 6 characters."},"phone":{"invalid":"Phone number is invalid"},"username":{"blank":"Username can't be blank.","existed":"Username is already exist.","invalid":"Username doesn't allow contain special character.","length":"Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự.","too_long":"Username is too long. Maxinum must have 20 characters.","too_short":"Username is too short. Mininum must have 6 characters."}},"success":{"email":"Email can use.","username":"Username can use."}}},"land_sell":"Sell Land","million":"Million","millionm2":"Million / m2","new_post_sub":"You enter information needed housing sale or lease in the categories below","new_post_title":"SIGN NEWS SELL, LEASE LAND HOUSE","north":"North","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"office_rent":"Rent Office","price":"Price","project":"Project","radius_btn":"Choose","select_category":"-- Category --","select_city":"-- City --","select_direction":"-- KXĐ -","select_district":"-- District --","select_map_1":"Store","select_map_2":"School","select_map_3":"Hospital","select_map_4":"Sport Area","select_map_5":"Restaurant","select_map_6":"Bus Stop","select_map_7":"Hotel / Homestay","select_map_8":"Commission","select_street":"-- Street--","select_type":"-- Type --","select_ward":"-- Ward --","show_details_sub_1":"HOUSE'S INFORMATION","show_details_sub_2":"CONTACT INFORMATION","show_post":"Show","show_sub_title_1":"INFORMATION","show_sub_title_2":"DESCRIPTION","show_sub_title_3":"DETAIL DESCRIPTIONS","show_sub_title_4":"POSTION","south":"South","street":"Street","sub_category":"Type","sub_des_1":"Maximum is only 3000 characters.","sub_des_2":"General introduction of your real estate. For example: The house has convenient location: Near the park, near the school ... Total area 52m2, car road to the door.","sub_des_3":"Note: the news only accept value VND.","sub_img_1":"Maximum is 8 images.","sub_img_2":"Image ads will be viewed more than 10 times and are called more than five times the message without photos. Please post a picture to be traded quickly!","sub_map_1":"To increase your credibility and your message, be sure to fix your location on the map by dragging it to the correct location. The map data may not be accurate. So if there is any error please tell us to correct in time.","sub_other_1":"You should fill out the information below for more effective coverage","sub_title_1":"BASIC INFORMATION","sub_title_2":"INFORMATION DESCRIPTION","sub_title_3":"OTHER INFORMATION","sub_title_4":"IMAGES","sub_title_5":"MAPS","sub_title_6":"CONTACT","support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"time_zone_create":"%I:%M %p, %b %d %Y","title":"Title","toilet":"Toilet","total":"Total","txt_radius":"Type radius of map...","unit":"Unit","views":{"pagination":{"first":"\u0026laquo;","last":"\u0026raquo;","next":"\u0026rsaquo;","previous":"\u0026lsaquo;","truncate":"\u0026hellip;"}},"villas_sell":"Sell Villas","ward":"Ward","west":"West"});