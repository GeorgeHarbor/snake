import { useEffect, useState } from 'react';
import './App.css';
import position from './Classes/position';
import purposeEnum from './Classes/purposeEnum'
import snakeItem from './Classes/snakeItem';
import Grid from './Components/Grid';
import updateGrid from './logic';
function App() {

  const snakeItem3 = new snakeItem(undefined, undefined, false);
  const snakeItem2 = new snakeItem(undefined, undefined, false);
  const snakeItem1 = new snakeItem(undefined, undefined, true);


  snakeItem2.next = snakeItem1;
  snakeItem2.prev = snakeItem3;
  snakeItem3.prev = undefined;
  snakeItem3.next = snakeItem2;

  snakeItem1.currPosition = new position(4, 6);
  snakeItem2.currPosition = new position(4, 5);
  snakeItem3.currPosition = new position(4, 4);


  const [dimension, setDimension] = useState<number>(16);

  const gridInit: purposeEnum[][] = new Array(dimension).fill(purposeEnum.Empty).map(
    () => new Array(dimension).fill(purposeEnum.Empty));
  const [grid, setGrid] = useState(gridInit)



  useEffect(() => {
     setInterval(() => {
      let num = Math.floor(Math.random() * 3);
      console.log(num);
      updateGrid(grid, snakeItem1, num);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Grid grid={grid}></Grid>
    </div>
  );
}

export default App;
