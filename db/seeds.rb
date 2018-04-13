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