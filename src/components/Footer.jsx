import { NavLink } from "react-router-dom"

function Footer() {
    let activeStyle = {
        backgroundColor: "rgb(3 105 161)",
    };  

    return (
        <section className="bg-gray-800 grid grid-cols-2 p-4">
            <NavLink 
                to="/feedback" 
                exact="true" 
                end 
                className="bg-lime-500 m-2 p-2 rounded-md hover:bg-sky-700 w-60 text-center text-slate-200" 
                style={({ isActive }) => isActive ? activeStyle : undefined}
            >FeedBack
            </NavLink>
            <h2 className="text-lime-400/100 m-4">©Rokyt</h2>
        </section>
    )

}

export default Footer;