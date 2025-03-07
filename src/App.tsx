import NavBar from "./components/NavBar";
import Router from "./Router";

function App() {
  return (
    <div className=" bg-slate-200 min-h-screen">
      <NavBar />
      <div className=" overflow-auto">
        <Router />
      </div>
    </div>
  );
}

export default App;
