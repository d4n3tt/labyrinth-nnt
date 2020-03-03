import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
/* import Muffan from "./pages/Muffan"; */
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/fssssss" component={Muffan} /> */}
          <Route default component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
