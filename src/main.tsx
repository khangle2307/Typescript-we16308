import ReactDOM from 'react-dom'

const firstName : string = "khang";
const myAge : number = 18;
const person : { id : number,name : string} = {id : 1,name : "khang"};
const isStudent = true;

type student = {
  name : string
}

function Render(props : student) : any {
  console.log(props.name);
  
}

ReactDOM.render(
  <div>
    <h1>hello {person.name} age : {myAge}</h1>
    <p>Nghe nghiep : {isStudent ? "hoc sinh" : "khong co"}</p>
    <p><Render name="minh"/></p>
  </div>,
  document.getElementById('root')
)

