import MainPanel from "./components/MainPanel";
import Navbar from "./components/Navbar";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div>
        <Navbar />
        <MainPanel />
      </div>
    </DataProvider>
  );
}

export default App;
