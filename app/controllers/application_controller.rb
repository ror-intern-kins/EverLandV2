class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  protect_from_forgery prepend: true
  before_action :show_category
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_locale
  # include SessionsHelper
 
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
  
  def default_url_options
    { locale: I18n.locale }
  end

  def show_category
    @menu_category = Array.new
    super_categories = Category.where(super_id: nil)
    
    super_categories.each do |cate|      
      items = Category.where(super_id: cate.id)
      elem = {super_cate: cate, sub_cate: items}
      @menu_category.push(elem);
    end
  end
  
 
  protected
 
  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation,
     :remember_me, :name, :phone, :gender, :birthday, :address, :personal]
    devise_parameter_sanitizer.permit :sign_in, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
