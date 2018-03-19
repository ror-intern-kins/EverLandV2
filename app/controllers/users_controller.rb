class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :checkCurrentId, only: [:edit, :update]
  # GET /users
  # GET /users.json
  def index
    #@users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def edit
    @user = User.find(params[:id])
  end
  # GET /users/new
  def new
    @user = User.new
  end
  # POST /users
  # POST /users.json
  def create
    @user = User.new(data_params)
      if @user.save
        log_in @user
        redirect_to root_path    
      else
      end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
      if @user.update(user_params)
        render 'edit'
      end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  #kiểm tra user có tồn tại hay ko
  def check_existed_user
    current_user_id = params[:current_user_id]
    @user = User.find_by_username (current_user_id)
    respond_to do |format|
      format.json { render :json => { check: !@user.nil? }} #check true thì có tồn tại user
    end
  end

  def edit_change_password
    @user = User.new
  end
  # kiểm tra mật khẩu cũ
  def confirm_old_password
    @user = User.find_by_id(current_user.id)
    old_password = params[:old_password]
    respond_to do |format|
      if @user.authenticate(old_password)
        format.json { render :json => { checkPwd: true }}
      else
        format.json { render :json => { checkPwd: false }}
      end
    end
  end

  def change_password
    @user = User.find_by_id(current_user.id)
    if @user.update_attributes(:password => params[:user][:change_password])
      log_in @user
      flash[:noti_pwd] = 'Thay đổi mật khẩu thành công'    
    else
      flash[:noti_pwd] = 'Thay đổi mật khẩu thất bại'
    end
    render 'edit_change_password'
    
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id]) or not_found or internal_server_error
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def data_params
      # bỏ require(:user) đi vì dữ liệu truyền về từ data
      params.permit(:name, :username, :password, :password_confirmation, :birthday, :gender, :email, :phone, :address, :personal)
    end
    def user_params
      params.require(:user).permit(:name, :username, :password, :password_confirmation, :birthday, :gender, :email, :phone, :address, :personal)
    end
    def checkCurrentId 
      @user = User.find(params[:id])
      redirect_to not_found_path if current_user.id != @user.id 
    end
end
