//import { useState } from "react";
import "./App.css";
//import helloworld_program from "../helloworld/build/main.aleo?raw";
//import { AleoWorker } from "./workers/AleoWorker";

//const aleoWorker = AleoWorker();
function App() {
  /*
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState(null);
  const [executing, setExecuting] = useState(false);
  const [deploying, setDeploying] = useState(false);

  const generateAccount = async () => {
    const key = await aleoWorker.getPrivateKey();
    setAccount(await key.to_string());
  };
  */

  async function privatelyTransfer() {
    //setExecuting(true);
    
    /*
    const result = await aleoWorker.localProgramExecution(
      helloworld_program,
      "main",
      ["5u32", "8u32"],
    );
    //setExecuting(false);
  */

    //alert(JSON.stringify(result));
    alert("Success!")
    
   console.log("transfered")
  }

  return (
    <>
      <div className="app">
        <h1 className="fw-bold display-1">cleanse.</h1>
        <h6 className="fw-light mb-5"> regain privacy on Aleo by transferring complete balance to fresh address.</h6>
        <div className="card">
          <form>
            <div className="mb-3">
              <label className="form-label">From:</label>
              <input type="text" className="form-control" id="fromAddressInput"></input>
              <div id="fromAddressText" className="form-text mb-5">Enter public account address containing balance.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">To:</label>
              <input type="text" className="form-control" id="toAddressInput"></input>
              <div id="toAddressText" className="form-text mb-5">Enter fresh public account address.</div>
            </div>
          </form>
          <p>
            <button className="btn btn-success" onClick={privatelyTransfer}>
              Transfer
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
