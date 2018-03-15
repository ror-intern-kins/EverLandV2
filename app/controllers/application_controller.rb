class ApplicationController < ActionController::Base
  before_action :show_category
  protect_from_forgery with: :exception

  include SessionsHelper

  def show_category
    @categories = Category.where(super_id: nil)
  end
end
