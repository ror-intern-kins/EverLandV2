class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :lockable, :timeoutable, :omniauthable, omniauth_providers: [:facebook, :google_oauth2]
  has_many :posts

  def self.from_omniauth(auth)
    where(provider: auth.provider, username: auth.username).first_or_create do |user|
      user.provider = auth.provider
      user.username = auth.username
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
end
end
