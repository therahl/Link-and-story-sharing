class Comment < ActiveRecord::Base
  belongs_to :post

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
