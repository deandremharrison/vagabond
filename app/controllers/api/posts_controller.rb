class Api::PostsController < ApplicationController
    def index
    @posts = User.find(params[:user_id]).posts
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @user = User.find(params[:user_id])
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
