import React, { useState } from "react";
import "./index.css"; // keep this if this is where your Tailwind directives are imported — adjust path if different
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import AssignedStudents from "./pages/faculty/AssignedStudents";
import StudentDetails from "./pages/faculty/StudentDetails";
import ReviewReports from "./pages/faculty/ReviewReports";
import ErrorBoundary from "./components/faculty/ErrorBoundary";
import ApproveDiary from "./pages/faculty/ApproveDiary";
import Evaluation from "./pages/faculty/Evaluation";
import Navbar from "./components201/Navbar";
import Footer from "./components201/Footer";
import AppRoutes201 from "./routes201/AppRoutes201";

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

      <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <AppRoutes201 />
      </main>

      <Footer />
    </div>
    </>
  );
}
export default App;