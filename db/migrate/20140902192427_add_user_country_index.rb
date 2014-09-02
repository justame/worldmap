class AddUserCountryIndex < ActiveRecord::Migration
  def change
  	add_index :user_countries, [:user_id, :country_code]
  end
end
