class Event < ActiveRecord::Base

  has_and_belongs_to_many :topics

  scope :as_list, -> { select("id, name as text") }

  validates_presence_of :name
  accepts_nested_attributes_for :topics
  after_save { ::NotifyUserNewEventJob.perform_now(self.id) }

  # to get started, better specific tool like eg. ElasticSearch
  scope :search, ->(params = {}) {
    q = includes(:topics)
    q = q.where("name ILIKE ?", "%#{params[:q]}%") if params[:q].present?
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
