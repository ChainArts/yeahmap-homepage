import "./App.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Navbar from "./components/navbar";
import AppHero from "./components/app-hero";
import Home from "./components/home";
import About from "./components/about";
import Submit from "./components/submit";
import Socials from "./components/socials";



function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <SimpleBar  autoHide={false} scrollbarMaxSize={300} style={{maxHeight:"100%"}}>
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
            </SimpleBar>
        </Router>            
    </div>
  );
}

export default App;
