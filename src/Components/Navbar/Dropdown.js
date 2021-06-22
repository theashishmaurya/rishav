import { useState } from "react";

const Mobnav = () =>{
    const [mobtoogle , setMobtoggle] =  useState(
        {
            hidden : "hidden",
            show : " "
        }
    )
    return(
        <nav className = "container max-width">
        <div className=" px-3 md:px-0">
        <div className = "flex flex-row justify-between">
            <div> 
            <h1 className = "text-3xl uppercase">Lg</h1>
            </div>
            <div className = "order-last">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
            </div>
               
            </div>
            <div className = "">
            <ul className = "flex flex-col">
                <li className = "m-3  text-xl bold-text p-3 font-semibold text-center">About</li>
                <li className = "m-3 text-xl bold-text p-3 font-semibold text-center">Services</li>
                <li className = "m-3  text-xl bold-text p-3 font-semibold text-center">Pricing</li>
                <li className = "m-3  text-xl bold-text p-3 font-semibold text-center">Contact</li>
            </ul>
            </div>
        </div>
            
            
        </nav>
    )

}

const Navbar = () =>{
   
    
    return (
        <div>
            <Mobnav/>
        </div>
    )
}

export default Navbar;