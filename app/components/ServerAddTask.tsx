
import { AiOutlinePlus } from "react-icons/ai";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";


const AddTask = () => {
    //const router = useRouter()
    //const [modalOpen,setModalOpen] = useState<boolean> (false);
    //const [newTaskValue,setNewTaskValue] = useState<string> ('');

    // const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    //     e.preventDefault()
    //     await addTodo({
    //         id: uuidv4(),
    //         text: newTaskValue
    //     })
    //     setNewTaskValue("");
    //     setModalOpen(false);
    //     router.refresh();
    // }

    

    return (
        <div>
            <button className="btn btn-primary w-full" onClick={() => document.getElementById("modal")}>Add new Task
            <AiOutlinePlus className="ml-2" size={18}/>
            </button>
            <dialog id="my_modal_3" className="modal">
                <div id="modal" className="modal-box">
                    <form  method="dialog">
                    <h3 className="font-bold text-lg">Add new Task</h3>
                    <div className="modal-action">
                        <input 
                            name="task"
                            value={'abc'}
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered w-full" 
                        />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                
                </div>
            </dialog>

        </div>
    )
}

export default AddTask;
