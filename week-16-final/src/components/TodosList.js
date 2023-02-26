import React from 'react'

//components
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    //finds the todo item in the todos array that matches the id and sets editTodo state to that item
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    //checks if the id of the current todo item matches the id passed as an argument to the handleDelete function. the filter method creates a new array including all the items from the todos array that meet the criteria. 
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id ))
    }

    //toggles the completed property of a todo item when clicked
    const handleComplete = (todo) => {
        //called to update the state of the todos array. map() method is used to iterate over each item in the array.
        //the item with the matching id of the selected todo item, creates a new object with all the existing properties of the item, but with 'completed' changed to the opposite boolean value 
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
  return (
    <div>
        {todos.map((todo) => (
            <Container fluid='md'>
                <Col>
                    <Row>
                    <div className='d-flex justify-content-center'>
                        <div className='d-inline-block'>
                        <li className='list-item' key={todo.id} style={{listStyle: 'none' }}>
                            <div className="d-flex align-items-center">
                                <Form.Group className="mb-3" inline>
                                    <div className='d-inline-block'>
                                        <Form.Control style={{ marginTop: 0, marginBottom: 0 }} type="text" value={todo.title} className={`list ${todo.completed ? 'complete' : ''}`} onChange={(event) => event.preventDefault()}/>
                                            <Form.Text className="text-muted">
                                            </Form.Text>
                                    </div>
                                </Form.Group>

                                <div className="ms-auto">
                                <Button style={{ marginLeft: 5}} variant='primary' onClick={() => handleComplete(todo)}>
                                <i className={`bi bi-check-circle${todo.completed ? ' btn btn-success' : ' btn btn-primary' }`}></i>    
                                </Button>
                                <Button style={{ marginLeft: 5}} variant='primary' onClick={() => handleEdit(todo)}>
                                <i class="bi bi-pencil-square"></i>
                                </Button>
                                <Button style={{ marginLeft: 5}} variant='primary' onClick={() => handleDelete(todo)}>
                                <i class="bi bi-trash3-fill"></i>
                                </Button>
                            </div>
                            </div>
                        </li>
                        </div>
                    </div>
                    </Row>
                </Col>
            </Container>

            ))}
    </div>);
}

export default TodosList