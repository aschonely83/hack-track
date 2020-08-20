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
      render json: ActivitySerializer.new(activity)
    end
  end
  private
  
  def activity_params
    params.require(:activity).permit(:hole_numb, :score, :course_id)
  end
end
