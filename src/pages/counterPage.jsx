
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setCount,} from '../app/counterSlice';
import { Stack, Button } from 'react-bootstrap';

const CounterPage = () => {
  const state = useSelector(
    (store) => store.counterReducer
  );
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <h1 className='display-4 fw-bold mb-3'>{state.counter}</h1>
      <Stack direction="horizontal" gap={3}>
        <Button
          variant="warning"
          onClick={() => dispatch(increase())}
        >
          Arttır
        </Button>
        <Button
          variant="danger"
          onClick={() => dispatch(decrease())}
        >
          Azalt
        </Button>
        <Button
          variant="dark"
          onClick={() => dispatch(setCount(0))}
        >
          Sıfırla
        </Button>
      </Stack>
    </div>
  );
};

export default CounterPage;