import './schedule.css';
import ModalApp1 from './modal1';
import App2 from './App2';
  
// Example of a data array that
// you might receive from an API
const data = [
  { name: "1", age: 10},
  { name: "2", age: 10},
  { name: "3", age: 10},
  { name: "4", age: 10},
  { name: "5", age: 10}
]
  
function App3() {
  return (
    <div className="App">
      <table>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
              <td>
                <ModalApp1/>
              </td>
            </tr>
          )
        })}
      </table>
      <App2/>
    </div>
  );
}
  
export default App3;