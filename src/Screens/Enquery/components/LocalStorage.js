// import React from 'react'

// const LocalStorage = () => {

//   return (
//     <>
//         <h1>Local Storage</h1>
//         <div>

//         </div>
//     </>
//   )
// }

// export default LocalStorage

// let key = prompt("Please enter the key")
// let value = prompt("Please enter the value")
// localStorage.setItem(key, value);
// console.log(`the ${key} is ${localStorage.getItem(key)}`);


// import React from "react";

// const data = [
//     {
//         name: 'Pragalbh',
//         age: '23',
//         city: 'Lucknow',
//     },
//     {  
//         name: 'Harsh',
//         age: '20',
//         city: 'Lucknow',
//     },
//     {  
//         name: 'Aniket',
//         age: '21',
//         city: 'Lucknow',
//     },
//     {    
//         name: 'Vijay',
//         age: '24',
//         city: 'Lucknow'
//     }
// ];

// const LocalStorage = () => {
//     const item = JSON.stringify(data);

//     return (
//         <div className="container ">
//             <div className="row  ">
//                 <div className="col-lg-12 ">
//                     <pre>{item}</pre>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LocalStorage;
import React from 'react'

const LocalStorage = () => {
var updateArray = [];
localStorage.setItem('updateArray', JSON.stringify(updateArray));
updateArray = JSON.parse(localStorage.getItem('updateArray'));
updateArray.push('hidimba','Pragalbh','gillu','Ballu','kallu');
localStorage.setItem('updateArray', JSON.stringify(updateArray));
JSON.parse(localStorage.getItem('updateArray')); // Returns ["yes"]
  return (
    <div>LocalStorage</div>
  )
}

export default LocalStorage




// code for how to update array in localstorage
// import React, { useEffect, useState } from "react";

// const App = () => {
//     // State to hold the data array
//     const [data, setData] = useState([]);

//     // Retrieve the array from localStorage on component mount
//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('data')) || [];
//         setData(storedData);
//     }, []);

//     // Function to update data array in state and localStorage
//     const updateData = () => {
//         const newDataItem = {
//             name: 'New Name',
//             age: 'New Age',
//             city: 'New City'
//         };
//         const newData = [...data, newDataItem];
//         localStorage.setItem('data', JSON.stringify(newData));
//         setData(newData);
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-12">
//                     <pre>{JSON.stringify(data, null, 2)}</pre>
//                     <button onClick={updateData}>Update Data</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;
