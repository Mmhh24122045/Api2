import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Test from './Test';

function App() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  // const getUsers = () =>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=>res.json()).then(data=>setUsers(data))
  //   .catch((err)=>console.log(err))
  // }
  // getUsers();
  // setLoading(false);
  // console.log(users)
  // }, [])

  // useEffect(() => {
  // const fetchUsers = async() =>{
  //   try {
  //     const res =await axios.get('https://jsonplaceholder.typicode.com/users')
  //     console.log(res)
  //     setUsers(res.data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // fetchUsers()
  // setLoading(false)
  // }, [])
  return (
    <div className="App">
     {/* {loading?
     <h1>loading...</h1> : users.map((el) =>
     <div> 
      <h3> {el.name} </h3>
      <h3> {el.email} </h3>
      <h3> {el.address.street} </h3>
      </div>)
      } */}

      <Test />
    </div>
  );
}

export default App;
