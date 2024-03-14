import { Container } from "@mui/material";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import Tenure from "./components/Tenure";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <div className="App">
          <Sliders />
          <Tenure />
          <Chart />
        </div>
      </Container>
    </>
  );
}

export default App;
