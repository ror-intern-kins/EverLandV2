class WelcomeController < ApplicationController
  def index
    @search 
    @categories = Category.where(super_id: nil)
    puts @categories
    @cities = City.all
    @districts
    # find all city
    if( params[:city_id])
      @districts = City.find(params[:city_id]).districts.all
      respond_to do |format|  
        format.json { render json: @districts  }  
      end
    end
    # find district by city_id
    if( params[:category_id])
      @category_details = Category.where(super_id: params[:category_id])
      respond_to do |format|  
        format.json { render json: @category_details  }  
      end
    end
    # find ward by district_id
    if( params[:district_id])
      @wards = District.find(params[:district_id]).wards.all
      respond_to do |format|  
        format.json { render json: @wards  }  
      end
    end
    #find street by ward_id
    if( params[:ward_id])
      @street = Ward.find(params[:ward_id]).streets.all
      respond_to do |format|  
        format.json { render json: @street  }  
      end
    end
  end
end
