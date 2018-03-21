# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  before_action :authenticate_user!

  # GET /resource/sign_in
  def new
    super
    redirect_to root_path
  end

  # POST /resource/sign_in
  def create
    super
    redirect_to root_path
  end

  # DELETE /resource/sign_out
  def destroy
    redirect_to root_path
    super
    
  end
  protected
  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:username])
  end
end
