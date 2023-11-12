import React from 'react';
import './App.css';
import './webComponents/my-component/my-component';
import './webComponents/table-component/table-component';

function App() {
  return (
    <div className="App">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ea, soluta, deleniti cum porro optio necessitatibus magni consequuntur provident excepturi nulla. Sint cum praesentium quas molestias a eius laboriosam culpa?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ipsam tempore fugiat doloremque, mollitia sit amet repellat repellendus quaerat sed natus eos consequatur vel magnam ut? Veritatis maxime nemo perspiciatis.
      Impedit ullam illum placeat itaque ratione vero necessitatibus qui, commodi atque nulla natus nostrum! Sunt voluptatibus fuga explicabo reiciendis quos reprehenderit eius tempore quo, itaque repellendus expedita nesciunt, saepe nobis?
      Reprehenderit consequuntur sequi distinctio alias? Magni omnis eligendi modi nemo quaerat officiis quos, ea totam facilis nam suscipit ullam natus est a numquam cupiditate dolore aliquam! Magni incidunt ex iusto!
      
      {/* <my-component></my-component> */}
      <table-component></table-component>

      {/* <table style={{width:"100%"}}>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
    </div>
  );
}

export default App;
