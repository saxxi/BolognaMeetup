class UserMailerNewEventJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    user_ids = User.with_interests_on(event.topics).map &:id
    user_ids.each do |user_id|
      UserMailer.new_event(User.first, Event.first).deliver_later
    end
  end
end
