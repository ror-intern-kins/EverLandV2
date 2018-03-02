class CreateStreets < ActiveRecord::Migration[5.1]
  def change
    create_table :streets do |t|
      t.string :name
      t.belongs_to :ward    

      t.timestamps
    end
  end
end
