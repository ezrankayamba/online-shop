import React, { useState } from "react";
import { IonContent, IonImg, IonLabel } from "@ionic/react";
import SearchableHeader from "../components/search/HeaderWithSearch";
import { addOutline } from "ionicons/icons";
const Home: React.FC = () => {
  const [q, setQ] = useState("");
  const done = (res: any) => {
    setQ(res);
  };
  const moreButtons = [{ icon: addOutline, name: "add" }];
  return (
    <>
      <SearchableHeader moreButtons={moreButtons} done={done} title="Home" />
      <IonContent className="ion-padding">
        {q && <IonLabel>Global search not implemented yet!</IonLabel>}
        <IonImg src="../assets/img/image.jpg" />
      </IonContent>
    </>
  );
};
export default Home;
