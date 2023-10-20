// import Login from "./login";
import Body from "./body";
import Control from "./Control";
function App() {
  return <>{localStorage.token ? <Body /> : <Control />}</>;
}

export default App;
