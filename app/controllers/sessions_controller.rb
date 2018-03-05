class SessionsController < ApplicationController
  def new
    
  end
  def home
  end
  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.password == params[:session][:password]
      user.password = 'Ahihi' #tạm thời
      # log_in user
      # render html: ['Pass', login_in?, session[:user_id], user]
      redirect_to session_home_path
    else
      flash.now[:invalid] = 'Tên đăng nhập hoặc mật khẩu không đúng.'
      render 'new'
    end
  end
  def destroy
    log_out
  end

  private
    def log_in(user)
        session[:user_id] = user.id
    end
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
    def login_in?
        !current_user.nil?
    end
    def log_out
        session.delete(:user_id)
        @current_user = nil
    end
end
