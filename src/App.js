import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Submit from "./components/submit";
import Socials from "./components/socials";



function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/submit" component={Submit}/>
                <Route path="/who" component={About}/>
                <Route path="/socials" component={Socials}/>
            </Switch>
        </Router>            
    </div>
  );
}

export default App;
