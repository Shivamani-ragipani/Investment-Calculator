import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from './Components/Results.jsx';

function App() {

  const [userinput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
});

   

function HandleChange(InputIdentifier ,newvalue){
  setuserInput((prevInput) => {
   return {

       ...prevInput,
     [InputIdentifier]: +newvalue,

   };
  });

}

const InputisValid = userinput.duration >= 1;

  return (
    <>
    <Header />
    <UserInput userinput={userinput} onChange={HandleChange} />
    {InputisValid ?<Results input={userinput}/> : <p className="center"> Please Enter a Duration greater than Zero. </p>}
    </>
  );
}

export default App;
