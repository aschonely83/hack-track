class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.integer :player_id
      t.integer :course_id
      t.string :tee_time
      t.string :hole_numb
      t.string :tee_marker
      t.string :par
      t.string :score

      t.timestamps
    end
  end
end
