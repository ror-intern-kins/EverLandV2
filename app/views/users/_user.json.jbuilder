json.extract! user, :id, :name, :username, :password, :birthday, :gender, :email, :phone, :address, :personal, :created_at, :updated_at
json.url user_url(user, format: :json)
