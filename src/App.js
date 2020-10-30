import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import AppHero from "./components/app-hero";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Submit from "./components/pages/submit";
import Socials from "./components/pages/socials";



function App() {
  return (
    <div className="App">
        <Router>
        <ScrollToTop/>
            <Header/>
            <Navbar/>
                <AppHero/>
                <main className="content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/submit" component={Submit}/>
                    <Route path="/who" component={About}/>
                    <Route path="/socials" component={Socials}/>
                </Switch>
            </main>
        </Router>            
    </div>
  );
}

export default App;
