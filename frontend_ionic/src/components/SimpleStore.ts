import React from "react";

export interface SimpleStoreState {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  toggleSide: () => void;
}
export const SimpleStore = React.createContext<SimpleStoreState>({
  selectedPage: "",
  setSelectedPage: () => undefined,
  toggleSide: () => undefined,
});
