import "../navbar/Navbar.css"


const Navbar = ({setPage}) => {
  return (
    <div className="navbar">
        <p onClick={() => setPage("home")}>Home</p>
      <p onClick={() => setPage("stores")}>Stores</p>
      <p onClick={() => setPage("gallery")}>Gallery</p>
      <p onClick={() => setPage("franchise")}>Franchise</p>
      <p onClick={() => setPage("jewellery")}>Jewellery</p>
    </div>
  )
}

export default Navbar