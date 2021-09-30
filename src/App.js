import './styles/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import InputBook from './components/InputBook';
import BooksList from './components/BooksList';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <BooksList />
            <div className="line" />
            <InputBook />
          </div>
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
