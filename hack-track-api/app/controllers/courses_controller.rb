class CoursesController < ApplicationController

  def index
    courses = Course.all 
    render json: CourseSerializer.new(courses)
  end

  def show
    course = Course.find(params[:id])
    render json: CourseSerializer.new(activity)
  end
end
