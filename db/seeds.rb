# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times do
  username = Faker::Internet.user_name
  email = Faker::Internet.free_email
  password = 'password'
  user = User.create(username: username, email: email, password: password, password_confirmation: password)
end

10.times do
  users = User.all.to_a.shuffle
  user = users.shift
  title = Faker::Lorem.sentence
  description = Faker::Lorem.paragraph(5,true,4)
  upvotes = rand(1..25)
  post = Post.create(upvotes: upvotes, title: title, description: description, user_id: user.id)
end

Post.all.each do |post|
    users = User.all.shuffle
  rand(3..7).times do
    user = users.shift
    body = Faker::Hacker.say_something_smart
    upvotes = rand(1..25)
    comment = post.comments.create(body: body, user_id: user.id, upvotes: upvotes)
  end
end
