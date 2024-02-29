import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../../Redux/Slices/UserSlice"
import { fetchData } from "../../Redux/Slices/UserSlice"
import human5 from "../../images/human5.png"
import Button from "../../Components/Button"
import { DeleteTask } from "../../Redux/Slices/CurdSlice"

export default function Dashboard() {

    const dispatch = useDispatch()
    const [sure, setSure] = useState(false)

    const email = localStorage.getItem("user")

    const user = useSelector(state => loginUser(state, email))

    const data = () => {
        dispatch(fetchData())
    }

    const confirm = (index, id) => {
        if (sure) {
            dispatch(DeleteTask({ index, id }))
        }
    }


    useEffect(() => {
        data()
    }, [confirm])

    const tasks = user?.task?.map((item) => {
        return (
            <><div class="flex items-center ps-4 border border-gray-200 rounded">
                <input id="bordered-checkbox-1" type="checkbox" value={sure} onChange={() => setSure(prev => !prev)} name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900">{item}</label>
                < Button text="Completed?" onClick={() => confirm(item.index, user.id)} />
            </div>

            </>
        )

    })

    return (
        <>

            <div className="min-h-full">

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-3">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{user?.name}</h1>
                    </div>
                </header>
                <main>
                    <div className='p-10 bg-gray-900 flex flex-col md:flex-row items-center justify-evenly flex-wrap gap-8'>
                        <div>
                            <img src={human5} alt="" />
                        </div>
                        <div className="space-y-2 w-full md:w-[500px] p-5 rounded-sm bg-white">
                            <h1>My Tasks</h1>
                            {tasks}
                        </div>


                    </div>
                </main>
            </div>
        </>
    )
}
