class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update]
  before_action :checkCurrentId, only: [:edit, :update]

  # GET /users/1
  # GET /users/1.json
  def edit
    @user = User.find(params[:id])
  end

  def show_error  
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
      if @user.update(user_params)
        redirect_to edit_user_path (@user)
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
  #kiểm tra tk vs mk
  def check_login
    user = User.find_by_username(params[:txtUsername].downcase)
      respond_to do |format|
        if user && BCrypt::Password.new(user.encrypted_password) == params[:txtPassword]
          format.json { render :json => { checkAll: true }}
        else
          format.json { render :json => { checkAll: false }} #false nghĩa là user or password ko đúng
        end
      end
  end
  #check mail có tồn tại hay ko
  def check_email
    email = params[:txt_email].downcase
    user = User.find_by_email (email)
    respond_to do |format|
      format.json { render :json => { checkEmail: !user.nil? }} #check true thì có tồn tại email
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
      if BCrypt::Password.new(@user.encrypted_password) == old_password
        format.json { render :json => { checkPwd: true }}
      else
        format.json { render :json => { checkPwd: false }}
      end
    end
  end

  def change_password
    @user = User.find_by_id(current_user.id)
    if @user.update_attributes(:password => params[:user][:change_password])
      flash[:noti_pwd] = 'Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại.'    
      redirect_to new_user_session_path
    else
      flash[:noti_pwd] = 'Thay đổi mật khẩu thất bại'
    end
    # render 'edit_change_password'
    
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    #or not_found or internal_server_error
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
    #----Check url
    def checkCurrentId 
      @user = User.find(params[:id])
      # puts current_user.id
      puts @user
      redirect_to not_found_path if current_user.id != @user.id 
    end
end
