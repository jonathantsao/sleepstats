# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Interval.destroy_all

user_one = User.create!(name: "user_one", url: "https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json");
user_two = User.create!(name: "user_two", url: "https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json");
user_three = User.create!(name: "user_three", url: "https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json");
