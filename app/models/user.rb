class User < ApplicationRecord
    has_many :posts
    
    has_secure_password #bảo mật mật khẩu

    validates :name, presence: { message: "Tên không được để trống." }                         

    validates :username, presence: { message: "Tên tài khoản không được để trống." },
                         length: {minimum: 6, maximum: 20, 
                         message: "Tên tài khoản phải có độ dài tối thiểu 6 ký tự và tối đa 20 ký tự."},
                         format: { with: /\A[a-zA-Z0-9]+\z?/, message: "Tên tài khoản không cho phép chứa ký tự đặc biệt."}


    validates :password, presence: { message: "Mật khẩu không được để trống." },
                         length: {minimum: 6, message: "Mật khẩu phải có độ dài từ 6 kí tự."},
                         confirmation: { message: "Xác thực mật khẩu không đúng." } 

    # validates :password_confirmation, presence: { message: "Xác thực mật khẩu không được để trống." } 

    validates :email, presence: { message: "Địa chỉ email không được để trống." },
                      format: { with: /\A[\w]([^@\s,;]+)@(([\w-]+\.)+(com|edu|org|net|gov|mil|vn|info))\z/i,
                                message: "Địa chỉ email không hợp lệ." }

    validates :phone, presence: { message: "Số điện thoại di động không được để trống." },
                      format: { with: /\A[0]\d{9,10}\z/,
                                message: "Số điện thoại không đúng. Độ dài tối thiểu là 10 số." }
end
