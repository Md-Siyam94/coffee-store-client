import { FaRegEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, quantity, supplier, teste, category, details, photoURL, _id } = coffee

    const handleDelete = (_id) => {
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
                fetch(`http://localhost:7500/coffee/${_id}`, {
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
                    const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
            }
        });
    }
    return (
        <div className="card card-side bg-base-200 px-4  ">
            <figure>
                <img className="md:h-48 my-5 w-44 object-fit "
                    src={photoURL}
                    alt="Coffee" />
            </figure>
            <div className=" w-full flex justify-between ml-5 items-center ">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p className="my-2">Supplier : {supplier}</p>
                    <p>Price : 890 Taka</p>
                </div>
                <div className="card-actions justify-end">
                    <div className=" flex flex-col gap-2 ">
                        <button className="px-3 py-3 join-item text-xl rounded-lg "><FaRegEye /></button>
                        <Link to={`/updateCoffee/${_id}`} className="px-3 py-3 join-item text-xl rounded-lg "><HiPencil /></Link>
                        <button onClick={() => handleDelete(_id)} className="px-3 py-3 join-item text-xl rounded-lg text-white bg-red-600"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;