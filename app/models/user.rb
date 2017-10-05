class User < ApplicationRecord

  has_many :event_filters

  def id_list(except_ids: [])
    where('id NOT IN (?)', except_ids).pluck :id
  end

  def save_preferences(topics)
    puts "User likes: #{topics}"
  end

end
