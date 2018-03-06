class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all

    @search 
    @categories = Category.where(super_id: nil)
    puts @categories
    @cities = City.all
    @districts
    if( params[:city_id])
      @districts = City.find(params[:city_id]).districts.all
      respond_to do |format|  
        format.json { render json: @districts  }  
      end
    end
  end

  # GET users/1/posts/1
  # GET users/1/posts/1.json
  def show
    # @user = User.find(params[:user_id])
  end

  def result
    search_type = params[:search_type]
    case search_type
    when "full"
      text = params[:query]
      @posts = Post.where("title LIKE ? OR address_number LIKE ? OR description LIKE ?", "%" + params[:query] + "%","%" + params[:query] + "%","%" + params[:query] + "%"   )   
    else
      query = params.require(:search).permit(:category_id,:area,:price,:city_id, :district_id)  
      query.each do |key, value|
        if value.blank?
          query.delete(key)
        end
      end
      @posts = Post.where(query)
    end
    
  end
  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
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
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
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

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :address_number, :description, :project, :area, :price, :unit, :lng, :lat, :front, :entrance, :house_direction, :balcony_direction, :floor, :bedroom, :toilet, :furniture, :contact_name, :contact_address, :contact_phone, :contact_mobile, :contact_mail)
    end
end
