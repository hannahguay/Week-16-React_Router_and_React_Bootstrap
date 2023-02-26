import React, { useState}  from 'react';

//components
import Userform from '../components/Userform';
import TodosList from '../components/TodosList';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

//styling
import 'bootstrap/dist/css/bootstrap.min.css';

//create state variables: 
//input stores value of the input field in the form
//todos stores an array of todo objects (each has a title, unique id and boolean 'completed' value)
//editTodo stores the selected todo object that needs to be edited
const Home = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] =useState(null);

  return (
    <div>
            <Header />
            <Container fluid>
              <div className='d-flex justify-content-center'>
                {/* Card containing Userform */}
                <Card className="min-vw-75" style={{ backgroundColor: '#e3e3e3', marginTop: 40 }} >
                  <Card.Title className='d-flex justify-content-center' style={{ marginBottom: 0, marginTop: 10 }}><h3>Todo Tracker</h3></Card.Title>
                  <Card.Body>
                    {/* First two manage the input value of the form */}
                    {/* Second set manage the list of todos */}
                    {/* Third set manage the selected todo to be edited */}
                  <Userform 
                      input={input}
                      setInput={setInput}               
                      todos={todos}
                      setTodos={setTodos}                      
                      editTodo={editTodo}
                      setEditTodo={setEditTodo}
                  />
                  {/* Array of todo objects */}
                  {/* Adds a new todo to the array */}
                  {/* Replaces a todo with updated one*/}
                  <TodosList
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                  />
                  </Card.Body>
                </Card>
              </div>
            </Container>
            <Footer />
    </div>
  )
}

export default Home