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

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy

    respond_to do |f|
      f.json { render :json => {}, status: 200 }
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes(params.require(:todo).permit(:title, :completed))

    respond_to do |f|
      f.json { render :json => @todo, only: :completed, status: 200 }
    end
  end

end