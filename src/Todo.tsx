import Form from "./components/Form";
import List from "./components/List";
import {useState} from "react";


const Todo = () => {

    //デフォルトのTodoリスト
    const todoList = [
        {
            id: 1,
            content: "店を予約する",
            editing: false,
        },
        {
            id: 2,
            content: "買い物",
            editing: false,
        },
        {
            id: 3,
            content: "郵便局へ行く",
            editing: false,
        }
    ];

    //Todoリストコンポーネントで状態をもたせる
    const [todos, setTodos] = useState(todoList);

    
    return (
        <>
            <List />
            <Form />
        </>
    );
}

export default Todo;