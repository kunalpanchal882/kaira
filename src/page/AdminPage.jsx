import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/AdminHome";
import AdminGallery from "../components/gallery/AdminGallery";
import AdminFranchise from "../components/franchise/AdminFranchise";
import AdminJwellery from "../components/jwellery/AdminJwellery";
import Stores from '../components/Stores/Stores';
import { useState } from "react";

const AdminPage = () => {

  const [page, setPage] = useState("home");

  const renderComponent = () => {
    switch (page) {
      case "login":
        return <Login />;
      case "home":
        return <Home />;
      case "stores":
        return <Stores />;  
      case "gallery":
        return <AdminGallery />;
      case "franchise":
        return <AdminFranchise />;
      case "jewellery":
        return <AdminJwellery/>
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="adminPage">
      <Navbar setPage={setPage} />
      {renderComponent()}
    </div>
  );
};

export default AdminPage;
