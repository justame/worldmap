class RemoveBadIndex < ActiveRecord::Migration
  def change
  	remove_index :user_countries, :country_code

  end
end
