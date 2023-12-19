import React from "react";

let d = new Date()
let currentYear = d.getFullYear()

function Footer(){
    return(
        <footer>
            <p>copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer