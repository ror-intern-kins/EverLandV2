class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :lockable, :timeoutable, :omniauthable, omniauth_providers: [:facebook, :google_oauth2]
  has_many :posts

  def self.new_with_session(params, session)
    super.tap do |user|
      fb = session["devise.facebook_data"]
      gg = session["devise.google_oauth2_data"]
      if (fb && session["devise.facebook_data"]["extra"]["raw_info"]) ||
        (gg && session["devise.google_oauth2_data"]["extra"]["raw_info"]) 
        user.email = data["email"] if user.email.blank?
      end
    end
  end
  
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
    end
  end

end
