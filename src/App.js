import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Statistics from './Statistics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavigationBar />
    <Layout>
    <Router>
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </Layout>
    <Footer />
  </>
  );
}

export default App;
