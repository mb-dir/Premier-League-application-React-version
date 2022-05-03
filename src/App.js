import "./App.css";

import Slider from "./components/Slider/Slider";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Premier League Clubs</h1>
        <p>
          Simple application which shows basic information about Premier League
          clubs like stadion, date of creation, current players, etc.
        </p>
      </header>
      <Slider />
    </main>
  );
}

export default App;
