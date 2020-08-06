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
    if params[:course_id] && params[:player_id]
      player = Player.find(params[:player_id])
      course = Course.find(params[:course_id])
      activity = course.activities.build(activity_params)
      #binding.pry
      if activity.save
        render json: ActivitySerializer.new(activity)
      end
    end
  end

  private

  def activity_params
    params.permit(:tee_time, :hole_numb, :tee_marker, :par, :score, :course_id, :player_id)
  end
end
