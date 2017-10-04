class CreateEventFilters < ActiveRecord::Migration[5.1]
  def change
    create_table :event_filters, id: :uuid do |t|
      t.references :user, type: :uuid, foreign_key: true
      t.string :query

      t.timestamps
    end
  end
end
