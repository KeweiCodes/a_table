class ChangeIdToInt < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :id, 'integer USING CAST(id AS integer)'
  end
end
