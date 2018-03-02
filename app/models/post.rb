class Post < ApplicationRecord
    belongs_to :user
    has_many :images

    validate :category_id_exists
    validate :city_id_exists
    validate :district_id_exists
    
    #Attributes can not be blank
    validates :title, :description, :category_id, :city_id, :district_id, :address_number, :contact_mobile, 
        presence: true
    #Title
    validates :title, length: {minimum:30, maximum:99}
    #Description of post
    validates :description, length: {minimum:50, maximum:3000}
    #Address
    validates :address_number,length: {maximum:200}
    #Phone
    validates :contact_mobile, length: {minimum:10, maximum:14}, format: {with: /\d[0-9]\)*\z/}

    #Can be blank
    validates :furniture, :contact_address, length: {maximum:200, allow_blank: true}    
    validates :contact_phone, length: {minimum:10, maximum:14,}, format: {with: /\d[0-9]\)*\z/}, allow_blank:true
    validates :price, :area, :front, :entrance, 
        allow_blank:true, numericality: {only_float: true, greater_than: 0, less_than_or_equal_to: 999999}
    validates :floor, :bedroom, :toilet,
        allow_blank:true, numericality: {only_integer: true, greater_than:0, less_than_or_equal_to: 999}
    validates :contact_name, allow_blank:true ,length: {maximum:200}, format: {with: /\A[a-zA-Z]+\z?/}
    validates :contact_mail, 
        allow_blank:true, length: {maximum: 100}, format: { with:  /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|biz|info))\z/i}
    
    protected
    def category_id_exists
        begin
          Category.find(self.category_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:category_id, "category_id foreign key must exist")
          false
        end
    end
    def city_id_exists
        begin
          City.find(self.city_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:city_id, "city_id foreign key must exist")
          false
        end
    end
    def district_id_exists
        begin
          District.find(self.district_id)
        rescue ActiveRecord::RecordNotFound
          errors.add(:district_id, "district_id foreign key must exist")
          false
        end
    end
end
