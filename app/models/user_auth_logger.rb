class UserAuthLogger # < Redis

  SET = 'logged_in'

  def self.track_login(user_id)
    # eg. Redis.add SET, current_user.id.to_s
  end

  def self.track_logout(user_id)
    # eg. Redis.srem SET, current_user.id.to_s
  end

  def self.logged_in?(user_id)
    # Redis.ismember SET, user_id
    true
  end

  def self.logged_in_user_ids
    # Redis.smembers SET
    User.pluck :id # take this from redis smembers
  end

end
