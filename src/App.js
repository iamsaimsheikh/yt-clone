import React from "react";
import "./App.css";
import Main from "./components/templates/main/Main";
import NavigationContextProvider from "./contexts/NavigationContext";
import VideoContextProvider from "./contexts/VideoContext";
import SearchContextProvider from "./contexts/SearchContext";

function App() {
  return (
    <div className="App">
      <NavigationContextProvider>
        <VideoContextProvider>
          <SearchContextProvider>
            <Main />
          </SearchContextProvider>
        </VideoContextProvider>
      </NavigationContextProvider>
    </div>
  );
}

export default App;
