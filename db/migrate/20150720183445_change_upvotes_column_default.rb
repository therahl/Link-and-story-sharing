class ChangeUpvotesColumnDefault < ActiveRecord::Migration
  def change
    change_column_default :comments, :upvotes, 0
  end
end
