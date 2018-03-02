class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :address_number
      t.text :description
      t.string :project
      t.float :area
      t.float :price
      t.string :unit
      t.float :lng
      t.float :lat
      t.float :front
      t.float :entrance
      t.string :house_direction
      t.string :balcony_direction
      t.integer :floor
      t.integer :bedroom
      t.integer :toilet
      t.text :furniture
      t.string :contact_name
      t.string :contact_address
      t.string :contact_phone
      t.string :contact_mobile
      t.string :contact_mail

      t.timestamps
    end
  end
end
