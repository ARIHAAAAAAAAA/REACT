import { useCounter } from '../custom Hooks/Hooks';

function ClickCounter() {
  const { count: blueCount,increment:blueIncrement } = useCounter();
  const { count: greenCount,increment:greenIncrement } = useCounter();

  return (
    <div>
      <h1>Button Click Counter</h1>
      <button style={{ backgroundColor: 'blue' }} onClick={blueIncrement}>
        Blue Button
      </button>
      <p>Blue Button Clicks: {blueCount}</p>

      <button style={{ backgroundColor: 'green' }} onClick={greenIncrement}>
        Green Button
      </button>
      <p>Green Button Clicks: {greenCount}</p>
    </div>
  );
}

export default ClickCounter;
