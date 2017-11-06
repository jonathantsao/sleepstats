class Api::UsersController < ApplicationController


  def index
    @users = User.all
    render :index
  end

  def show
    user = User.find(params[:id])
    @user_mapped_ids = user.intervals.map {|int| int.mapped_id}
    @user_timestamps = @user_mapped_ids.map do |mapped_id|
      user.user_intervals[mapped_id]["ts"]
    end
    render :show
  end

  def show_interval
    user = User.find(params[:id])
    mapped_id = params[:mapped_id].to_i
    @interval = user.user_intervals[mapped_id]
    render json: @interval
  end

  private

  def user_params
    params.require(:user).permit(:name, :mapped_id)
  end

end
