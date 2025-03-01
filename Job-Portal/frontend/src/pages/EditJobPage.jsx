// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const EditJobPage = ({ editJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: job.type,
    title: job.title,
    description: job.description,
    salary: job.salary,
    location: job.location,
    company: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  });

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id: job.id,
      type: formData.type,
      title: formData.title,
      description: formData.description,
      salary: formData.salary,
      location: formData.location,
      company: {
        name: formData.company,
        description: formData.companyDescription,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      },
    };

    editJobSubmit(updatedJob);
    toast.warning("Job updated successfully");
    return navigate(`/job/${job.id}`);
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Update Job
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={formData.type}
                  onChange={(e) => {
                    setFormData({ ...formData, type: e.target.value });
                  }}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Software Developer, Frontend Engineer, etc"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={formData.salary}
                  onChange={(e) => {
                    setFormData({ ...formData, salary: e.target.value });
                  }}
                >
                  <option value="Under €50K">Under €50K</option>
                  <option value="€50K - 60K">€50K - €60K</option>
                  <option value="€60K - 70K">€60K - €70K</option>
                  <option value="€70K - 80K">€70K - €80K</option>
                  <option value="€80K - 90K">€80K - €90K</option>
                  <option value="€90K - 100K">€90K - €100K</option>
                  <option value="€100K - 125K">€100K - €125K</option>
                  <option value="€125K - 150K">€125K - €150K</option>
                  <option value="€150K - 175K">€150K - €175K</option>
                  <option value="€175K - 200K">€175K - €200K</option>
                  <option value="Over €200K">Over €200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  required
                  value={formData.location}
                  onChange={(e) => {
                    setFormData({ ...formData, location: e.target.value });
                  }}
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  required
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={formData.companyDescription}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      companyDescription: e.target.value,
                    });
                  }}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => {
                    setFormData({ ...formData, contactEmail: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={formData.contactPhone}
                  onChange={(e) => {
                    setFormData({ ...formData, contactPhone: e.target.value });
                  }}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

EditJobPage.propTypes = { editJobSubmit: PropTypes.func };

export default EditJobPage;
