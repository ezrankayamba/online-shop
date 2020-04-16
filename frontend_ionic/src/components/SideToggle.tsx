import { useContext } from "react";
import { IonButtons, IonIcon, IonButton, IonMenuButton } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { SimpleStore } from "./SimpleStore";
import React from "react";
import Platforms from "../__helpers/Platforms";

const SideToggle: React.FC = () => {
  const { toggleSide } = useContext(SimpleStore);
  const display = !Platforms.isMobile();
  return display ? (
    <IonButtons slot="start" className="hide-">
      <IonButton onClick={() => toggleSide()}>
        <IonIcon size="large" icon={menuOutline} />
      </IonButton>
    </IonButtons>
  ) : (
    <IonButtons slot="start">
      <IonMenuButton />
    </IonButtons>
  );
};
export default SideToggle;
