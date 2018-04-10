# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

file = File.read './db/data.json'
data = JSON.parse(file)

items = []
data['data'].each do |item|
  items << {  id: item['id'], 
              cost: item['billable'],
              subscription_id: item['subscriptionId'],
              start_time: item['usageStartTime'],
              end_time: item['usageEndTime'],
              resource_name: item['resource']['name'],
              resource_type: item['resource']['category'],
              resource_group: %r{resourceGroups/([^/]+)/}.match(item['instanceData']['resourceUri'])[1]
            }
end

Item.create(items)