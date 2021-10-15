import React, { useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import GetQoute from "./Pages/GetQoute";
import NotFound from "./Pages/NotFound";
import { changeLanguage } from "redux-multilanguage";
import TourismTransportation from "./Pages/TourismTransportation";
import CongressMeetingOrganization from "./Pages/CongressMeetingOrganization";
import FleetLeasing from "./Pages/FleetLeasing";
import Vip from "./Pages/Vip";
import Services from "./Pages/Services";

const App = (props) => {
  props.dispatch(
    loadLanguages({
      languages: {
        tr: require("./Translations/turkce.json"),
        en: require("./Translations/english.json"),
      },
    })
  );
  props.dispatch(changeLanguage("en"));

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hakkimizda" component={About} />
        <Route exact path="/iletisim" component={Contact} />
        <Route exact path="/teklifAl" component={GetQoute} />
        <Route exact path="/hizmetlerimiz" component={Services} />
        <Route
          exact
          path="/turizm-tasimacilik"
          component={TourismTransportation}
        />
        <Route
          exact
          path="/kongre-toplanti-organizasyon"
          component={CongressMeetingOrganization}
        />
        <Route exact path="/filo-kiralama" component={FleetLeasing} />
        <Route exact path="/vip" component={Vip} />
        <Route exact path="/404" component={NotFound} />
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
