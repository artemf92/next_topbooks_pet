import { getMenu } from "@/api/menu";
import { MenuItem } from "@/interfaces/menu.props";
import { createContext, PropsWithChildren, ProviderProps, useState } from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: number;
  setMenu?: (newMenu: MenuItem[]) => void;
};

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: 0});

export const AppContextProvider = async ({menu, firstCategory ,children}: PropsWithChildren<IAppContext>): Promise<JSX.Element> => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{menu: menuState, firstCategory: 0, setMenu}} >
      {children}
    </AppContext.Provider>
  );

};