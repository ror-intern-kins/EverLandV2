# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# dataset = JSON.parse(File.read('db/data.json'))
# dataset.each do |ckey,cvalue|
#     name: cvalue[:name])
#     cvalue['quan-huyen'].each do |dk, dv|
#         district = city.districts.create!(name: dv[:name])
#         dv['xa-phuong'].each do |wk, wv|
#             ward = district.wards.create!(name: wv[:name])
#             2.times do |i|
#                 ward.streets.create!(name: "Đường #{i}")
#             end
#         end
#     end
# end

dataset = JSON.parse(File.read('db/data.json'))
dataset.each do |ckey,cvalue|
    city = City.create!(name: cvalue['name'])
    cvalue['quan-huyen'].each do |dk, dv|
        district = city.districts.create!(name: dv['name'])
        dv['xa-phuong'].each do |wk, wv|
            ward = district.wards.create!(name: wv['name'])
            2.times do |i|
                ward.streets.create!(name: "Đường #{i}")
            end
        end
    end
end

Category.create!([
    {name: "Nhà đất bán"},
    {name: "Nhà đất cho thuê"},
    {name: "Bán căn hộ chung cư", super_id: 1},
    {name: "Bán nhà riêng", super_id: 1},
    {name: "Bán đất", super_id: 1},
    {name: "Bán biệt thự", super_id: 1},
    {name: "Thuê nhà riêng", super_id: 2},
    {name: "Thuê căn hộ chung cư", super_id: 2},
    {name: "Thuê văn phòng", super_id: 2},
    {name: "Thuê nhà trọ", super_id: 2}
])
