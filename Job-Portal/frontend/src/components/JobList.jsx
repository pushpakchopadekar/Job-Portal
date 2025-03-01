// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const JobList = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/job?_limit=3" : "/api/job";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching jobs");
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <>
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

JobList.propTypes = {
  isHome: PropTypes.bool,
};

export default JobList;
