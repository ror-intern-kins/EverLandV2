json.extract! post, :id, :title, :address_number, :description, :project, :area, :price, :unit, :lng, :lat, :front, :entrance, :house_direction, :balcony_direction, :floor, :bedroom, :toilet, :furniture, :contact_name, :contact_address, :contact_phone, :contact_mobile, :contact_mail, :created_at, :updated_at
json.url post_url(post, format: :json)
