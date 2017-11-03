class CreateIntervalTable < ActiveRecord::Migration[5.1]
  def change
    create_table :intervals do |t|
      t.integer :user_id
      t.integer :mapped_id
      t.timestamps
    end

    add_index :intervals, :user_id
    add_index :intervals, [:user_id, :mapped_id], unique: true
  end

end
