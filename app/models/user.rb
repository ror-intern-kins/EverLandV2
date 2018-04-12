class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :lockable, :timeoutable, :omniauthable, :omniauthable, omniauth_providers: [:facebook, :google_oauth2]
  has_many :posts

  # validates :name, presence: { message: "Tên không được để trống." }                         

  # validates :username, presence: { message: "Tên tài khoản không được để trống." },
  #                      length: {minimum: 6, maximum: 20, 
  #                      message: "Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự."},
  #                      format: { with: /\A[a-zA-Z0-9]+\z?/, message: "Tên tài khoản không cho phép chứa ký tự đặc biệt."}

  # validates :email, presence: { message: "Địa chỉ email không được để trống." },
  #                   format: { with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|vn|info))\z/i,
  #                             message: "Địa chỉ email không hợp lệ." }


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      # if !auth.info.email.blank?
      #   user.email = auth.info.email
      # else
      #   user.email = "auth.uid"
      # end
      user.email = auth.info.email
      user.username = user.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails, 
      # uncomment the line below to skip the confirmation emails.
      user.skip_confirmation!

    end

  end
  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
      if data = session["devise.google_data"] && session["devise.google_data"]["extra"]["raw_info"]
          user.email = data["email"] if user.email.blank? 
      end
    end
  end
end
