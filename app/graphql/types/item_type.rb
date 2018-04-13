Types::ItemType = GraphQL::ObjectType.define do
  name 'Item'
  description 'An item of resource'

  field :id, types.ID
  field :cost, types.Float do 
    resolve ->(object, args, ctx){
      object.cost.round(1)
    }
  end
  field :subscription_id, types.String
  field :start_time, types.String
  field :end_time, types.String
  field :resource_name, types.String
  field :resource_type, types.String
  field :resource_group, types.String
  field :created_at, types.String
  field :updated_at, types.String
end