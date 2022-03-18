import { createContext, useState } from "react";
import React from "react";

export const NavigationContext = createContext();

function NavigationContextProvider(props) {
  const [screen, setScreen] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ screen, setScreen, open, setOpen }}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationContextProvider;
