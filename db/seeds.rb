# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = City.create!([
    {name: "Hồ Chí Minh"},
    {name: "Hà Nội"},
    {name: "Đà Nẵng"}
])

districts_1 = cities[0].districts.create!([
    {name: "Quận 1"},
    {name: "Quận 2"},
    {name: "Quận 3"},
    {name: "Quận 4"},
    {name: "Quận 5"},
    {name: "Quận 6"},
    {name: "Quận 7"},
    {name: "Quận 8"},
    {name: "Quận 9"},
    {name: "Quận 10"},
    {name: "Quận 11"},
    {name: "Quận 12"},
    {name: "Quận Thủ Đức"},
    {name: "Quận Gò Vấp"}
])

districts_2= cities[1].districts.create!([
    {name: "Quận Ba Đình"},
    {name: "Quận Bắc Từ Liêm"},
    {name: "Quận Cầu Giấy"},
    {name: "Quận Đống Đa"},
    {name: "Quận Hà Đông"},
    {name: "Quận Ba Vì"},
    {name: "Quận Phú Xuyên"},
    {name: "Quận Phú Thọ"}
])

districts_3 = cities[2].districts.create!([
    {name: "Quận Côn Đảo"},
    {name: "Quận Long Điền"},
    {name: "Quận Châu Đức"},
    {name: "Quận Đất Đỏ"},
    {name: "Quận Xuyên Mộc"},
    {name: "Quận Vũng Tàu"},
    {name: "Quận Tân Thành"},
    {name: "Quận Bà Rịa"}
])


districts_1.each do |d|
    wards = d.wards.create!([
        {name: "Phường Bến Nghé"},
        {name: "Phường Bến Thành"},
        {name: "Phường Đa Kao"},
        {name: "Phường Trương Định"},
        {name: "Phường Phạm Ngũ Lão"}
    ])
    wards.each do |w|
        5.times do |i|
            w.streets.create!({name: "Đường #{i}"})
        end
    end
end

districts_2.each do |d|
    wards = d.wards.create!([
        {name: "Phường Kim Mã"},
        {name: "Phường Điện Biên"},
        {name: "Phường Thành Công"},
        {name: "Phường Trúc Bạch"},
        {name: "Phường Liễu Giai"}
    ])
    wards.each do |w|
        5.times do |i|
            w.streets.create!({name: "Đường #{i}"})
        end
    end
end

districts_3.each do |d|
    wards = d.wards.create!([
        {name: "Phường Phong Tâm"},
        {name: "Phường Long Toàn"},
        {name: "Phường Phước Trung"},
        {name: "Xã Tân Hưng"},
        {name: "Xã Hòa Long"}
    ])
    wards.each do |w|
        5.times do |i|
            w.streets.create!({name: "Đường #{i}"})
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
