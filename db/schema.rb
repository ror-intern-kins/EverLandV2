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

ActiveRecord::Schema.define(version: 20180302034224) do

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
    t.string "name"
    t.string "username"
    t.string "password"
    t.date "birthday"
    t.string "gender"
    t.string "email"
    t.string "phone"
    t.string "address"
    t.boolean "personal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wards", force: :cascade do |t|
    t.string "name"
    t.integer "district_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["district_id"], name: "index_wards_on_district_id"
  end

end
