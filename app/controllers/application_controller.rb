class ApplicationController < ActionController::Base
  #protect_from_forgery with: :exception
  protect_from_forgery prepend: true
  
  before_action :show_category

  include SessionsHelper

  def show_category
    @menu_category = Array.new
    super_categories = Category.where(super_id: nil)
    super_categories.each do |cate|      
      item = Category.where(super_id: cate.id)
      elem = {super_cate: cate, sub_cate: item}
      @menu_category.push(elem);
    end
  end
end
