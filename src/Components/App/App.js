import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import BoardApp from "../ChessNotationApp/BoardApp/BoardApp";
import SecondRoute from "../SecondRoute/SecondRoute";
import ThirdRoute from "../ThirdRoute/ThirdRoute";

export default function App() {

    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/notation">Chess Notation</Link>
                </li>
                <li>
                  <Link to="/second">Second Page</Link>
                </li>
                <li>
                  <Link to="/third">Third Page</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/notation">
                <BoardApp />
              </Route>
              <Route path="/second">
                <SecondRoute />
              </Route>
              <Route path="/third">
                <ThirdRoute />
              </Route>
            </Switch>
          </div>
        </Router>
      );



    /*return(
        <div className="app">
            <BoardApp />
        </div>
    );*/
}