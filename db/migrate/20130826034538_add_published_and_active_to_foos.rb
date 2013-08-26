class AddPublishedAndActiveToFoos < ActiveRecord::Migration
  def change
    add_column :foos, :published, :boolean
    add_column :foos, :active, :boolean

    add_index :foos, [:published, :active]
  end
end
