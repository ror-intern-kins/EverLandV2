class WelcomeController < ApplicationController
  def index
    @posts = newest_posts

    @search 
    @categories = Category.where(super_id: nil)
    puts @categories
    @cities = City.all
    @districts
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
      search_type = params[:search_type] # get params search type
      text = params[:query]
        @posts = Post.where("title LIKE ? OR address_number LIKE ? OR description LIKE ?", "%" + params[:query] + "%","%" + params[:query] + "%","%" + params[:query] + "%"   ).all.page(params[:page]).per(12)
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
        end
        @h[0] = @s
        query.each do |key, value|
          if value.blank?
            query.delete(key)
          end
        end #end foreach

        if(!@s.blank?) # check array , prevent where null 
          @posts = Post.where(query).where(@h).page(params[:page]).per(12)
        elsif
          @posts = Post.where(query).page(params[:page]).per(12)
        end
        
    
    end #end if

  end

  def newest_posts
    @posts = Post.order(created_at: :desc).limit(6)
    return @posts
  end
end
