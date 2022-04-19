import './App.css';
import One from "./Exam/1"
import Two from "./Exam/2"
import Three from "./Exam/3"

function App() {
  var given_array = [2,3,1,5,6,9,2,6,1,8,7];
  var result = 0;
	const output = () => {
		result =
			Math.max(...given_array.filter((element, index, array) => 
			array.indexOf(element) !== index
		  )
	  )
  }

  output()
  return (
    <div className="App">
      <One/>
      <Two/>
      <Three/>
    </div>
  );
}

export default App;
