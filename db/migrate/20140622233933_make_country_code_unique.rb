class MakeCountryCodeUnique < ActiveRecord::Migration
  def change
  	add_index :user_countries, :country_code, :unique => true
  end
end
