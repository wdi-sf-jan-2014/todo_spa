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
    @todo.destroy

    respond_to do |f|
      f.html { redirect_to todos_path }
      f.json { render :json => {}, status: 200}
    end
  end

  # Fill in update
  def update
    todo_params = params.permit(:title, :completed)
      @todo = Todo.create(todo_params)

      respond_to do |f|
      f.html
      f.json { render :json => @todo, only: [:id, :title, :completed] }

    end
  end
end



    # url = params.require(:site)[:url]
    # @site = Site.create(url: url)
    # LinksWorker.perform_async(@site.id)
    # respond_to do |f|
    #   f.html { redirect_to site_path(@site) }
    #   f.json { render :json => @site }
    # end