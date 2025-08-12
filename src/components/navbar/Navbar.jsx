import { useState } from "react"
import "../navbar/Navbar.css"


const Navbar = ({setPage}) => {

const [activePage, setactivePage] = useState("")

  const handelClick = (page) => {
    setPage(page);
    setactivePage(page);
  }

  return (
    <div className="navbar">
        <p className={activePage ==="home" ? "active" : ""} onClick={() => handelClick("home")}>Home</p>
      <p className={activePage ==="stores" ? "active" : ""} onClick={() => handelClick("stores")}>Stores</p>
      <p className={activePage ==="gallery" ? "active" : ""} onClick={() => handelClick("gallery")}>Gallery</p>
      <p className={activePage ==="franchise" ? "active" : ""} onClick={() => handelClick("franchise")}>Franchise</p>
      <p className={activePage ==="jewellery" ? "active" : ""} onClick={() => handelClick("jewellery")}>Jewellery</p>
    </div>
  )
}

export default Navbar