class Event < ActiveRecord::Base

  has_and_belongs_to_many :topics

  scope :as_list, -> { select("id, name as text") }

  validates_presence_of :name

  accepts_nested_attributes_for :topics

  # to get started, better specific tool like eg. ElasticSearch
  scope :search, ->(user, params = {}) {
    if params[:q].present?
      q = q.where("name ILIKE ?", "%#{params[:q]}%")
      q = q.where("place ILIKE ?", "%#{params[:q]}%")
    end
    q = q.where("id NOT IN (?)", params[:exclude_ids]) if params[:exclude_ids].present?
    q
  }

  def to_builder
    Jbuilder.new do |json|
      json.(self, :id, :name, :place, :evt_date)
      json.start_time start_time.strftime("%H:%M:%S")
      json.end_time end_time.strftime("%H:%M:%S")
      json.topics topics.map { |t| { id: t.id, name: t.name } }
    end
  end

end
