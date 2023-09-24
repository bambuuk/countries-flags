import Controls from "./components/Controls";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Controls />
      </MainContent>
    </>
  );
}

export default App;
