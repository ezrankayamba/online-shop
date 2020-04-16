import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import SideToggle from "../components/SideToggle";
import { addCircle } from "ionicons/icons";
import SearchableHeader from "../components/search/HeaderWithSearch";
const Finances: React.FC = () => {
  const [q, setQ] = useState("");
  const done = (res: any) => {
    setQ(res);
  };
  const contribs = [
    { name: "Kiwanja cha mchungaji", target: 6000000, paid: 4000000 },
    { name: "CMF May 2020", target: 4000000, paid: 1000000 },
  ];
  return (
    <>
      <SearchableHeader done={done} title="Finances" />
      <IonContent className="ion-padding">
        {q && <IonLabel>Global search not implemented yet</IonLabel>}
        <IonList lines="full">
          {contribs.map((c) => (
            <IonItem key={c.name} detail>
              <IonLabel>
                <IonText>{c.name}</IonText>
                <p>
                  {c.paid} / {c.target}
                </p>
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
export default Finances;
