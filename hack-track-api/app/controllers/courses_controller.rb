class CoursesController < ApplicationController

  def index
    courses = Course.all 
    render json: CourseSerializer.new(courses)
  end

  def show
    course = Course.find(params[:id])
    render json: CourseSerializer.new(course)
  end

  def create
    course = Course.create(course_params)
    if course.save
      render json: CourseSerializer.new(course)
    end
  end

  private

  def course_params
    params.permit(:name)
  end
end
