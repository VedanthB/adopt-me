import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="doffg" breed="Havanffese" />
      <Pet name="puna" animal="birffd" breed="Cockffatiel" />
      <Pet name="Doin" animal="djd" breed="Miffx" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
