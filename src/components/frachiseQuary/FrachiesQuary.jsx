import { useState } from "react";
import style from "./FrachiseQuary.module.css";
import { MdExpandMore } from "react-icons/md";
import { GiNextButton } from "react-icons/gi";

const FrachiesQuary = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // pagination state
  const queriesPerPage = 10;

 const franchiseQueries = [
  { id: 1, name: "Kaira Sharma", city: "Mumbai", address: "123, Andheri East, Mumbai, Maharashtra", email: "kaira.sharma@example.com", contactNo: "+91 9876543210", currentOccupation: "Software Engineer", investmentPlan: "15", timeFrame: "Immediate", franchiseAssociationType: "Single Unit", desiredCity: "Pune", property: "Not Available", holdingFranchise: "Yes", franchisorName: "ABC Foods Pvt Ltd", convenientDateTime: "2025-08-20 11:30 AM" },
  { id: 2, name: "Rahul Verma", city: "Delhi", address: "45, Connaught Place, New Delhi", email: "rahul.verma@example.com", contactNo: "+91 9123456789", currentOccupation: "Business Owner", investmentPlan: "25", timeFrame: "3 Months", franchiseAssociationType: "Single Unit", desiredCity: "Noida", property: "Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-08-22 4:00 PM" },
  { id: 3, name: "Sneha Patel", city: "Ahmedabad", address: "21, Satellite Road, Ahmedabad, Gujarat", email: "sneha.patel@example.com", contactNo: "+91 9988776655", currentOccupation: "Marketing Manager", investmentPlan: "10", timeFrame: "3-6 Months", franchiseAssociationType: "Multi Unit", desiredCity: "Surat", property: "Not Available", holdingFranchise: "Yes", franchisorName: "XYZ Retail Ltd", convenientDateTime: "2025-08-25 2:15 PM" },
  { id: 4, name: "Amit Desai", city: "Bangalore", address: "7, MG Road, Bangalore", email: "amit.desai@example.com", contactNo: "+91 9012345678", currentOccupation: "Consultant", investmentPlan: "30", timeFrame: "Immediate", franchiseAssociationType: "Single Unit", desiredCity: "Hyderabad", property: "Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-08-18 10:00 AM" },
  { id: 5, name: "Priya Mehta", city: "Chennai", address: "98, T Nagar, Chennai", email: "priya.mehta@example.com", contactNo: "+91 9765432109", currentOccupation: "Teacher", investmentPlan: "8", timeFrame: "6 Months", franchiseAssociationType: "Single Unit", desiredCity: "Coimbatore", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-08-30 3:00 PM" },
  { id: 6, name: "Arjun Nair", city: "Kochi", address: "55, Marine Drive, Kochi", email: "arjun.nair@example.com", contactNo: "+91 9345678123", currentOccupation: "Entrepreneur", investmentPlan: "40", timeFrame: "Immediate", franchiseAssociationType: "Master Franchise", desiredCity: "Trivandrum", property: "Available", holdingFranchise: "Yes", franchisorName: "LMN Foods", convenientDateTime: "2025-09-01 11:00 AM" },
  { id: 7, name: "Ritika Singh", city: "Lucknow", address: "67, Hazratganj, Lucknow", email: "ritika.singh@example.com", contactNo: "+91 9456789012", currentOccupation: "Banker", investmentPlan: "12", timeFrame: "3 Months", franchiseAssociationType: "Single Unit", desiredCity: "Kanpur", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-02 12:30 PM" },
  { id: 8, name: "Mohit Gupta", city: "Jaipur", address: "12, MI Road, Jaipur", email: "mohit.gupta@example.com", contactNo: "+91 9345126789", currentOccupation: "Trader", investmentPlan: "18", timeFrame: "Immediate", franchiseAssociationType: "Single Unit", desiredCity: "Udaipur", property: "Available", holdingFranchise: "Yes", franchisorName: "QRS Beverages", convenientDateTime: "2025-08-28 9:45 AM" },
  { id: 9, name: "Neha Kapoor", city: "Pune", address: "34, FC Road, Pune", email: "neha.kapoor@example.com", contactNo: "+91 9321456789", currentOccupation: "Architect", investmentPlan: "20", timeFrame: "3-6 Months", franchiseAssociationType: "Multi Unit", desiredCity: "Nagpur", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-03 4:15 PM" },
  { id: 10, name: "Rohan Malhotra", city: "Hyderabad", address: "75, Banjara Hills, Hyderabad", email: "rohan.malhotra@example.com", contactNo: "+91 9556784321", currentOccupation: "Engineer", investmentPlan: "22", timeFrame: "Immediate", franchiseAssociationType: "Single Unit", desiredCity: "Vijayawada", property: "Available", holdingFranchise: "Yes", franchisorName: "Tasty Bites Ltd", convenientDateTime: "2025-08-29 2:00 PM" },
  { id: 11, name: "Simran Kaur", city: "Chandigarh", address: "22, Sector 17, Chandigarh", email: "simran.kaur@example.com", contactNo: "+91 9912345678", currentOccupation: "HR Manager", investmentPlan: "14", timeFrame: "6 Months", franchiseAssociationType: "Single Unit", desiredCity: "Ludhiana", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-05 3:45 PM" },
  { id: 12, name: "Varun Joshi", city: "Nagpur", address: "18, Sitabuldi, Nagpur", email: "varun.joshi@example.com", contactNo: "+91 9876123450", currentOccupation: "Shop Owner", investmentPlan: "35", timeFrame: "Immediate", franchiseAssociationType: "Master Franchise", desiredCity: "Indore", property: "Available", holdingFranchise: "Yes", franchisorName: "FreshMart Pvt Ltd", convenientDateTime: "2025-09-06 11:15 AM" },
  { id: 13, name: "Pooja Iyer", city: "Coimbatore", address: "50, Gandhipuram, Coimbatore", email: "pooja.iyer@example.com", contactNo: "+91 9821345678", currentOccupation: "Lecturer", investmentPlan: "9", timeFrame: "3 Months", franchiseAssociationType: "Single Unit", desiredCity: "Madurai", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-08 10:30 AM" },
  { id: 14, name: "Anil Kumar", city: "Patna", address: "14, Boring Road, Patna", email: "anil.kumar@example.com", contactNo: "+91 9786543210", currentOccupation: "Farmer", investmentPlan: "7", timeFrame: "6 Months", franchiseAssociationType: "Single Unit", desiredCity: "Ranchi", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-09 5:00 PM" },
  { id: 15, name: "Meera Reddy", city: "Visakhapatnam", address: "80, Beach Road, Vizag", email: "meera.reddy@example.com", contactNo: "+91 9767891234", currentOccupation: "Doctor", investmentPlan: "28", timeFrame: "Immediate", franchiseAssociationType: "Multi Unit", desiredCity: "Guntur", property: "Available", holdingFranchise: "Yes", franchisorName: "HealthPlus Ltd", convenientDateTime: "2025-09-10 1:00 PM" },
  { id: 16, name: "Sahil Bhatia", city: "Indore", address: "62, Rajwada, Indore", email: "sahil.bhatia@example.com", contactNo: "+91 9345679821", currentOccupation: "CA", investmentPlan: "16", timeFrame: "3-6 Months", franchiseAssociationType: "Single Unit", desiredCity: "Bhopal", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-12 11:45 AM" },
  { id: 17, name: "Ayesha Khan", city: "Bhopal", address: "9, MP Nagar, Bhopal", email: "ayesha.khan@example.com", contactNo: "+91 9912349087", currentOccupation: "Lawyer", investmentPlan: "19", timeFrame: "3 Months", franchiseAssociationType: "Single Unit", desiredCity: "Jabalpur", property: "Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-13 10:15 AM" },
  { id: 18, name: "Deepak Yadav", city: "Kanpur", address: "39, Civil Lines, Kanpur", email: "deepak.yadav@example.com", contactNo: "+91 9456123890", currentOccupation: "Retailer", investmentPlan: "21", timeFrame: "Immediate", franchiseAssociationType: "Multi Unit", desiredCity: "Varanasi", property: "Available", holdingFranchise: "Yes", franchisorName: "QuickEats India", convenientDateTime: "2025-09-14 9:30 AM" },
  { id: 19, name: "Nisha Agarwal", city: "Surat", address: "15, Ring Road, Surat", email: "nisha.agarwal@example.com", contactNo: "+91 9873456120", currentOccupation: "Fashion Designer", investmentPlan: "13", timeFrame: "6 Months", franchiseAssociationType: "Single Unit", desiredCity: "Rajkot", property: "Not Available", holdingFranchise: "No", franchisorName: "", convenientDateTime: "2025-09-15 2:30 PM" },
  { id: 20, name: "Kunal Jain", city: "Delhi", address: "112, Lajpat Nagar, New Delhi", email: "kunal.jain@example.com", contactNo: "+91 9812765432", currentOccupation: "Startup Founder", investmentPlan: "50", timeFrame: "Immediate", franchiseAssociationType: "Master Franchise", desiredCity: "Gurgaon", property: "Available", holdingFranchise: "Yes", franchisorName: "UrbanEats Pvt Ltd", convenientDateTime: "2025-09-16 6:00 PM" }
];


  // Pagination logic
  const indexOfLast = currentPage * queriesPerPage;
  const indexOfFirst = indexOfLast - queriesPerPage;
  const currentQueries = franchiseQueries.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(franchiseQueries.length / queriesPerPage);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={style.FrachiesQuaryContainer}>
      <h1 className={style.franchiesQuaryheading}>Franchise Query</h1>
      <div className={style.frenchiesDetailSection}>
        {currentQueries.map((query) => (
          <div key={query.id} className={style.frenchiesQuaryBox}>
            <div
              className={style.frenchiesQuaryDetails}
              onClick={() => toggleExpand(query.id)}
            >
              <p>{query.id}</p>
              <p>{query.name}</p>
              <MdExpandMore
                className={`${style.iconcsMore} ${
                  expandedId === query.id ? style.rotateIcon : ""
                }`}
              />
            </div>

            {expandedId === query.id && (
              <div className={style.frenchiesQuaryBox}>
                <p><strong>Name:</strong> {query.name}</p>
                <p><strong>City:</strong> {query.city}</p>
                <p><strong>Address:</strong> {query.address}</p>
                <p><strong>Email:</strong> {query.email}</p>
                <p><strong>Contact No:</strong> {query.contactNo}</p>
                <p><strong>Occupation:</strong> {query.currentOccupation}</p>
                <p><strong>Investment Plan:</strong> {query.investmentPlan} Lacs</p>
                <p><strong>Time Frame:</strong> {query.timeFrame}</p>
                <p><strong>Franchise Association:</strong> {query.franchiseAssociationType}</p>
                <p><strong>Desired City:</strong> {query.desiredCity}</p>
                <p><strong>Property:</strong> {query.property}</p>
                <p><strong>Holding Franchise:</strong> {query.holdingFranchise}</p>
                {query.holdingFranchise === "Yes" && (
                  <p><strong>Franchisor Name:</strong> {query.franchisorName}</p>
                )}
                <p><strong>Convenient Date & Time:</strong> {query.convenientDateTime}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className={style.paginationControls}>
        <button
        className={style.preview}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <GiNextButton className={style.previweICone}/>
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
        className={style.next}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <GiNextButton />
        </button>
      </div>
    </div>
  );
};

export default FrachiesQuary;
