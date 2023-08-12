import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Todo from "./components/Todo";
import DietPlan from "./components/DietPlan";
import HealthProfile from "./components/HealthProfile";
import ConsultDoctor from "./components/ConsultDoctor";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/diet-plan" component={DietPlan} />
      <Route exact path="/health-profile" component={HealthProfile} />
      <Route exact path="/consult-doctor" component={ConsultDoctor} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
