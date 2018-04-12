# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# dataset = JSON.parse(File.read('db/data.json'))
# dataset.each do |ckey, cvalue|
#     city = City.create!(name: cvalue['name'])
#     cvalue['quan-huyen'].each do |dk, dv|
#         district = city.districts.create!(name: dv['name'])
#         dv['xa-phuong'].each do |wk, wv|
#             ward = district.wards.create!(name: wv['name'])
#             2.times do |i|
#                 ward.streets.create!(name: "Đường #{i}")
#             end
#         end
#     end
# end


Category.create!([
    {name: "house_land_sell"},
    {name: "house_land_rent"},
    {name: "apartments_sell", super_id: 1},
    {name: "house_sell", super_id: 1},
    {name: "land_sell", super_id: 1},
    {name: "villas_sell", super_id: 1},
    {name: "house_rent", super_id: 2},
    {name: "apartments_rent", super_id: 2},
    {name: "office_rent", super_id: 2},
    {name: "hostel_rent", super_id: 2}
])
user = User.find(1)

# dataset_post = JSON.parse(File.read('db/post.json'))
# dataset_post.each do |v|
#     post = user.posts.create!(
#         title: v['title'],
#         category_id: v['category_id'],
#         description: v['description'],
#         lng: v['lng'],
#         lat: v['lat'],
#         project: v['project'],
#         floor: v['floor'],
#         price: v['price'],
#         area: v['area'],
#         address_number: v['addr'],
#         unit: 'Thỏa Thuận',
#         front: v['street_front'],
#         house_direction: v['house_direction'],
#         bedroom: v['bedroom'],
#         toilet: v['bathroom'],
#         contact_name: v['contact_name'],
#         contact_address:  v['contact_address'],
#         contact_phone:  v['contact_mobile'],
#         contact_mobile:  v['contact_mobile'],
#     )
#     images = v['images']
#     images.each_index do |i|
#         if i < 8
#             post.images.create!(url_out: images[i])    
#         end
#     end
# end