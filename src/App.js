import './App.css';

import StandardCalculator from './Components/Calculators/Standard';

function App() {
  return (
    <div className="App">
      <main className="App_CalulcatorRenderBox">
        <StandardCalculator header="Standard"/>
      </main>
    </div>
  );
}

export default App;
