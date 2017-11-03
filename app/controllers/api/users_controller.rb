class Api::UsersController < ApplicationController


  def index
    @users = User.all
    render :index
  end

  def show
    user = User.find_by(name: user_params[:user][:name])
    user_mapped_ids = user.intervals.map {|int| int.mapped_id}
    @user_intervals = {}
    user_mapped_ids.each do |mapped_id|
      timestamp = user.user_intervals[mapped_id]["ts"]
      @user_intervals[timestamp] = mapped_id
    end
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :mapped_id)
  end

end
