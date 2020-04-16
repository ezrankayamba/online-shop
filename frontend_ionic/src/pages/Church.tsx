import React, { useState } from "react";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import SearchableHeader from "../components/search/HeaderWithSearch";
const Church: React.FC = () => {
  const [q, setQ] = useState("");
  const done = (res: any) => {
    setQ(res);
  };
  const members = [
    {
      name: "Theodor Zani",
      cell: "Furaha",
    },
    {
      name: "Ezra Nkayamba",
      cell: "Furaha",
    },
    {
      name: "Felis Chengula",
      cell: "Tumaini",
    },
    {
      name: "Mama Mwakanyamale",
      cell: "Upendo",
    },
  ];

  return (
    <>
      <SearchableHeader done={done} title="Church" />
      <IonContent className="ion-padding">
        {q && <IonLabel>Global search not implemented yet</IonLabel>}
        <IonList lines="full">
          {members.map((m) => (
            <IonItem key={m.name} detail>
              <IonLabel>
                <IonText>{m.name}</IonText>
                <p>{m.cell}</p>
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
export default Church;
