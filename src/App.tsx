
import "./App.css";
import cleanse_v1 from "../cleanse_v1/build/main.aleo?raw";
import { AleoWorker } from "./workers/AleoWorker";
import { Account } from '@aleohq/sdk';

const aleoWorker = AleoWorker();
function App() {

  async function connectAccount() {
    console.log("connected")
  }

  async function generateAccount(){

    const account = new Account();
    const privateKey = account.privateKey();
    const viewKey = account.viewKey();
    const address = account.address();

    console.log(account)

  }
  async function publicTransfer() {

    const result = await aleoWorker.localProgramExecution(
      cleanse_v1,
      "transfer_public",
      ["aleo1lm4cderp47hgxd7p4erfgngw7zw47cswf6aduvfck9ejtwspec9sljnf98","1u64"],
    );
  
    alert(JSON.stringify(result));
    //alert("Success!")
    
    console.log("publically transfered")
    }

  return (
    <>
      <div className="app">
        <h1 className="fw-bold display-1">cleanse.</h1>
        <h6 className="fw-light mb-5"> regain privacy on Aleo by transferring complete balance to fresh address</h6>
        <div className="card">
          <div className="form-text">Retreive existing account to cleanse.</div>
          <button className="btn btn-success my-3" onClick={connectAccount}>
            Connect
          </button>
          <input type="text" className="form-control" id="connectedAccountOutput" disabled></input>
          <hr className="hr my-4" />
          <div className="form-text">Create fresh account to send funds.</div>
          <button className="btn btn-secondary my-3" onClick={generateAccount}>
            Generate
          </button>
          <input type="text" className="form-control" id="generatedAccountOutput" disabled></input>
          <hr className="hr my-4" />
          <button className="btn btn-danger mb-3" onClick={publicTransfer}>
            Transfer
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
