class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable,
         :lockable, :timeoutable, :omniauthable, omniauth_providers: %i[facebook]
  has_many :posts
  # def self.from_omniauth(auth_hash)
  #   user = find_or_create_by(username: auth_hash['username'], 
  #     provider: auth_hash['provider'])
  #   user.email = auth_hash['info']['email']
  #   user.password = '123456'
  #   user.save!
    
  # end

  def self.from_omniauth(auth)
    where(provider: auth.provider, username: auth.username).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
    end
      # user.skip_confirmation!
    end
end
