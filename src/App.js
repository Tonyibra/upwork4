import { Lefttab } from "./Components/Lefttab/Lefttab";
import { Topbar } from "./Components/Topbar/Topbar";
import "./App.scss";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIndexData } from "./redux/Slices/CardSlice";
import { CardList } from "./Components/CardList/CardList";
function App() {
  const [countrySearch, setCountrySearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndexData());
  }, []);

  return (
    <div className="App">
      <Topbar />
      <section className="container">
        <Lefttab setCountrySearch={setCountrySearch} />
        <div
          className="mainPage"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Searchbar />
          <CardList countrySearch={countrySearch} />
        </div>
      </section>
    </div>
  );
}

export default App;
