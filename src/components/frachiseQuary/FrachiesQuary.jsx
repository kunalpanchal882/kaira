import { useState, useEffect } from "react";
import style from "./FrachiseQuary.module.css";
import { MdExpandMore } from "react-icons/md";
import { GiNextButton } from "react-icons/gi";
import axios from "axios";

const FrachiesQuary = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // pagination state
  const [franchiseQueries, setFranchiseQueries] = useState([]); // ✅ state to store data
  const queriesPerPage = 10;

  // ✅ Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://192.168.1.49:5000/form/franchies");
        setFranchiseQueries(res.data.franchies); // assuming backend returns { franchies: [...] }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

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
          <div key={query._id} className={style.frenchiesQuaryBox}>
            <div
              className={style.frenchiesQuaryDetails}
              onClick={() => toggleExpand(query._id)}
            >
              <p>{query.firstName} {query.lastName}</p>
              <MdExpandMore
                className={`${style.iconcsMore} ${
                  expandedId === query._id ? style.rotateIcon : ""
                }`}
              />
            </div>

            {expandedId === query._id && (
              <div className={style.frenchiesQuaryBox}>
                <p><strong>Name:</strong> {query.firstName} {query.lastName}</p>
                <p><strong>City:</strong> {query.city}</p>
                <p><strong>Address:</strong> {query.address}</p>
                <p><strong>Email:</strong> {query.email}</p>
                <p><strong>Mobile:</strong> {query.mobile}</p>
                <p><strong>Occupation:</strong> {query.currentOccupation}</p>
                <p><strong>Investment Plan:</strong> {query.investmentBudget}</p>
                <p><strong>Timeline:</strong> {query.investmentTimeline}</p>
                <p><strong>Property:</strong> {query.propertyType}</p>
                <p><strong>Reason:</strong> {query.interestReason}</p>
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
          <GiNextButton className={style.previweICone} />
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
