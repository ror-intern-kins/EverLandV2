# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = City.create([
    {name: "Ho Chi Minh City"},
    {name: "Ha Noi"}
])

districts = cities[0].districts.create([
    {name: "Quận 1"},
    {name: "Quận 2"},
    {name: "Quận 3"},
    {name: "Quận Thủ Đức"},
    {name: "Quận Gò Vấp"}
])

cities[1].districts.create([
    {name: "Quận Ba Đình"},
    {name: "Quận Bắc Từ Liêm"},
    {name: "Quận Cầu Giấy"},
    {name: "Quận Đống Đa"},
    {name: "Quận Hà Đông"}
])



districts.each do |d|
    wards = d.wards.create([
        {name: "Phường 1"},
        {name: "Phường 2"},
        {name: "Phường 3"}
    ])
    wards.each do |w|
        5.times do |i|
            w.streets.create({name: "Đường #{i}"})
        end
    end
end

Category.create([
    {name: "Nhà đất bán"},
    {name: "Nhà đất cho thuê"},
    {name: "Bán căn hộ chung cư", super_id: 1},
    {name: "Bán nhà riêng", super_id: 1}
])

5.times do |i|
    user = User.create({username: "user#{i}", password: "user#{i}", name:"user#{i}"})
    5.times do |j|
        user.posts.create([
            {
                title: "Post #{i} #{j}",
                category_id: 2,
                city_id: 0,
                district_id: 0,
                ward_id: 0,
                street_id: 0,
                description: "#{i} #{j} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat ipsam veritatis ea libero, minima itaque fugit, unde cumque accusantium doloribus vel consequatur dicta recusandae, nobis iste? Ex, excepturi assumenda.",
                price: 100 + i + j,
                unit: "triệu/tháng"
            }
        ])
    end
end