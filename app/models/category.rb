class Category < ApplicationRecord
    has_many :posts, class_name: "post", foreign_key: "category_id"
end
