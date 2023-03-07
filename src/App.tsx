import {
  MultiSelectComponent,
  ComboBoxComponent,
} from "@syncfusion/ej2-react-dropdowns";
import "./App.css";
function App() {
  const divStyle = {
    margin: 100,
    width: 300,
  };

  // const sportsData = [
  //   "Badminton",
  //   "Basketball",
  //   "Football",
  //   "Handball",
  //   "Golf",
  //   "Gymnastics",
  //   "Hockey",
  //   "Rugby",
  //   "Snooker",
  //   "Tennis",
  // ];

  const sportsDataJson: { [key: string]: Object }[] = [
    { id: "game1", sports: "Badminton" },
    { id: "game2", sports: "Football" },
    { id: "game3", sports: "Tennis" },
    { id: "game4", sports: "Golf" },
    { id: "game5", sports: "Hockey" },
    { id: "game6", sports: "Rugby" },
    { id: "game7", sports: "Snooker" },
    { id: "game8", sports: "Basketball" },
  ];

  return (
    <div style={divStyle}>
      <h2>Multi Select</h2>
      <MultiSelectComponent
      
        placeholder="Favorite Sports"
        // dataSource={sportsData}
        dataSource={sportsDataJson}
        fields={{ value: "id", text: "sports" }}
        allowFiltering={true}
      ></MultiSelectComponent>
      <br/>
      <h2>Multi Select Limit 3</h2>
      <MultiSelectComponent
        placeholder="Favorite Sports"
        // dataSource={sportsData}
        dataSource={sportsDataJson}
        fields={{ value: "id", text: "sports" }}
        allowFiltering={true}
        maximumSelectionLength={3}
      ></MultiSelectComponent>
      <br/>
      <h2>Single Select</h2>
      <ComboBoxComponent
      autofill={true}
        id="comboelement"
        placeholder="Favorite Sports"
        // dataSource={sportsData}
        dataSource={sportsDataJson}
        fields={{ value: "id", text: "sports" }}
        allowFiltering={true}
      ></ComboBoxComponent>
      <br/><br/>
    </div>
  );
}

export default App;
