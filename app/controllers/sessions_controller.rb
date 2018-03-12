class SessionsController < ApplicationController

  def login
    @user = User.find_by_username(params[:session][:username].downcase)
    if @user && @user.authenticate(params[:session][:password])
      log_in @user
      # render html: [logged_in?, session[:user_id], user]
      redirect_to root_path
    else
      flash.now[:invalid] = 'Tên đăng nhập hoặc mật khẩu không đúng.'
      render 'root'
    end
  end

  #check username&password
  def check_login
    user = User.find_by_username(params[:txtUsername].downcase)
    respond_to do |format|
    if user && user.authenticate(params[:txtPassword])
      format.json { render :json => { checkAll: true }}
    else
      format.json { render :json => { checkAll: false }} #false nghĩa là user or password ko đúng
    end
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end

end
