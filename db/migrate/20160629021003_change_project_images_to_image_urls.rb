class ChangeProjectImagesToImageUrls < ActiveRecord::Migration
  def change
    remove_column :projects, :images, :string
    add_column :projects, :image_url, :string
  end
end
