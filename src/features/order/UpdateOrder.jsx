import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === 'loading';

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isLoading}>
        {isLoading ? 'Setting priority' : 'Make priority'}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};
