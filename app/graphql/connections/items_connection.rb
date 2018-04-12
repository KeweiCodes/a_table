Connections::ItemsConnection = Types::ItemType.define_connection do
  name 'ItemsConnection'

  field :total_count do
    type types.Int

    resolve ->(obj, _args, _ctx) {
      obj.nodes.count
    }
  end
end