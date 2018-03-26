OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, '861216357384505','64c64a7b1755d5c2bee9c738d67e0429', 
    scope: 'public_profile, email', info_fields: 'id,email,name'
    provider :google_oauth2, '795788943229-nrihb4lu0rqqhm3573gnssli3dqgmaub.apps.googleusercontent.com', 'VOO7LVIJ_QHGWZVx32b9DZx3'
end