import React from "react";
import "../css_styles/Jobs.css";
import { Link } from "react-router-dom";
const Jobs = ({ job }) => {
  return (
    <div className="jobs_boss">
      <div className="jobs">
        <div className="jobs_header">
          {/* <div className="jobs_header1">JOBS</div> */}
          {/* <div className="celeb_header2">DETAIL</div> */}
        </div>
        <div className="jobs_container">
          <Link to={`/job-detail/${job.id}`} state={{ models: 'JOB'}}>
            <div className="jobs_items1">
              <img src={job.image} alt="" />
              <div className="jobs_text">
                <h2 className="jobs_text1">{job.title}</h2>
              </div>
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Jobs;
