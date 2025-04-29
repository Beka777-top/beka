import React from "react";


const Tailwind = () => {
    return(
        <div>
            <header className="flex justify-between items-center bg-gray-800 text-white p-4">
                <div>
                    <ul className="flex items-center gap-4">
                        <li>home</li>
                        <li>contact</li>
                        <li>About us</li>
                    </ul>
                </div>
            </header>

            <section className="grid grid-cols-3 mt-7 gap-4">
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
                <div>image</div>
            </section>
        </div>
    )
}

export default Tailwind;
