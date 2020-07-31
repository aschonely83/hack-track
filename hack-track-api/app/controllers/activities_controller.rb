class ActivitiesController < ApplicationController
  
  def index
    activities = Activity.all 
    render json: ActivitySerializer.new(activities)
  end
    
  def show
    activity = Activity.find(params[:id])
    render json: ActivitySerializer.new(activity)
  end

  def create
    activity = Activity.new(activity_params)
    if activity.save
      render json: ActivitySerializer.new(activity), status: :accepted
    else
      render json: {errors: activity.errors.full_messages}, status: :unprocessible_entity 
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:tee_time, :hole_numb, :tee_marker, :par, :score, :player_id, :course_id)
  end
end
