import { IonButton, IonIcon, IonSearchbar } from "@ionic/react";
import React from "react";
import { arrowBackOutline } from "ionicons/icons";
import "./Search.css";
interface SearchbarProps {
  done: (res: any) => void;
  close: () => void;
}
const Searchbar = ({ done, close }: SearchbarProps) => {
  return (
    <>
      <IonButton slot="start" onClick={close} fill="clear">
        <IonIcon icon={arrowBackOutline} />
      </IonButton>
      <IonSearchbar
        onIonChange={(e) => done(e.detail.value!)}
        animated
      ></IonSearchbar>
    </>
  );
};
export default Searchbar;
