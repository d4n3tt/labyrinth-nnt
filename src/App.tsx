import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import BGM from "./components/BGM";
import Cookies from "universal-cookie";

const App: React.FC = () => {
  const cookies = new Cookies();
  if (cookies.get("cookie") == null) {
    cookies.set("cookie", "0");
  }
  return (
    <>
      <BGM />
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/storycode" component={QuizPage} />
          <Route exact path="/sun" component={QuizPage} />
          <Route exact path="/blood" component={QuizPage} />
          <Route exact path="/bus" component={QuizPage} />
          <Route exact path="/day" component={QuizPage} />
          <Route exact path="/2" component={QuizPage} />
          <Route exact path="/me" component={QuizPage} />
          <Route default component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
