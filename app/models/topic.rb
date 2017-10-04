class Topic < ApplicationRecord

  has_and_belongs_to_many :events

  scope :as_list, -> { select("id, name as text") }

  validates_presence_of :name

  def to_builder
    Jbuilder.new do |json|
      json.(self, :id, :name)
    end
  end

end
