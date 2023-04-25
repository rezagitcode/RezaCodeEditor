import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Output from "./Components/Output";
import { useState} from "react";
function App() {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  return (
    <div className="App">
      <Header />
      <Input htmlValue={htmlValue} cssValue={cssValue} jsValue={jsValue} setHtmlValue={setHtmlValue} setCssValue={setCssValue} setJsValue={setJsValue}/>
      <Output htmlValue={htmlValue} cssValue={cssValue} jsValue={jsValue}/>
    </div>
  );
}

export default App;
