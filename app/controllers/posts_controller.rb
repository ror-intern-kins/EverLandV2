class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  before_action :set_post_to_show, only: [:show]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all.page(params[:page]).per(5)

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

  # GET users/1/posts/1
  # GET users/1/posts/1.json
  def show
    # @user = User.find(params[:user_id])
  end

  def result
    search_type = params[:search_type] # get params search type
    case search_type # switch case search type
    when "full"
      text = params[:query]
      @posts = Post.where("title LIKE ? OR address_number LIKE ? OR description LIKE ?", "%" + params[:query] + "%","%" + params[:query] + "%","%" + params[:query] + "%"   ).all.page(params[:page]).per(5)
    else
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
        @posts = Post.where(query).where(@h).page(params[:page]).per(5)
      elsif
        @posts = Post.where(query).page(params[:page]).per(5)
      end
      
    end #end else
    
  end
  # GET /posts/new
  def new
    @post = Post.new
    get_data()    
  
end

  # GET /posts/1/edit
  def edit
    @user = User.find(params[:user_id])
    @post = @user.posts.find(params[:id])
    get_data()
  end

  # POST /posts
  # POST /posts.json
  def create
    @user = User.find(params[:user_id])
    @post = @user.posts.build(post_params)
    
    respond_to do |format|
      if @post.save
        format.html { redirect_to post_path(@post), notice: 'Bài viết đã được đăng thành công.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @user = User.find(params[:user_id])    
    @post = @user.posts.find(params[:id])
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Bài viết đã được chỉnh sửa thành công.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  # POST post/search 
  def search
    # query = params[:query]
    search_type = params[:search_type]
    case search_type
    when "advance"
    query = params.require(:query).permit(:category_id,:area,:price,:city_id)   
    @posts = Post.where(query)
    when "full"
      text = params[:query]
      @posts = Post.where("title LIKE ? OR address_number LIKE ? OR description LIKE ?", "%" + params[:query] + "%","%" + params[:query] + "%","%" + params[:query] + "%"   )   
    end

    return @posts
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end
    def set_post_to_show
      @post = Post.includes(:images).find(params[:id])

    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title,:description, :user_id,
      :category_id, :city_id, :district_id, :ward_id, 
      :street_id, :address_number,:project, :unit, 
      :area, :price,:front, :entrance,
      :lng, :lat, 
      :house_direction, :balcony_direction, 
      :floor, :bedroom, :toilet, :furniture, 
      :contact_name, :contact_address, :contact_phone, :contact_mobile, :contact_mail)
    end

    #get data select option in view
    def get_data 
      @categories = Category.where(super_id: nil)
      @cities = City.all

    if params[:category_id]
        @name = Category.where('super_id = ? and super_id is not null', params[:category_id])
        respond_to do |format|
        format.json { render json: @name }
      end
    end
    
    if params[:city_id]
      @districts = City.find(params[:city_id]).districts.all
      respond_to do |format|  
        format.json { render json: @districts  }  
      end
    end
    if params[:district_id]
      @wards = District.find(params[:district_id]).wards.all
      respond_to do |format|
        format.json { render json: @wards }
      end
    end
    if params[:ward_id]
      @streets = Ward.find(params[:ward_id]).streets.all
      respond_to do |format|
        format.json { render json: @streets }
      end
    end 
    
    end
end
