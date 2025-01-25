The solution involves using the `useLocation` hook to get the full location object and then extracting the necessary parameters from it. This provides a way to ensure that you have access to the up-to-date parameters from the URL, including those passed down from parent routes.  This approach circumvents the limitations of `useParams` in nested route scenarios.

```jsx
import { useLocation, useParams } from 'react-router-dom';

function ChildRoute() {
  const { id } = useParams();
  const location = useLocation();
  const parentParam = new URLSearchParams(location.search).get('parentParam');

  return (
    <div>
      <h2>Child Route</h2>
      <p>Child ID: {id}</p>      
      <p>Parent Parameter (from useLocation): {parentParam}</p>
    </div>
  );
}

export default ChildRoute;
```