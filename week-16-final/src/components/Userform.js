import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

//components
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css'

// Userform holds the React states
const Userform = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    //creates a new array of todos using map(), checks whether id of the original array matches the id passed in
    //if it does, this function creates a new todo with updated title and complete value
    //if the id does not match, the function returns the todo unchanged
    const updateTodo = (title, id, completed) =>{
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo('');
    }
    //sets the input value of the form based on the editTodo state
    //if editTodo state exists, sets the input value to the title property of the editTodo object
    //if editTodo state does not exist, sets the input value to an empty string
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput('')
        }
    }, [setInput, editTodo]);
    
    //defines the setInput function that is called when the user types into the input field
    //sets the input state to the value of the input field
    const onInputChange = (event) =>{
        setInput(event.target.value);
    }

    //ensures page does not refresh when clicking 'add' or 'ok' 
    //if editTodo is defined, calls updateTodo with the input value, the 'id' of the editTodo and the 'completed' value 
    //if editTodo is not defined, adds a new todo to the list of todos with an id, title, completed value of false and then clears the form
    //of the editTodo
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

  return (
    <div>
        <Container fluid='sm'>
            <div className='d-flex justify-content-center'>
                <Form onSubmit={onFormSubmit}> 
                    <Row>
                        <Col>
                            <Form.Group style={{ marginBottom: 40 }} className="mb-3" controlId="formBasicEmail" inline>
                                <div className='d-inline-block'>
                                    <Form.Control type="text" placeholder="Enter a Todo" value={input} required onChange={onInputChange}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </div>
                                <div className='d-inline-block'>
                                    <Button
                                        style={{ marginLeft: 10}}
                                        variant='primary'
                                        type='submit'>
                                        {editTodo ? 'Ok' : 'Add'}
                                    </Button>
                                </div>
                            </Form.Group>

                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>


    </div>
  )
}

export default Userform