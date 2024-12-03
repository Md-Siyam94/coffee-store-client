import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const { name, quantity, supplier, teste, category, details, photoURL, _id } = coffee

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const addCoffee = { name, quantity, supplier, teste, category, details, photoURL }

        fetch(`http://localhost:7500/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    return Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })
       

    }
    return (
        <div>
            <Link to={'/'} className="flex gap-3 items-center py-3">
                <IoArrowBack className="text-2xl" />
                <h3 className="text-xl font-semibold">Back to Home</h3>
            </Link>

            <form onSubmit={handleUpdate} >
                <div className="border  bg-[#f4f3f0] gap-3 p-16">
                    <h2 className="text-4xl text-center font-semibold">Update Coffee Details</h2>
                    <p className="font-semibold text-center my-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className="md:flex gap-3">
                        <div className="w-1/2">
                            <label className="">Name <br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="name" defaultValue={name} placeholder="Coffee name" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label>Available Quantity<br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3 my-5">
                        <div className="w-1/2" >
                            <label>Supplier <br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label>Taste<br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="teste" defaultValue={teste} placeholder="Enter coffee taste" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-3">
                        <div className="w-1/2">
                            <label>Category<br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="category" defaultValue={category} placeholder="Enter coffee category" />
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label>Details<br />
                                <input className="border w-full p-2 rounded-lg" type="text" name="details" defaultValue={details} placeholder="Enter coffee details" />
                            </label>
                        </div>
                    </div>

                    <div className="my-5">
                        <label>Photo<br />
                            <input className="border w-full p-2 rounded-lg" type="text" name="photoURL" defaultValue={photoURL} placeholder="Enter photo URL" />
                        </label>
                    </div>
                    <button className=" w-full py-4 bg-black bg-opacity-70 text-white rounded-lg font-semibold">Update coffee</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateCoffee;