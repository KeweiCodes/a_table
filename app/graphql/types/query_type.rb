Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'Root Query'

  field :items do
    type types[Types::ItemType]
    description 'A list of all the items'
    resolve ->(object, args, ctx){
      Item.all
    }
  end
end
