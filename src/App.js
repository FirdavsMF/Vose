import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

import Footer from './components/footer/Footer';
import Header from './components/header/Header';


import Home from './pages/Home';
import Layouts from './pages/Layouts';
import Objects from './pages/Objects'
import About from './components/about/About';

function App() {
  return (
    <Router
      basename="#"
    >
      <Header />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/objects" exact component={Objects} />
          <Route path="/about" exact component={About} />
          <Route path="/test" exact component={Layouts} />
          {/* <Route path='/404' component={NotFound} />
          <Route path="*" component={NotFound} status={404} /> */}
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
