class UsersController < ApplicationController
  def index
  end
  def show
    user = User.find(params[:id])
    posts = Post.where(user_id: user.id)
    comments = Comment.where(user_id: user.id)
    posts = [posts,comments]
    render json: posts
  end
end
