require 'elasticsearch/model'

class Post < ApplicationRecord
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    belongs_to :user
    has_many :images, dependent: :destroy
    accepts_nested_attributes_for :images

    # #Check foreign key exists
    # validate :category_id_exists
    # validate :city_id_exists
    # validate :district_id_exists
    
    # #Can not be blank
    # validates :title, presence: {message: 'Tiêu đề không thể bỏ trống.'}
    # validates :description, presence: {message: 'Mô tả không thể bỏ trống.'}
    # validates :category_id, presence: {message: 'Hình thức không thể bỏ trống.'}
    # validates :city_id, presence: {message: 'Thành phố không thể bỏ trống.'}
    # validates :district_id, presence: {message: 'Quận không thể bỏ trống.'}
    # validates :address_number, presence: {message: 'Địa chỉ không thể bỏ trống.'}
    # validates :contact_mobile, presence: {message: 'Di động không thể bỏ trống.'}

    # #Length
    # validates :title, length: {minimum:30, maximum:99, 
    #     message: 'Tiêu đề phải có độ dài tối thiểu 30 ký tự và tối đa 99 ký tự.'}
    # validates :description, length: {minimum:30, maximum:3000,
    #     message: 'Mô tả phải có độ dài tối thiểu 30 ký tự và tối đa 3000 ký tự.'}
    # validates :address_number,length: {maximum:200,
    #     message: 'Địa chỉ có độ dài tối đa 200 ký tự.'}
    # validates :furniture, length: {maximum:200, allow_blank: true,
    #     message: 'Mô tả nội thất có độ dài tối đa 200 ký tự.'}  
    # validates :contact_address, length: {maximum:200, allow_blank: true,
    #     message: 'Địa chỉ liên hệ có độ dài tối đa 200 ký tự.'}    
    #     #Format
    # validates :contact_mobile, length: {minimum:10, maximum:11,
    #     message: 'Di động phải có độ dài tối thiểu 10 ký tự và tối đa 11 ký tự.'}, 
    # format: {with: /\d{10,11}/, message: "Số di động không đúng."}
    # validates :contact_phone, length: {minimum:10, maximum:11,
    #     message: 'Điện thoại phải có độ dài tối thiểu 10 ký tự và tối đa 11 ký tự.'},  
    # format: {with: /\d{10,11}\z/, message: 'Số điện thoại không đúng.'}, allow_blank:true
    # validates :contact_mail, allow_blank:true, 
    # length: {maximum: 100, message: 'Mail liên hệ có độ dài tối đa 100 ký tự.'}, 
    # format: { with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|biz|info))\z/i, 
    #     message: "Địa chỉ email không hợp lệ."}
    # validates :contact_name, allow_blank:true,
    # length: {maximum:200, message: 'Tên có độ dài tối đa 200 ký tự.'}, 
    # format: {with: /\A[a-zA-Z]+\z?/, message: 'Tên không hợp lệ.'}
    # validates :project, allow_blank:true,
    # length: {maximum:200, message: 'Dự án có độ dài tối đa 200 ký tự.'}, 
    # format: {with: /\A[a-zA-Z]+\z?/, message: 'Tên dự án không hợp lệ.'}
    #     #Num
    # validates :price, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999, 
    #     message: 'Giá không hợp lệ.'}
    # validates :area, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999, 
    #     message: 'Diện tích không hợp lệ.'}
    # validates :front, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999, 
    #     message: 'Mặt tiền không hợp lệ.'}
    # validates :entrance, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999,
    #     message: 'Đường vào không hợp lệ.'}
    # validates :floor, allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999,
    #     message: 'Số tầng không hợp lệ.'}
    # validates :bedroom, allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999,
    #     message: 'Số phòng ngủ không hợp lệ.'}
    # validates :toilet,allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999,
    #     message: 'Số toilet không hợp lệ.'}
    
    # protected
    # def category_id_exists
    #     begin
    #       Category.find(self.category_id)
    #     rescue ActiveRecord::RecordNotFound
    #       errors.add(:category_id, "Hình thức không tồn tại.")
    #       false
    #     end
    # end
    # def city_id_exists
    #     begin
    #       City.find(self.city_id)
    #     rescue ActiveRecord::RecordNotFound
    #       errors.add(:city_id, "Thành phố không có thật.")
    #       false
    #     end
    # end
    # def district_id_exists
    #     begin
    #       District.find(self.district_id)
    #     rescue ActiveRecord::RecordNotFound
    #       errors.add(:district_id, "Quận không có thật")
    #       false
    #     end
    # end
end

Post.import force: true