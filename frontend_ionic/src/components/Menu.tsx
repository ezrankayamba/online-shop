import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  cashOutline,
  cashSharp,
  homeOutline,
  homeSharp,
  documentOutline,
  documentSharp,
  walkOutline,
  walkSharp,
  peopleOutline,
  peopleSharp,
} from "ionicons/icons";
import "./Menu.css";
import { SimpleStore } from "./SimpleStore";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Cell Groups",
    url: "/page/cell-groups",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "Church",
    url: "/page/church",
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: "Finances",
    url: "/page/finances",
    iosIcon: cashOutline,
    mdIcon: cashSharp,
  },
  {
    title: "Visitors",
    url: "/page/visitors",
    iosIcon: walkOutline,
    mdIcon: walkSharp,
  },
];

// const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const context = useContext(SimpleStore);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-list">
          <IonListHeader>Makoka TAG</IonListHeader>
          <IonNote>ezrankayamba</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    context.selectedPage === appPage.title ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
