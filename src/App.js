import React from "react";
import LeftMenu from "./components/LeftMenu";
import Buttons from "./components/Buttons";
import Dividers from "./components/Dividers";
import Inputs from "./components/Inputs";
import Placeholders from "./components/Placeholders";
import Steps from "./components/Steps";

const App = () => (
   <div style={{width: '100vh', height: '100vh', display: 'flex'}}>
     <LeftMenu/>
     <div style={{margin: '20px'}}>
         <Buttons/>
         <Dividers/>
         <Inputs/>
         <Placeholders/>
         <Steps/>
     </div>
   </div>
)

export default App;
