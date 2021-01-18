import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage'

function App() {
  return (
    <Router>
      <div className="App">
        <MainPage />
      </div>
    </Router>
  )
  
}

export default App;
