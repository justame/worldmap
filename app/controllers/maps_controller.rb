class MapsController < ApplicationController
	respond_to :html, :json
	def index
		
	end

	def show
		user_name = params[:name]
		@user = User.find_by(name: user_name)
		
		gon.user_id = @user.id
		gon.user_countries = @user.user_countries
	end

	def edit
		user_name = params[:name]
		@user = User.find_by(name: user_name)
		user = User.find_by(name: user_name)
		gon.edit = true
		user_id = user[:id]
		gon.user_id = user_id
		
		gon.user_countries = user.user_countries		
		
	end

	def create
		user_id = params[:id]
		new_country_code = params[:country_code]
		user = User.find(user_id)
		
		country_code = user.user_countries.find_by(country_code: new_country_code)
		user.user_countries.create(country_code: new_country_code) if country_code.nil?
		render nothing: true
	end

	def delete
		user_id = params[:id]
		user = User.find(user_id)
		new_country_code = params[:country_code]
		country_code = user.user_countries.find_by(country_code: new_country_code)
		country_code.destroy() unless country_code.nil?
		render nothing: true

	end
end
