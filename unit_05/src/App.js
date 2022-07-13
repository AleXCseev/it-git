import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [st1, setSt1] = useState("");
  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState("");
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState(0);
  const [st6, setSt6] = useState("");
  const [st7, setSt7] = useState({});
  const [st8, setSt8] = useState("");
  const [st9, setSt9] = useState(50);
  const [st10, setSt10] = useState([]);

  const inputRef = React.createRef()
  const inputRef2 = React.createRef()

  function randomInt(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
	  return Math.floor(rand);
  }

  function task1() {
    const text = inputRef.current.value
    setSt1(text)
    inputRef.current.value = "";
  }
  function task2() {
    const count = st2 + 1
    setSt2(count);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    const count = st4 + 1
    setSt4(count)
  }
  function task5(event) {
    if(event.target.checked) {
      setSt5(event.target.getAttribute("currentValue"));
    } else {
      setSt5(0);
    }
  }
  function task6(event) {
    setSt6(event.target.value);
  }
  function task7() {
    let generateColor = {
      backgroundColor: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
    };
    setSt7(generateColor)
  }
  function task8(event) {
    let result = []
    let value = event.target.value.split("")

    value.forEach(item => {
      if(+item) {
        result.push("1")
      } else {
        result.push("0")
      }
    })
    
    setSt8(result.join(""));
  }
  function task9(event) {
    setSt9(event.target.value)
  }
  function task10() {
    const list = [...st10, +inputRef2.current.value]
    setSt10(list)
    inputRef2.current.value = ""
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		    <input type="text" ref={inputRef}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={st7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7.backgroundColor}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inputRef2}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>
          <ul>
            { st10.map((item, index) => (
              <li key={index}>{item}</li>
            )) }
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
