class TodosController < ApplicationController
  def index
    @todos = Todo.all.sort
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
      id = params[:id]
      todo = Todo.find(id)
      todo.delete
      
    respond_to do |f|
      f.html {redirect_to root_path}
      f.json { render :json => todo, only: [:id, :title, :completed]}
    end
  end

  # Fill in update
  def update
    @todo = Todo.find(params[:id])
    todo_params = params.require(:todo).permit(:title, :completed)
    @todo.update_attributes(todo_params)

    respond_to do |f|
      f.html
      f.json { render :json => @todo, only: [:id, :title, :completed]}
    end
  end
end
