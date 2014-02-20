class TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |f|
      f.html
      f.json { render :json => @todos, only: [:id, :title, :completed]}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:title, :completed)
    @todo = Todo.create(todo_params)

    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end

  # Fill in destroy
  def destroy
    @todo = Todo.find(params[:id])
    @todo.delete
    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end

  # Fill in update
  def update
    binding.pry
    todo_params = params[:id], params[:completed]
    @todo = Todo.find(params[:id])
    @todo.update_attributes()
    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end
end
