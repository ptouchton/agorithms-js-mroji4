// Import stylesheets
import './style.css';

const uniqSort = (arr) => {

  const breadCrumbs = {};

  console.log(arr.sort((a,b) => a - b));
  return arr.sort((a,b) => a - b);

}

uniqSort([4,2,2,3,2,2,2]);