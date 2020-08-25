class RemovePlayerIdFromActivity < ActiveRecord::Migration[6.0]
  def change
    remove_column :activities, :player_id, :integer
  end
end
