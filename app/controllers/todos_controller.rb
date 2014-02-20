class TodosController < ApplicationController
  
  def index
    @todos = Todo.all
    respond_to do |f|
      f.html
      f.json { render :json => @todos, only: [:id, :title, :completed] }
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
  def delete
    @todo = Todo.find(params[:id])
    @todo.delete
    respond_to do |f|
      #f.html
      f.json { render :json => @todo, status: 200 }
    end
  end

  # Fill in update
  def update
    @todo = Todo.find(params[:id])
    update_params = params.require(:todo).permit(:completed)
    @todo.update_attributes(update_params)
    respond_to do |f|
      #f.html
      f.json { render :json => @todo, only: [:id, :title, :completed], :status => 200 }
    end
  end

end
