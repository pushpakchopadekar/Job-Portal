
import React from "react";
import {

  Route,
 
  createBrowserRouter,
 
  createRoutesFromElements,
  
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { toast } from "react-toastify";

const App = () => {
  // Add a new job to the database
  const addJob = async (newJob) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      return;
    } catch (error) {
      toast.error("Error adding job");
    }
  };

  // Delete a job from the database
  const deleteJob = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`/api/job/${id}`, {
        method: "DELETE",
      });
      return;
    } catch (error) {
      toast.error("Error deleting job");
    }
  };

  // Edit a job in the database
  const editJob = async (updatedJob) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`/api/job/${updatedJob.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJob),
      });
      return;
    } catch (error) {
      toast.error("Error updating job");
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/job/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage editJobSubmit={editJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
