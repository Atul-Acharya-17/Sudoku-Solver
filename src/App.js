import logo from './logo.svg';
import './App.css';
import './components/footer/description';
import Description from './components/footer/description';
import Intro from './components/header/intro';
import Grid from "./components/main/grid";
function App() {
  return (
    <div>
      <Intro></Intro>
      <Grid></Grid>
      <Description/>
    </div>
  );
}

export default App;
