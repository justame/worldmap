class CreateUserCountries < ActiveRecord::Migration
  def change
    create_table :user_countries do |t|
    	t.integer :user_id
    	t.string :country_code
      t.timestamps
    end
  end
end
