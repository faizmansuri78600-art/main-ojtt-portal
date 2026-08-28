import React, { useState } from "react";
import "./index.css"; // keep this if this is where your Tailwind directives are imported — adjust path if different
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import AssignedStudents from "./pages/faculty/AssignedStudents";
import StudentDetails from "./pages/faculty/StudentDetails";
import ReviewReports from "./pages/faculty/ReviewReports";
import ErrorBoundary from "./components/faculty/ErrorBoundary";
import ApproveDiary from "./pages/faculty/ApproveDiary";
import Evaluation from "./pages/faculty/Evaluation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages01/Company/CompanyDashboard";
import CompanyProfile from "./pages01/Company/CompanyProfile";
import ManageOjtOpportunities from "./pages01/Company/ManageOjtOpportunities";
import Certificate from "./pages01/Company/Certificate";
import NotificationsSettings from "./pages01/Company/NotificationsSettings";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigate = (page) => {
    console.log("Navigating to:", page);

    if (page === "internalEvaluation" || page === "internal-evaluation") {
      setCurrentPage("evaluation");
      return;
    }

    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "dashboard" && (
        <FacultyDashboard onNavigate={handleNavigate} />
      )}

      {currentPage === "students" && (
        <AssignedStudents onNavigate={handleNavigate} />
      )}

      {currentPage === "studentDetails" && (
        <StudentDetails onNavigate={handleNavigate} />
      )}

      {currentPage === "reports" && (
        <ErrorBoundary>
          <ReviewReports onNavigate={handleNavigate} />
        </ErrorBoundary>
      )}

      {currentPage === "approveDiary" && (
        <ErrorBoundary>
          <ApproveDiary onNavigate={handleNavigate} />
        </ErrorBoundary>
      )}

      {currentPage === "evaluation" && (
        <Evaluation onNavigate={handleNavigate} />
      )}
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/company-profile"
          element={<CompanyProfile />}
        />

        <Route
          path="/manage-ojt-opportunities"
          element={<ManageOjtOpportunities />}
        />

        <Route
          path="/certificate"
          element={<Certificate />}
        />

        <Route
          path="/notifications-settings"
          element={<NotificationsSettings />}
        />

      </Routes>

    </BrowserRouter>
    </>
  );
}
export default App;