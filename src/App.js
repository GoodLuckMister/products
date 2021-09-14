import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Container from './components/Container';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/product/:id" component={Product} />
        <Route exact path="/" component={Container} />
      </Switch>
    </div>
  );
}
