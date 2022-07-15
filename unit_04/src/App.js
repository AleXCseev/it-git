import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let select = React.createRef();
  let range = React.createRef();
  let input = React.createRef();
  const [selectValue, setSelectValue] = useState("");
  const [text, setText] = useState("");

  let color = React.createRef();

  function randomInt(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
	  return Math.floor(rand);
  }

  function task1() {
    console.log("task2")
  }
  function task2(event) {
    event.target.classList.add("active")
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4() {
    count4++
    console.log(count4)
  }
  function task5(event) {
    if(event.target.checked) {
      document.querySelector(".out-5").innerHTML = event.target.getAttribute("currentValue");
    } else {
      document.querySelector(".out-5").innerHTML = 0;
    }
  }
  function task6() {
    setSelectValue(select.current.value);
  }
  function task7() {
    let generateColor = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)} ,${randomInt(0, 255)})`;

    color.current.style.backgroundColor = generateColor;
  }
  function task8(event) {
    let result = []
    let value = event.key.split("")

    value.forEach(item => {
      if(+item) {
        result.push("1")
      } else {
        result.push("0")
      }
    })

    setText(result.join(""));
  }
  function task9(event) {
    range.current.innerHTML = event.target.value
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+input.current.value)
    console.log(ar10)
  }

  return (
		<>
			<h1>События</h1>
			<section>
				<h2>Task 1</h2>
				<button className="task-1" onClick={task1}>
					Push
				</button>
			</section>
			<section>
				<h2>Task 2</h2>
				<div className="task-2" onMouseEnter={task2}></div>
			</section>
			<section>
				<h2>Task 3</h2>
				<input type="text" className="task-3" onInput={task3} />
			</section>
			<section>
				<h2>Task 4</h2>
				<button className="task-4" onClick={task4}>
					Count
				</button>
			</section>
			<section>
				<h2>Task 5</h2>
				<input type="checkbox" currentValue="55" onChange={task5} />
				<div className="out-5"></div>
			</section>
			<section>
				<h2>Task 6</h2>
				<select className="task-6" onChange={task6} ref={select}>
					<option value="7">seven</option>
					<option value="4">four</option>
					<option value="9">nine</option>
					<option value="10">ten</option>
				</select>
				<div className="out-6">{selectValue}</div>
			</section>
			<section>
				<h2>Task 7</h2>
				<div className="block-7" ref={color}></div>
				<button className="task-7" onClick={task7}>Color</button>
			</section>
			<section>
				<h2>Task 8</h2>
				<input type="text" className="task-8" onKeyPress={task8}></input>
				<div className="out-8">{text}</div>
			</section>
			<section>
				<h2>Task 9</h2>
				<input type="range" className="task-9" onInput={task9}></input>
				<div className="out-9" ref={range}></div>
			</section>
			<section>
				<h2>Task 10</h2>
				<input type="number" className="i-10" ref={input}></input>
				<button className="task-10" onClick={task10}>Push</button>
			</section>
		</>
  );
}

export default App;







