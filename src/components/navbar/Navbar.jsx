import { useState } from "react"
import "../navbar/Navbar.css"


const Navbar = ({setPage}) => {

const [activePage, setactivePage] = useState("home")

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
      <p className={activePage ==="assits" ? "active" : ""} onClick={() => handelClick("assits")}>assists</p>
    </div>
  )
}

export default Navbar