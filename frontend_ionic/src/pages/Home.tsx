import React, { useState } from "react";
import {
  IonContent,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonTitle,
} from "@ionic/react";
import SearchableHeader from "../components/search/HeaderWithSearch";
import { cartOutline, personCircleOutline } from "ionicons/icons";
import { Route, Redirect, Switch } from "react-router";
import { IonReactRouter } from "@ionic/react-router";
const Tab1: React.FC = () => {
  return <p>Tab...1</p>;
};
const Tab2: React.FC = () => {
  return (
    <IonContent>
      <h1>Tab ..2</h1>
    </IonContent>
  );
};

const Home: React.FC = ({ location }: any) => {
  const path = location.pathname;
  const [q, setQ] = useState("");
  const done = (res: any) => {
    setQ(res);
  };
  const moreButtons = [
    { icon: cartOutline, name: "cart" },
    { icon: personCircleOutline, name: "profile" },
  ];
  return (
    <>
      <SearchableHeader moreButtons={moreButtons} done={done} title="eShop" />
      <IonContent className="ion-padding">
        {q && <IonLabel>Global search not implemented yet!</IonLabel>}
        <IonReactRouter>
          <IonTabs>
            <IonTabBar slot="top" color="light">
              <IonTabButton tab="tab1" href={`${path}/tab1`} mode="md">
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="tab2" href={`${path}/tab2`}>
                <IonLabel>Category</IonLabel>
              </IonTabButton>
            </IonTabBar>
            <IonRouterOutlet>
              <IonContent className="ion-padding">
                <Switch>
                  <Route
                    path={`${path}/:tab(tab1)`}
                    component={Tab1}
                    exact={true}
                  />
                  <Route
                    path={`${path}/:tab(tab2)`}
                    component={Tab2}
                    exact={true}
                  />
                  <Route render={() => <Redirect to={`${path}/tab1`} />} />
                </Switch>
              </IonContent>
            </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </>
  );
};
export default Home;
