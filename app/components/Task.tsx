"use client"

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { EditTodo, deleteTodo } from "@/api";

interface TodoListProps{
    task: ITask
}


const Task : React.FC<TodoListProps> = ({task}) => {
    const router=useRouter()
    const [openModalEdit,setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted,setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit,setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await EditTodo({
            id: task.id,
            text: taskToEdit
        })
        setOpenModalEdit(false);
        router.refresh();
    }

    const handleDeletedTask = async (id:string) => {
        await deleteTodo(id)
        setOpenModalDeleted(false)
        router.refresh();
    }
    return (
        <tr key = {task.id}>
            <td className="w-full">{task.text}</td>
            <td className="flex gap-5">
                <FaRegEdit onClick={() => setOpenModalEdit(true)} cursor={"pointer"} className="text-blue-500" size={25}/>
                <Modal modalOpen = {openModalEdit} setModalOpen = {setOpenModalEdit}>
                <form onSubmit={handleSubmitEditTodo}>
                    <h3 className="font-bold text-lg">Edit Task</h3>
                    <div className="modal-action">
                        <input 
                            value={taskToEdit}
                            onChange={e => setTaskToEdit(e.target.value)}
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered w-full" 
                        />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
            <FiTrash2 onClick={()=> setOpenModalDeleted(true)} cursor={"pointer"} className="text-red-500" size={25}/>
            <Modal modalOpen = {openModalDeleted} setModalOpen = {setOpenModalDeleted}>
                <h3 className="text-lg">Are you sure, you want to delete?</h3>
                <div className="modal-action">
                    <button
                        onClick={()=>handleDeletedTask(task.id)}
                        className="btn btn-success"
                    >Yes</button>
                    <button
                        onClick={()=>setOpenModalDeleted(false)} 
                        className="btn btn-error">Cancel</button>
                </div>
            </Modal>
            </td>
        </tr>
    );

};

export default Task;