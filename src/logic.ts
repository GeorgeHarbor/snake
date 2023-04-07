import position from "./Classes/position";
import purposeEnum from "./Classes/purposeEnum";
import snakeItem from "./Classes/snakeItem";
import Grid from "./Components/Grid";



function updateGrid(grid: purposeEnum[][], snake: snakeItem, value: purposeEnum) {

  const updatedGrid = [...grid];
  flattenSnakeList(snake, arr);
  arr.forEach(position => {
    updatedGrid[position.x][position.y] = value;
  });
  return updatedGrid;
}

const arr: position[] = [];
const flattenSnakeList = (item: snakeItem, arr: position[] = []): position[] | number => {
  if (item == null)
    return arr;
  arr.push(item.currPosition!);
  return (item.next, arr);
}



export default updateGrid; 
