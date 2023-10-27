import './App.css';
import Timeline from './components/TimeLine.jsx';
import React, { useState } from 'react';

function App() {
   let defaultData = [{
      "from": "2023-05-30T03:00:28+03:00",
      "to": "2023-05-30T05:57:10+03:00",
   }, {
      "from": "2023-05-30T06:01:01+03:00",
      "to": "2023-05-30T06:49:31+03:00",
   }, {
      "from": "2023-05-30T07:04:21+03:00",
      "to": "2023-05-30T07:05:26+03:00",
   }, {
      "from": "2023-05-30T08:27:42+03:00",
      "to": "2023-05-30T08:28:52+03:00",
   }, {
      "from": "2023-05-30T08:29:43+03:00",
      "to": "2023-05-30T08:31:28+03:00",
   }, {
      "from": "2023-05-30T10:19:15+03:00",
      "to": "2023-05-30T10:21:02+03:00",
   }, {
      "from": "2023-05-30T16:50:26+03:00",
      "to": "2023-05-30T16:50:49+03:00",
   }, {
      "from": "2023-05-30T17:03:12+03:00",
      "to": "2023-05-30T17:04:24+03:00",
   }, {
      "from": "2023-05-30T17:05:11+03:00",
      "to": "2023-05-30T17:05:55+03:00",
   }, {
      "from": "2023-05-30T19:29:46+03:00",
      "to": "2023-05-30T19:31:04+03:00",
   }, {
      "from": "2023-05-30T20:42:28+03:00",
      "to": "2023-05-30T20:43:31+03:00",
   }]

   const [data, setData] = useState(defaultData);

   const handleChange = (event) => {

      try {
         setData(eval(event.target.value));
      } catch (error) {
         console.error(error);
      }
   };
   
   return (
      <div className="App">
         <Timeline data={data} />
         <div className='w-full max-w-xl px-4 mt-4'>
            <textarea
               defaultValue={JSON.stringify(data, null, 2)}
               onLoad={handleChange}
               onChange={handleChange}
               cols="40"
               rows="20"
               className='bg-gray-700 text-base w-full rounded-lg'>
            </textarea>
         </div>
      </div>
   );
}

export default App;
