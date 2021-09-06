import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import LiveFeed from "./pages/LiveFeed";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <LiveFeed />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <div>Not Found</div>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
