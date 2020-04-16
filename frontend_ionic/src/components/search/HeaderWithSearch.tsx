import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import Searchbar from "./Searchbar";
import SideToggle from "../SideToggle";
import { search } from "ionicons/icons";
import React, { useState } from "react";
interface MenuButton {
  icon: string;
  name: string;
}
interface SearchableHeaderProps {
  title: string;
  done: (res: any) => void;
  moreButtons?: MenuButton[];
}

const SearchableHeader = ({
  title,
  done,
  moreButtons,
}: SearchableHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <IonHeader>
      <IonToolbar>
        {showSearch ? (
          <Searchbar close={() => setShowSearch(false)} done={done}></Searchbar>
        ) : (
          <>
            <SideToggle />
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowSearch(true)}>
                <IonIcon icon={search} />
              </IonButton>
              {moreButtons &&
                moreButtons.map((b) => (
                  <IonButton key={b.name}>
                    <IonIcon icon={b.icon} />
                  </IonButton>
                ))}
            </IonButtons>
          </>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default SearchableHeader;
