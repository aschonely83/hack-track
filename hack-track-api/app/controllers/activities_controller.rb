class ActivitiesController < ApplicationController
  
  def index
    activities = Activity.all 
    render json: ActivitySerializer.new(activities)
  end
    
  def show
    activity = Activity.find(params[:id])
    options = {
      include: [:player, :course]
    }
    render json: ActivitySerializer.new(activity, options)
  end
end
