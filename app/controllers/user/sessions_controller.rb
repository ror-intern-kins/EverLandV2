# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  layout false
  before_action :configure_sign_in_params, only: [:create]
  before_action :authenticate_user!


  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    if params[:session].present?
      super
    else
      begin
        user = User.from_omniauth(request.env['omniauth.auth'])
        session[:user_id] = user.id
        flash[:success] = "Welcome, #{user.email}"
      rescue 
        flash[:warning] = "Error"        
      end
    redirect_to root_path
    end
  end

  def failure
    render text: "Sorry..."
  end
  # DELETE /resource/sign_out
  def destroy
    super
    
  end
  protected
  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:username, :password, :remember_me])
  end
end
