class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password
      t.date :birthday
      t.string :gender
      t.string :email
      t.string :phone
      t.string :address
      t.boolean :personal

      t.timestamps
    end
  end
end
