import { useState } from 'react';
import './App.scss';

function App() {
  const steps = [1, 2, 3, 4];
  const [current, setCurrent] = useState(1);
  const progressbar = ((current - 1) / (steps.length - 1)) * 100;

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" style={{ width: `${progressbar}%` }} />
        {steps.length > 0 &&
          steps.map((step) => (
            <div
              key={step}
              className={`circle${step <= current ? ' active' : ''}`}
            >
              {step}
            </div>
          ))}
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => setCurrent((current) => current - 1)}
        disabled={current < 2}
      >
        Prev
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => setCurrent((current) => current + 1)}
        disabled={current > steps.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default App;
