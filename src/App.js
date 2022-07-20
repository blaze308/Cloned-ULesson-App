import './App.css';
import SideNav from "../src/components/SideNav/index"
import MainBar from "../src/components/MainBar/index"

function App() {
  return (
    <div className="flex">
      <SideNav/>
      <MainBar/>
    </div>
  );
}

export default App;
