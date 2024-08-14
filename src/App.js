import { useState } from "react";
import Sayac from "./components/ClassComponent";
import Counter from "./components/FunctionComponent";


function App() {
  const [componentType, setComponentType] = useState("Function")
  return (
    < div >
      {/* {componentType === "Class" ? <Sayac /> :
        componentType === "Function" ? <Counter /> :
          <div> Seçim Yapılmadı </div>} */}
      {componentType === "Class" && <Sayac />}
      {componentType === "Function" && <Counter />}
      {componentType === null && <div> Seçim Yapılmadı </div>}
    </div >
  );
}

export default App;
