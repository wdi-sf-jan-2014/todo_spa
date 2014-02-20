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
    Todo.find(params[:id]).destroy
    respond_to do |f|
      f.json {render :json => {}, status: 200}
    end
  end

  # Fill in update
  def update
     todo_params = params.require(:todo).permit(:title, :completed)
    @todo = Todo.find(params[:id])
    @todo.update_attributes(todo_params)

    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :title, :completed] }
    end
  end
end
