import { useLoaderData } from "react-router-dom";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(users)

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:7500/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                const remaining = users.filter(user=> user._id !== id);
                setUsers(remaining);
            }
        });

    }

    return (
        <div>


            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created at</th>
                            <th>Last Sign in at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>1</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.time}</td>
                                    <td>{user?.lastSignInTime}</td>
                                    <td className="flex gap-3">
                                        <button className="text-xl text-black  py-3 px-3 "><HiPencil /></button>
                                        <button onClick={() => handleDelete(user?._id)} className="text-xl text-red-600 py-3 px-3 "> <MdDelete /></button>

                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;