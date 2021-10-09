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
import News from "./Pages/News";
import NotFound from "./Pages/NotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          tr: require("./Translations/turkce.json"),
          en: require("./Translations/english.json"),
        },
      })
    );
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hakkimizda" component={About} />
        <Route exact path="/iletisim" component={Contact} />
        <Route exact path="/teklifAl" component={GetQoute} />
        <Route exact path="/haberler" component={News} />
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
