import Form from "./components/Form";
import List from "./components/List";
import {useState} from "react";

export type Todo = {
    id: number,
    content: string,
    editing: boolean
};


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
    //型のタイプはTodo[]型
    const [todos, setTodos] = useState<Todo[]>(todoList);

    return (
        <>
            <List />
            <Form />
        </>
    );
}

export default Todo;