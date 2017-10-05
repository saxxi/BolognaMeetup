class UserChannel < ApplicationCable::Channel

  def subscribed
    UserAuthLogger.track_login current_user.id.to_s
    stream_from channel
  end

  def track_preference(data)
    return unless data && data['topics'].present?
    current_user.save_preferences data['topics'].split(',')
  end

  def unsubscribed
    UserAuthLogger.track_logout current_user.id.to_s
  end

  private

  def channel
    "user_#{current_user.id.to_s}"
  end

end
