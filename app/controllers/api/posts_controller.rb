class Api::PostsController < ApplicationController
    def index
    @posts = User.find(params[:user_id]).posts
    @posts = City.find(params[:city_id]).posts
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

# dont know if i needed to put a .create command for both user AND city since post belongs to both.

  def create
    @user = User.find(params[:user_id])
    @user = City.find(params[:city_id])
    #dont know if we need line 19---------
    @post = @city.posts.create(post_params)
    #dont know if we need line 19---------
    @post = @user.posts.create(post_params)
    render json: @post
  end

  def update
    @post= Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id]).destroy
    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
