import logo from './logo.svg';
import './App.css';

function App() {
  // const name = undefined;
  const name = '지인';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '16px',
  };

  return (
    <div>
      <div className="react">
        {/* {name === "지인" ? <h1>지인아 안녕!</h1> : null} */}
        {/* {name === "지인" && <h1>지인아 안녕!</h1>} */}
        {name || '지인'}
      </div>
      <input />
    </div>
  );
}

export default App;
