class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events, id: :uuid do |t|
      t.string :name
      t.date :evt_date
      t.string :place
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
