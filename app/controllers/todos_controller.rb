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
    id = params.require(:id)
    @todo = Todo.find(id)
    @todo.destroy

    respond_to do |f|
      f.html { redirect_to :todos }
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end

  # Fill in update
  def update
    id = params.require(:id)
    @todo = Todo.find(id)
    @todo.update_attribute(:completed, true)

    respond_to do |f|
      f.html { redirect_to :todos }
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end
end
