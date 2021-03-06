class WelcomeController < ApplicationController
  before_action :load_data, only: [:index, :search_by_super_category_id, :search_by_category_id]
  def index
    @posts = newest_posts
    flash[:noti] = t(:noti_default)
    @search 
    # @categories = Category.where(super_id: nil)
    # @categories.each_with_index do |c, i|
    #   @categories[i].name = t(c.name)
    # end
    # puts @categories
    # @cities = City.all
    # @districts
    # find all city

    if(params[:city_id])
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
    #-------------------Search-----------
    if (params[:search_type])
     
      text = params[:q]
      flash[:noti] = t(:noti_search, search: text)
      if(params[:q].nil?)
        @posts = []
      else
        @rs = Post.search params[:q]
      
        @posts = Post.where(id: @rs.pluck(:_id)).page(params[:page]).per(9)
      end
    end
    if (params[:search])
        query = params.require(:search).permit(:category_id,:area_top, :area_bottom,:price_top, :price_bottom, :category_detail_id,:area,:price,:city_id, :district_id, :ward_id, :street_id, :house_direction, :bedroom)  
      @h = Array.new # search array only for area and price
      @s = "" # search string
      @h[0] = @s # h => [""]
      # LOOP query to edit search only for area and price
      query.each do |key, value|         
        # If query have a area top value
        if !value.blank? # value not blank
          case key
          when "area_bottom"
            if(@s != "") # string not blank , add ' AND '
             @s += ' AND '  # ex: @s => "area < ? AND "
            end
            # string blank , insert new query
            @s += "area >= ? " # ex: @s => "area < ? AND area > ?  "
            @h.push(value) # h => ["area < ?", "area_top_value"]
            query.delete(key) # delete key in query 
          when "area_top"
            if(@s != "") 
              @s += ' AND ' 
             end
            @s += "area <= ?" # ex @s => "area < ? AND area > ?  "
            @h.push(value)  # h => ["area < ? AND area > ?", "area_top_value", "area_bot_value"]
            query.delete(key) # delete key in query 
          when "price_top"
            if(@s != "") 
              @s += ' AND ' 
             end
            @s += "price <= ?" # ex @s => "area < ? AND area > ? AND price <= ?  "
            @h.push(value)  # h => ["area < ? AND area > ? AND price <= ?", "area_top_value", "area_bot_value", "price_top_value"]
            query.delete(key) # delete key in query 
          when "price_bottom"
            if(@s != "") 
              @s += ' AND ' 
              end
            @s += "price >= ?" # ex @s => "area < ? AND area > ? AND price <= ?  AND price >= ? "
            @h.push(value)  # h => ["area < ? AND area > ? AND price <= ?", "area_top_value", "area_bot_value", "price_top_value", "price_bot_value"]
            query.delete(key) # delete key in query
          when "bedroom"
            if !@s.blank?
              @s += ' AND ' 
            end
            @s += "bedroom >= ?" # @s => "bedroom >= ?"
            @h.push(value) # @h => ["bedroom >= ?", "bedroom_value"]
            query.delete(key) # delete key
          end
        end
        
        # IF
        if key == "category_detail_id" && !value.blank?
          query[:category_id] = query[:category_detail_id]
          query.delete(key)
        end
        if key == "category_detail_id" && value.blank?
          query[:category_id] = Category.where(super_id: query[:category_id])
        end
      end
      @h[0] = @s
      query.each do |key, value|
        if value.blank?
          query.delete(key)
        end
      end #end foreach

      if(!@s.blank?) # check array , prevent where null 
        @posts = Post.where(query).where(@h).order(created_at: :desc).page(params[:page]).per(9)
      elsif
        @posts = Post.where(query).order(created_at: :desc).page(params[:page]).per(9)
      end
        
      flash[:noti] = t(:noti_high_search)
    end #end if

  end

  def newest_posts
    @posts = Post.order(created_at: :desc).page(params[:page]).per(9)
    return @posts
  end

  def search_by_super_category_id
    query = Category.where(super_id: params[:category_id])

    @posts = Post.where(category_id: query).order(created_at: :desc).page(params[:page]).per(9)    
          
    flash[:noti] = t(:noti_high_search)
    render :index
  end

  def search_by_category_id

    @posts = Post.where(category_id: params[:category_id]).order(created_at: :desc).page(params[:page]).per(9)    
          
    flash[:noti] = t(:noti_high_search)
    render :index
  end
private
  def load_data
    @categories = Category.where(super_id: nil)#find all category parent
    @categories.each_with_index do |c, i|
      @categories[i].name = t(c.name)
    end
    @search_direction = Post::SEARCH_DIRECTION
    @search_direction_list = Hash.new
    @search_direction.each do |d|
      @search_direction_list[I18n.t(d)] = d
    end
    @cities = City.all
  end
end
