class SessionsController < ApplicationController

  #check username&password
  def check_login
    user = User.find_by_username(params[:txtUsername].downcase)
    if (user)  && BCrypt::Password.new(user.encrypted_password) == params[:txtPassword].downcase
      respond_to do |format|
        if user
          format.json { render :json => { checkAll: true }}
        else
          format.json { render :json => { checkAll: false }} #false nghĩa là user or password ko đúng
        end
      end
    end
  end

end
