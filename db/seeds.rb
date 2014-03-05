# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create([{title: "Walk the dog", description: "Don't forget to bring bags"}, 
  {title: "Buy eggs", description: "Go on Friday for the sale" }, 
  {title: "Listen to One Republic", description: "Play it loud"}])