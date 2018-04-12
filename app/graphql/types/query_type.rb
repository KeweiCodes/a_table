Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'Root Query'

  connection :items, Connections::ItemsConnection do
    description 'A list of all the items'

    argument :subscription_id, types.String, 'Filter by speciic subscription ID'
    argument :min_cost, types.Int, 'Filter by the minimum cost'
    argument :max_cost, types.Int, 'Filter by the maximum cost'
    argument :min_time, types.String, 'Filter by the earliest time'
    argument :max_time, types.String, 'Filter by the latest time'
    argument :order_by, types.String, 'Column to order the results by', default_value: 'id'

    resolve ->(object, args, ctx){
      scope = Item.all
      scope = scope.where(subscription_id: args[:subscription_id]) if args[:subscription_id]
      scope = scope.where('cost >= ?', args[:min_cost]) if args[:min_cost]
      scope = scope.where('cost <= ?', args[:max_cost]) if args[:max_cost]
      scope = scope.where('end_time >= ?', args[:min_time]) if args[:min_time]
      scope = scope.where('start_time >= ?', args[:max_time]) if args[:max_time]
      scope = scope.order(args[:order_by]) if args[:order_by]
      scope
    }
  end
end
