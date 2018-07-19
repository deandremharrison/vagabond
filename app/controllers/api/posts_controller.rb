class Api::PostsController < ApplicationController

    def parent_finder
        if params[:user_id].class == String
            @target = User.find(params[:user_id])
        else
            @target = City.find(params[:city_id])
        end
        @target
    end

    def index
        @posts = parent_finder.posts
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
        parent_finder.posts.create(post_params)
        render status: :ok
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
    params.require(:post).permit(:title, :body, :user_id)
    end
end
