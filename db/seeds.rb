# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.delete_all
Todo.create([
  {title: "Walk the dog", description: "Dog needs walking. Take him to the park."},
  {title: "Buy eggs", completed: "true", description: "Gonna make a cake. Be sure to get some eggs."}, 
  {title: "Listen to One Republic", description: "Hmmm. I don't know about this one. May skip it."}
])
