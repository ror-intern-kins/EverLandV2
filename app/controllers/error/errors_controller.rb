class Error::ErrorsController < ApplicationController
    # handle 404
    def not_found
      return render_error_not_found
    end
  
    # handle 500
    def internal_server_error
      return render_error_internal_server_error
    end
  
    protected
  
    def render_error_not_found
      respond_to do |format|
        format.html {render file: "#{Rails.root}/public/404.html"}
        format.json do
          render status: :not_found,
            json: {
              errors: ["Trang không tồn tại."]
            }
        end
      end
    end
  
    def render_error_internal_server_error
      respond_to do |format|
        format.html {render file: "#{Rails.root}/public/500.html"}
        format.json do
          render status: :internal_server_error,
            json: {
              errors: ["Trang xảy hiện lỗi. Vui lòng liên hệ Admin"]
            }
          end
      end
    end
  end