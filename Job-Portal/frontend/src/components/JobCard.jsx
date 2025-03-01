// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import PropTypes from "prop-types";
import { FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  let description = job.description;
  if (!showFullDes) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>

          <button
            onClick={() => setShowFullDes((prevState) => !prevState)}
            className="text-indigo-500 mb-2 hover:text-indigo-600"
          >
            {showFullDes ? "Show Less" : "Read More"}
          </button>

          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-indigo-700 mb-3">
              <FaMap className="inline text-lg mb-1 mr-1 text-blue-800" />
              {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
