import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BooksList from './components/BooksList';
import InputBook from './components/InputBook';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BooksList />
          <InputBook />
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
