import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>
      <button type="button" className="btn" disabled>
        Prev
      </button>
      <button type="button" className="btn">
        Next
      </button>
    </div>
  );
}

export default App;
