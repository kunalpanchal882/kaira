import "../franchise/AdminFranchise.css";
import FranchiesQuary from "../frachiseQuary/FrachiesQuary";
const AdminFranchise = () => {
  const FranchiseData = {
    franchise: [
      {
        name: "Mr. Gunjan Sharma",
        role: "director",
        image:
          "https://res.cloudinary.com/stackashu/image/upload/v1753431873/gunjan_nlqqqk.jpg",
      },
      {
        name: "Mr. Vikash Sharma",
        role: "director",
        image:
          "https://res.cloudinary.com/stackashu/image/upload/v1753431874/vikas_vkmov7.jpg",
      },
    ],
  };

  const renderFranchies = FranchiseData.franchise.map(
    (franchisedata, index) => (
      <div className="franchiesdata" key={index}>
        <div className="img">
          <img src={franchisedata.image} />
          <div className="selectImg">
            <label className="custom-file-upload">
              <input type="file" />
              Select Image
            </label>
          </div>
        </div>
        <div className="text">
          <div className="name">
            <h3>Name</h3>
            <p>{franchisedata.name}</p>
          </div>
          <div className="role">
            <h3>Role</h3>
            <p>{franchisedata.role}</p>
          </div>
        </div>
      </div>
    )
  );

  return <div className="franchies">
    <FranchiesQuary/>
    <div className="owner">
      {renderFranchies}
    </div>
    </div>;
};

export default AdminFranchise;
