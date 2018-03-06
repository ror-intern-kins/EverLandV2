class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  before_action :set_post_to_show, only: [:show]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
  end

  # GET users/1/posts/1
  # GET users/1/posts/1.json
  def show
    # @user = User.find(params[:user_id])
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
end
