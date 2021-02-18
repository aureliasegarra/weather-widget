import Widget from '../Widget/index';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Widget city='Paris' zipcode={75000} />
    </div>
  );
}

export default App;
