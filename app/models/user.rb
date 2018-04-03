class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :lockable, :timeoutable, :omniauthable, 
         :omniauthable, omniauth_providers: [:facebook, :google_oauth2] #Gem login fb, gg
  has_many :posts

  #---------- Create user when login by gg or fb ---------- 
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
      user.name = auth.info.name   
      user.skip_confirmation!
    end
  end
  #---------- Set session & info when login by gg or fb ---------- 
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
