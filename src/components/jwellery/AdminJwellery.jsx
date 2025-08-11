import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const AdminJwellery = () => {

 const [jwellery, setJwellery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/jwellery"); // replace with your backend URL
        setJwellery(res.data.data); // assuming { success: true, data: [...] }
        console.log("Fetched jwellery data:", res.data.data);
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
      }
    };

    fetchData();
  }, []);
 console.log(jwellery)
  return (
    <div>
        <h2>Jwellery Collections</h2>
      {jwellery.map((collection, idx) => (
        <div  key={idx} className="collection">  
            <h1>{collection.name}</h1>

        </div>
      ))}
    </div>
  )
}

export default AdminJwellery