# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180320074203) do

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.integer "super_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "districts", force: :cascade do |t|
    t.string "name"
    t.integer "city_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_districts_on_city_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "url"
    t.integer "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_images_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.integer "category_id"
    t.integer "city_id"
    t.integer "district_id"
    t.integer "ward_id"
    t.integer "street_id"
    t.string "address_number"
    t.text "description"
    t.string "project"
    t.float "area"
    t.float "price"
    t.string "unit"
    t.float "lng"
    t.float "lat"
    t.float "front"
    t.float "entrance"
    t.string "house_direction"
    t.string "balcony_direction"
    t.integer "floor"
    t.integer "bedroom"
    t.integer "toilet"
    t.text "furniture"
    t.string "contact_name"
    t.string "contact_address"
    t.string "contact_phone"
    t.string "contact_mobile"
    t.string "contact_mail"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["city_id"], name: "index_posts_on_city_id"
    t.index ["district_id"], name: "index_posts_on_district_id"
    t.index ["street_id"], name: "index_posts_on_street_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
    t.index ["ward_id"], name: "index_posts_on_ward_id"
  end

  create_table "streets", force: :cascade do |t|
    t.string "name"
    t.integer "ward_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ward_id"], name: "index_streets_on_ward_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "username"
    t.date "birthday"
    t.string "gender"
    t.string "phone"
    t.string "address"
    t.boolean "personal"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wards", force: :cascade do |t|
    t.string "name"
    t.integer "district_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["district_id"], name: "index_wards_on_district_id"
  end

end
