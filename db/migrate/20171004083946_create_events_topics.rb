class CreateEventsTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :events_topics, id: :uuid do |t|
      t.references :event, foreign_key: true, type: :uuid
      t.references :topic, foreign_key: true, type: :uuid
    end
  end
end
