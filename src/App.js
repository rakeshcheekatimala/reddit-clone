import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Posts, PostDetails } from './pages';

function App({ history }) {
  return (
    <Router>
      <Switch>
        <Route path="/postdetails/:detail">
          <PostDetails />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
