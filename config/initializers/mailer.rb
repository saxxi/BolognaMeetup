Rails.application.config.action_mailer.delivery_method = :smtp
Rails.application.config.action_mailer.smtp_settings = {
  address: 'smtp.gmail.com',
  port: 587,
  user_name: BolognaMeetup::Application.secrets.mailer_email,
  password: BolognaMeetup::Application.secrets.mailer_pwd,
  authentication: 'plain',
  enable_starttls_auto: true,
}
