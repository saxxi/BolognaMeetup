class UserMailer < ApplicationMailer

  default from: "bolognameetup@example.com"

  def new_event(user, event)
    @user = user
    @event = event
    mail(to: @user.email, subject: 'New event')
  end

end
