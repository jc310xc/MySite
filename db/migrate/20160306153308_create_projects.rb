class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :role
      t.string :tech
      t.string :images

      t.timestamps null: false
    end
  end
end
