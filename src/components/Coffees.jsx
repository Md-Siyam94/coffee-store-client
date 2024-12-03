import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { PiCoffee } from "react-icons/pi";
import { useState } from "react";

const Coffees = () => {
    const loadedcoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedcoffees)
    
    return (
        <div className="my-20 ">
            <div className="md:w-9/12 w-11/12  mx-auto my-8 ">
                <p className="text-center">--- Sip & Savor ---</p>
                <h2 className="text-center font-semibold text-3xl my-4">Our populer products</h2>
                <div className="w-11/12 mx-auto flex justify-center my-5  ">
                <Link className="py-2 px-6 border-2 border-orange-950 rounded-lg flex gap-3 items-center font-semibold 
                bg-[#E3B577] " to={'/addCoffee'}>Add Coffee <PiCoffee className="text-2xl" /></Link>
                </div>
            </div>
            <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee=> <CoffeeCard key={coffee.index} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;