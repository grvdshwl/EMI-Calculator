import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../../context/app.context";
import { fetchHistory } from "../../context/app.services";
import HistoryBox from "../HistoryBox/HistoryBox.component";
import InfoTable from "../InfoTable/InfoTable.component";

const History = ({ hideHistory }) => {
  const [historyData, setHistoryData] = useState(null);
  const [emiHistory, setEmiHistory] = useState(null);
  const {
    user: { email },
  } = useContext(AppContext);

  useEffect(() => {
    fetchHistory(email).then((data) => {
      console.log(data);
      setHistoryData(data);
    });
  }, [email]);

  if (!historyData?.length) {
    return (
      <>
        <h2>No History to display!</h2>{" "}
        <div className="btn-container">
          <div className="history-btn" onClick={hideHistory}>
            Home
          </div>
        </div>
      </>
    );
  }

  if (!!emiHistory) {
    return (
      <>
        <InfoTable data={emiHistory} />
        <div className="btn-container">
          <div className="history-btn" onClick={hideHistory}>
            Home
          </div>
          <div className="history-btn" onClick={() => setEmiHistory(null)}>
            Back
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="history container">
      <h2>History Data</h2>
      <HistoryBox
        data={historyData}
        showEmiHistory={(data) => setEmiHistory(data)}
      />
      <div className="btn-container">
        <div className="history-btn" onClick={hideHistory}>
          Home
        </div>
      </div>
    </div>
  );
};

export default History;
