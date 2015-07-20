class PostsController < ApplicationController

before_filter :authenticate_user!, only: [:create, :upvote, :downvote]

def index
  render json: Post.all
end

def upvote
  post = Post.find(params[:id])
  post.increment!(:upvotes)

  render json: post
end

def downvote
  post = Post.find(params[:id])
  post.decrement!(:upvotes)

  render json: post
end

def show
  render json: Post.find(params[:id])
end

def create
  render json: Post.create(post_params.merge(user_id: current_user.id))
end

private
  def post_params
    params.require(:post).permit(:link, :title, :description)
  end
end
