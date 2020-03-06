import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
/* import Muffan from "./pages/Muffan"; */
import EndingPage from "./pages/EndingPage";
import QuizPage from "./pages/QuizPage";
import BGM from "./components/BGM";
import Cookies from "universal-cookie";

const App: React.FC = () => {
  const cookies = new Cookies();
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var c = new Date(year + 1, month, day);
  if (cookies.get("cookie") == null) {
    cookies.set("cookie", "0", { maxAge: 31536000, expires: c });
  }
  return (
    <>
      <BGM />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ending" component={EndingPage} />
          {/* <Route exact path="/fssssss" component={Muffan} /> */}
          <Route default component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
