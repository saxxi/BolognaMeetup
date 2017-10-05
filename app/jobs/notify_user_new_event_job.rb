class NotifyUserNewEventJob < ApplicationJob
  queue_as :default

  def perform(event_id)
    active_user_ids = UserAuthLogger.logged_in_user_ids
    active_user_ids.each do |user_id|
      ActionCable.server.broadcast "user_#{user_id}", new_event_id: event_id
    end

    non_active_user_ids = User.id_list except_ids: active_user_ids
    non_active_user_ids.each do |user_id|
      ::UserMailerNewEventJob.perform_now user_id
    end
  end

end
