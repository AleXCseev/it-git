import React, {useState} from "react";
import './App.css';

function App() {
  const [list, setList] = useState([])
  const inputRef = React.createRef()

  const cE = React.createElement

  const buttonHandler = () => {
    const inputValue = inputRef.current.value;

    if (inputValue) {
      setList([...list, inputValue])

      inputRef.current.value = ""
    }
  }
  
  const h1 = cE("h1", {}, "unit_08");

  const h2 = cE("h1", {
    "className": "text-orange"
  }, "header 2");

  const p = cE("p", {
    "style": {"color": "red"}
  }, "this is p");

  const input = cE("input", {
    "value": 55
  })

  const p1 = cE("p", {}, "hi");

  const p2 = cE("p", {}, "world");

  const div = cE("div", {"className": "text-gray"}, p1, p2)

  const input2 = cE("input", {ref: inputRef})

  const button = cE("button", {onClick: buttonHandler}, "button")

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
      <div>
        {input2}
        {button}
        <ul>
          {
            list.map((item, index) => (
              cE("li", {key: index}, item)
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
