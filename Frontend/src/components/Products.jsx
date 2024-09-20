import { FaSearch } from "react-icons/fa";
import Carousel from "./Carousel";
import { useEffect } from "react";

const Products = () =>{



    return (
        <>
        <div className="flex flex-col" >
       <div className=" h-15 flex justify-center" >
            
            <div >
                <input className="bg-[#000000] text-[#FFFFFF] hover:bg-red-200 rounded-3xl h-12 w-80 pl-4 m-3" value="Search..." />
                    {/* <FaSearch className="relative right-10 top-4" />  */}
            </div> 
            <div>    
                <select name="cardsType" id="cardType" className="p-2 rounded bg-[#D9D9D9] m-3">
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                </select>
            </div>
            <div>
                <select name="cardsType" id="cardType" className="p-2  px-3 rounded bg-gray-500 m-3">
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                    <option value="default">Type</option>
                </select>
            </div>
        
        </div>
       </div>
        
    <div>

    <div  className="text-left flex flex-col">
        <div>
        <h1 className='text-red font-bold'>Singles</h1>
        <Carousel/>
        </div>

        <div >
        <h1 className='text-red font-bold'>Packs</h1>

        </div>
    </div>
    </div>
        </>
    )
}

export default Products;