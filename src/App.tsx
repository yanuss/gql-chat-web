import React from "react";
import Page from "./components/Page/Page";
import { Router } from "@reach/router";
import About from "./pages/about";
import Home from "./pages/home";
import Page404 from "./pages/404";

const App: React.FC = () => {
  return (
    <div>
      <Page>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Page404 default />
        </Router>
      </Page>
    </div>
  );
};

export default App;

// const RouterPage = (
//   props: { pageComponent: JSX.Element } & RouteComponentProps
// ) => props.pageComponent;
