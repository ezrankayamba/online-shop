import Menu from "./components/Menu";
import React, { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleStore } from "./components/SimpleStore";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Finances from "./pages/Finances";
import Church from "./pages/Church";
import Visitors from "./pages/Visitors";
import Platforms from "./__helpers/Platforms";
import CellGroups from "./pages/CellGroups";
import { CSSTransition } from "react-transition-group";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [sideOpen, setSideOpen] = useState(!Platforms.isMobile());

  const toggleSide = () => {
    setSideOpen(!sideOpen && !Platforms.isMobile());
  };

  return (
    <IonApp>
      <IonReactRouter>
        <SimpleStore.Provider
          value={{ selectedPage, setSelectedPage, toggleSide }}
        >
          <IonSplitPane contentId="main" side-max-width="200px">
            <CSSTransition classNames="sidebar" timeout={300} in={sideOpen}>
              <Menu />
            </CSSTransition>

            <IonRouterOutlet id="main">
              <Switch>
                <>
                  <IonPage>
                    <Route path="/page/home" component={Home} exact={true} />
                    <Route
                      path="/page/cell-groups"
                      component={CellGroups}
                      exact={true}
                    />
                    <Route
                      path="/page/church"
                      component={Church}
                      exact={true}
                    />
                    <Route
                      path="/page/finances"
                      component={Finances}
                      exact={true}
                    />
                    <Route
                      path="/page/visitors"
                      component={Visitors}
                      exact={true}
                    />
                    <Route
                      path="/"
                      render={() => <Redirect to="/page/home" />}
                      exact={true}
                    />
                  </IonPage>
                </>
              </Switch>
            </IonRouterOutlet>
          </IonSplitPane>
        </SimpleStore.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
