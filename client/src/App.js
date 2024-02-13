import './App.css';
import MyComponent from './MyComponent1';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <h1>Start React!</h1>
        <MyComponent name={"이나경"} age={26} />
        <img src={logo} className="App-logo"></img>
    </div>
  );
}

export default App;
