class AddItemsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :items, { id: false } do |t|
      t.string :id
      t.string :cost
      t.string :subscription_id
      t.datetime :start_time
      t.datetime :end_time
      t.string :resource_name
      t.string :resource_type
      t.string :resource_group

      t.timestamps
    end
  end
end
