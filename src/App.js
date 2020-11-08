import "./App.css";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Submit from "./components/pages/submit";
import Socials from "./components/pages/socials";

export const pageTransition = {duration: 0.3, ease: [.14,.8,.4,1]};
export const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: pageTransition
    },
    out: {
      opacity: 0,
      transition: pageTransition
    },
}

function App() {
    const location = useLocation();
    return (
    <div className="App">
        <ScrollToTop/>
            <Header/>
            <Navbar/>
                <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/submit" component={Submit}/>
                    <Route path="/who" component={About}/>
                    <Route path="/socials" component={Socials}/>
                </Switch>
            </AnimatePresence>         
    </div>
  );
}

export default App;
