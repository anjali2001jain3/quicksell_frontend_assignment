import React from "react";
import DropDown from "./component/DropDown";
import "./App.css";
import Filter from "./component/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      dataIsLoaded: false,
      groupOption: "status",
      orderOption: "priority",
    };
  }

  componentDidMount() {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tickets: json.tickets,
          dataIsLoaded: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { dataIsLoaded, tickets, groupOption, orderOption } = this.state;

    return (
      <>
        {!dataIsLoaded && <div>Loading...</div>}
        <div className="App">
          <DropDown
            className="nav"
            groupOption={groupOption}
            setGroupOption={(option) => this.setState({ groupOption: option })}
            orderOption={orderOption}
            setOrderOption={(option) => this.setState({ orderOption: option })}
          />
          <Filter
            tickets={tickets}
            groupOption={groupOption}
            orderOption={orderOption}
          />
        </div>
      </>
    );
  }
}

export default App;
