import gql from 'graphql-tag';

const GET_ITEMS = gql`
    query GetItems(
      $subscription_id: [String],
      $min_cost: Float,
      $max_cost: Float,
      $min_time: String,
      $max_time: String,
      $order_by: String = "id asc",
      $first: Int,
      $last: Int,
      $before: String,
      $after: String,
      $unique_by: String
    ) {
      items(
        subscription_id: $subscription_id,
        min_cost: $min_cost,
        max_cost: $max_cost,
        min_time: $min_time,
        max_time: $max_time,
        order_by: $order_by,
        first: $first,
        last: $last,
        before: $before,
        after: $after,
        unique_by: $unique_by
      ){
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id,
            subscription_id,
            cost
          }
        }
        total_count
      }
    }
  `

export { GET_ITEMS }