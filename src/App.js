import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import "./styles.css";

export default function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const getHistory = async () => {
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };

  useEffect(() => {
    getHistory();
  }, [startDate, endDate]);

  return (
    <div>
      <label>Start Date</label>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <br />
      <br />

      <label>End Date</label>
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />

      <ul>
        {data.map((item, idx) => {
          return <li key={idx}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}