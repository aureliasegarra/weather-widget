import Widget from '../Widget/index';
import './App.scss';


function App() {
  return (
    <div className="app">
      <h1 className="title">Weather Widget <span>...</span></h1>
      <Widget city='Paris' zipcode={75000} />
    </div>
  );
}

export default App;
