import { useContext, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.component";
import History from "./components/History/History.component";
import InfoTable from "./components/InfoTable/InfoTable.component";
import { AppContext } from "./context/app.context";

function App() {
  const { data, handleLogout, user, resetData } = useContext(AppContext);
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div className="App">
      <div className="logout-container">
        <div className="logout-box">
          <div>{user.firstname + " " + user.lastname}</div>
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
      {!showHistory ? (
        <div className="main-container">
          <Form
            showHistory={() => {
              setShowHistory(true);
            }}
          />
          {data && <InfoTable data={data} />}
        </div>
      ) : (
        <History
          hideHistory={() => {
            setShowHistory(false);
            resetData();
          }}
        />
      )}
    </div>
  );
}

export default App;
