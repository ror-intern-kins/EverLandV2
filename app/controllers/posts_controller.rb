class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  before_action :set_post_to_show, only: [:show]
  before_action :check_current_id, only: [:edit, :update, :destroy] 
  before_action :load_data, only: [:edit, :new]
  #GET /user_posts
  #GET /user_posts.json
  def index_user_posts
    @user = current_user
    @posts = @user.posts.order("created_at DESC").page(params[:page]).per(5)  #phân trang 
  end

  # GET /posts/new
  def new
    @post = Post.new
    @image = @post.images.build
    load_data()
  end

  # GET /posts/1/edit
  def edit
    @categories = Category.where(super_id: nil) #find all category parent
    load_data()
  end

  # POST users/id/posts
  # POST users/id/posts.json
  def create
    @user = current_user    
    @post = @user.posts.build(post_params)
    respond_to do |format|
      if @post.save
        if !(params[:images].nil?)
          params[:images]['url'].each do |a|
            @image = @post.images.create!(url: a, post_id: @post.id)
          end
        end
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
    # @user = current_user
    # @p = Post.find(params(:id))
    # if @p.user_id == @user.id
      # @post = @user.posts.find(params[:id])
      respond_to do |format|
        if @post.update(post_params)
          if !(params[:images].nil?)
            params[:images]['url'].each do |a|
              @image = @post.images.create!(url: a, post_id: @post.id)
            end
          end
          if !(params[:images_delete].nil?)
            params[:images_delete].each do |i|
              image = Image.find(i['id']);
              @post.images.destroy(image);
            end
          end
          format.html { redirect_to @post, notice: 'Bài viết đã được chỉnh sửa thành công.' }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :edit }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    # else
    #   redirect_to not_found_path
    # end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    # @user = current_user
    # @post = Post.find(params[:id])
    # if @user.id == @post.user_id
      @post.destroy
      respond_to do |format|
        format.html { redirect_to index_user_posts_path(@user), notice: 'Bài viết đã được xóa thành công.' }
        format.json { head :no_content }
      end
    # else
    #   redirect_to not_found_path
    # end
  end

 #NEW
 def get_category_new
    @sub_cate = Category.where('super_id = ? ', params[:category_id]) #find all child          
    respond_to do |format|
      format.json { render json: @sub_cate } 
    end
  end
  #EDIT
  def get_category_edit
      #get super id in post edit
      @tmp = Category.where('id = ?', params[:category_id]) #category in post edit
      @sCategory = Category.where('super_id = ?', @tmp[0].super_id)  #category child when load page
      @list_child_categories = Category.where('super_id = ? ', params[:category_id]) #categories child dropdown

      respond_to do |format|
        format.json { render json: [@sCategory, @list_child_categories, @tmp] }
      end
  end

  
  def get_data 
    if params[:city_id]
      @districts = City.find(params[:city_id]).districts.all
      respond_to do |format|  
        format.json { render json: [@cities, @districts] }  
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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id]) or not_found or internal_server_error
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
      :contact_name, :contact_address, :contact_phone, :contact_mobile, :contact_mail,
      images_attributes: [:id, :post_id, :url])
    end  

  def check_current_id
    @user = current_user
    @post = Post.find(params[:id])
    redirect_to not_found_path unless @user.id == @post.user_id
  end

  def load_data
    @categories = Category.where(super_id: nil)#find all category parent
    @categories.each_with_index do |c, i|
      @categories[i].name = t(c.name)
    end
    
    @units = Post::UNIT_POST
    @units_hash = Hash.new
    @units.each do |u|
      @units_hash[I18n.t(u)] =  u
    end
    
    @direction = Post::DIRECTION
    @direction_list = Hash.new
    @direction.each do |d|
      @direction_list[I18n.t(d)] = d
    end
    @cities = City.all
  end
end
