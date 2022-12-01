import { useState } from 'react';

//useState example
function Add5() {
  //let num = 0; //changing num into usestate value
  let [num, setNum] = useState(0);

  return (
    <div>
      <button onClick={() => setNum(num + 5)}>+5</button>
      <p>{num}</p>
    </div>
  );
}
