import React from "react"; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import LiveFeed from "./pages/LiveFeed";
import Admin from "./pages/Admin";
import { DataContextProvider } from "./components/store/DataContext";
import { QueryContextProvider } from "./components/store/QueryContext";
import {Helmet} from "react-helmet";
import classes from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
        <Helmet>
          <link rel="icon" href="/favicon.ico?v=1.2" />
          <title>Sensor Dash</title>
          <meta name="title" content="Sensor Dashboard" />
          <meta name="description" content="The device uses onboard sensors to collect data and upload it to mongoDB database, which can be accessed by this frontend react web app." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ad-sensor-dash.heorkuapp.com/" />
          <meta property="og:title" content="Sensor Dashboard" />
          <meta property="og:description" content="The device uses onboard sensors to collect data and upload it to mongoDB database, which can be accessed by this frontend react web app." />
          <meta property="og:image" content="https://ad-sensor-dash.herokuapp.com/metaImage.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ad-sensor-dash.herokuapp.com/" />
          <meta property="twitter:title" content="Sensor Dashboard" />
          <meta property="twitter:description" content="The device uses onboard sensors to collect data and upload it to mongoDB database, which can be accessed by this frontend react web app." />
          <meta property="twitter:image" content="https://ad-sensor-dash.herokuapp.com/metaImage.png"/>

          <link rel="apple-touch-icon" href="https://ad-sensor-dash.herokuapp.com/appleicon.png" />


        </Helmet>
      <Layout>
        <QueryContextProvider>
          <DataContextProvider>
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
                <h2 className={classes.notFound}>404 Page Not Found</h2>
              </Route>
            </Switch>
          </DataContextProvider>
        </QueryContextProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
