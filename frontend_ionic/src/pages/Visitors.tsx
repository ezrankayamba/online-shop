import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import SearchableHeader from "../components/search/HeaderWithSearch";
const Visitors: React.FC = () => {
  const [q, setQ] = useState("");
  const done = (res: any) => {
    setQ(res);
  };
  const visitors = [
    { name: "Erick Mbita", from: "Tabora" },
    { name: "Esther Albert", from: "Arusha" },
  ];
  return (
    <>
      <SearchableHeader done={done} title="Visitors" />
      <IonContent className="ion-padding">
        {q && <IonLabel>Global search not implemented yet</IonLabel>}
        <IonList lines="full">
          {visitors.map((v) => (
            <IonItem key={v.name} detail>
              <IonLabel>
                <IonText>{v.name}</IonText>
                <p>{v.from}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </>
  );
};
export default Visitors;
