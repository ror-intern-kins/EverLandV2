require 'elasticsearch/model'
require 'elasticsearch/model'

class Post < ApplicationRecord
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    belongs_to :user
    has_many :images, dependent: :destroy
    accepts_nested_attributes_for :images

    #Check foreign key exists
    validate :category_id_exists
    validate :city_id_exists
    validate :district_id_exists
    
    #Can not be blank
    validates :title, :description, :category_id, :city_id,
        :district_id, :address_number, :contact_mobile, presence: true
    #Length
    validates :title, length: {minimum:30, maximum:99}
    validates :description, length: {minimum:30, maximum:3000}
    validates :address_number,length: {maximum:200}
    validates :furniture, length: {maximum:200, allow_blank: true}  
    validates :contact_address, length: {maximum:200, allow_blank: true}    
        #Format
    validates :contact_mobile, length: {minimum:10, maximum:11}, format: {with: /\d{10,11}/}
    validates :contact_phone, length: {minimum:10, maximum:11},  format: {with: /\d{10,11}\z/}, allow_blank:true
    validates :contact_mail, allow_blank:true, length: {maximum: 100}, 
        format: { with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|biz|info))\z/i}
    validates :contact_name, allow_blank:true, length: {maximum:200}, format: {with: /\A[a-zA-Z]+\z?/}
    validates :project, allow_blank:true, length: {maximum:200}, format: {with: /\A[a-zA-Z]+\z?/}
        #Num
    validates :price, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999}
    validates :area, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999 }
    validates :front, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999}
    validates :entrance, allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999}
    validates :floor, allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999}
    validates :bedroom, allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999}
    validates :toilet,allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999}
    
    protected
    def category_id_exists
        begin
          Category.find(self.category_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:category_id, :exit_category)
          false
        end
    end
    def city_id_exists
        begin
          City.find(self.city_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:city_id,:exit_city)
          false
        end
    end
    def district_id_exists
        begin
          District.find(self.district_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:district_id, :exit_district)
          false
        end
    end
end

# Post.import force: true