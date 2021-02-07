import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Posts } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/r/:name">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
