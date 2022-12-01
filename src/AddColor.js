import { useState } from 'react';
import { ColorBox } from "./ColorBox";

// colors
export function AddColor() {
  const [color, setColor] = useState("orange");


  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["crimson", "orangered", "orange", "pink"]);
  return (
    <div>
      <input style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder='Enter a Color'
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

