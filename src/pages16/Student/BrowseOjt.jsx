import React, { useState } from "react";

import Header from "../../Components16/Common/Header";
import Sidebar from "../../Components16/Common/Sidebar";
import OpportunityCard from "../../Components16/Common/OpportunityCard";

import tcsLogo from "../../assets/logos/tcslogo.png";
import infosysLogo from "../../assets/logos/Infosyslogo.png";
import wiproLogo from "../../assets/logos/WiproLogo.png";
import cognizantLogo from "../../assets/logos/cognizantlogo.png";


// ===============================
// OJT OPPORTUNITIES DATA
// ===============================

const opportunities = [
  {
    id: 1,
    logo: tcsLogo,
    title: "Python Developer Intern",
    company: "Tata Consultancy Services",
    location: "Pune, Maharashtra",
    duration: "3 Months",
    stipend: "5,000",
    postedOn: "17 May 2025",
    skills: ["Python", "Django", "SQL", "REST API"],
    isNew: true,
  },

  {
    id: 2,
    logo: infosysLogo,
    title: "Web Development Intern",
    company: "Infosys Limited",
    location: "Bangalore, Karnataka",
    duration: "4 Months",
    stipend: "12,000",
    postedOn: "16 May 2025",
    skills: ["HTML", "CSS", "JavaScript"],
    isNew: true,
  },

  {
    id: 3,
    logo: wiproLogo,
    title: "Data Analytics Intern",
    company: "Wipro Technologies",
    location: "Hyderabad, Telangana",
    duration: "3 Months",
    stipend: "14,000",
    postedOn: "16 May 2025",
    skills: ["Python", "Excel", "Power BI"],
    isNew: true,
  },

  {
    id: 4,
    logo: cognizantLogo,
    title: "Software Engineering Intern",
    company: "Cognizant Technology Solutions",
    location: "Chennai, Tamil Nadu",
    duration: "6 Months",
    stipend: "16,000",
    postedOn: "14 May 2025",
    skills: ["Java", "Spring Boot", "MySQL", "Git"],
    isNew: true,
  },
];


// ===============================
// MAIN PAGE
// ===============================

export default function BrowseOjt() {

  const [bookmarked, setBookmarked] = useState([]);

  // Bookmark toggle
  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };


  return (
    <div className="min-h-screen bg-gray-50">
  <Header />
  <div className="flex pt-16">
    <Sidebar />
    <main className="ml-64 flex-1 p-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-3">
            Dashboard
            <span className="mx-2">›</span>
            Browse OJT Opportunities
          </div>


          {/* Page Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Browse OJT Opportunities
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Explore and apply for the best OJT opportunities
              that match your skills and interests.
            </p>

          </div>


          {/* ================= SEARCH BAR ================= */}

          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-5">

            <div className="flex flex-wrap gap-3">

              {/* Search */}
              <div className="flex-1 min-w-[220px] border border-gray-200 rounded-md flex items-center px-3">
                <input
                  type="text"
                  placeholder="Search by role, company, skills..."
                  className="w-full py-2 outline-none text-sm"
                />
              </div>

              {/* Category */}
              <select className="border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600">

                <option>All Categories</option>
                <option>Development</option>
                <option>Data Analytics</option>
                <option>Design</option>
              </select>

              {/* Location */}
              <select className="border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600">

                <option>All Locations</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>

              </select>


              {/* Duration */}
              <select className="border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600">
                <option>All Durations</option>
                <option>3 Months</option>
                <option>4 Months</option>
                <option>6 Months</option>
              </select>
              {/* Sort */}
              <select className="border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600">
                <option>Sort By: Newest</option>
                <option>Oldest</option>
              </select>
            </div>

            {/* Total */}
            <div className="mt-4 text-sm text-gray-500">

              Total{" "}

              <span className="font-semibold text-gray-700">
                24
              </span>

              {" "}Opportunities Found

            </div>

          </div>



          {/* ================= PAGE GRID ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-5">


            {/* ================= OPPORTUNITY LIST ================= */}

            <div className="space-y-4">

              {opportunities.map((opportunity) => (

                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  isBookmarked={bookmarked.includes(opportunity.id)}
                  onToggleBookmark={toggleBookmark}
                />

              ))}


              {/* ================= PAGINATION ================= */}

              <div className="flex justify-center items-center gap-2 pt-4">
                <button className="px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-500">
                  ‹
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-md text-sm">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-md text-sm">
                  3
                </button>
                <span className="px-2 text-gray-400">
                  ...
                </span>
                <button className="px-3 py-2 border border-gray-200 rounded-md text-sm">
                  6
                </button>
                <button className="px-3 py-2 border border-gray-200 rounded-md text-sm">
                  ›
                </button>
              </div>
            </div>



            {/* ================= FILTER PANEL ================= */}

            <div className="bg-white border border-gray-200 rounded-lg p-5 h-fit">

              <div className="flex justify-between items-center mb-5">

                <h2 className="font-semibold text-gray-800">
                  Filters
                </h2>

                <button className="text-sm text-blue-600">
                  ↻ Reset All
                </button>

              </div>


              {/* Keyword */}

              <label className="text-sm font-medium text-gray-700">
                Keyword
              </label>

              <input
                type="text"
                placeholder="Search by role, skills..."
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4 outline-none"
              />


              {/* Category */}

              <label className="text-sm font-medium text-gray-700">
                Category
              </label>

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4">

                <option>All Categories</option>
                <option>Development</option>
                <option>Data Analytics</option>
                <option>Design</option>

              </select>


              {/* Location */}

              <label className="text-sm font-medium text-gray-700">
                Location
              </label>

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4">

                <option>All Locations</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Bangalore</option>

              </select>


              {/* Duration */}

              <label className="text-sm font-medium text-gray-700">
                Duration
              </label>

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4">

                <option>All Durations</option>
                <option>3 Months</option>
                <option>4 Months</option>
                <option>6 Months</option>

              </select>


              {/* Stipend */}

              <label className="text-sm font-medium text-gray-700">
                Stipend Range
              </label>

              <input
                type="range"
                min="0"
                max="30000"
                className="w-full mt-3"
              />

              <div className="flex justify-between text-xs text-gray-500 mb-5">

                <span>₹0</span>

                <span>₹30,000+</span>

              </div>
           <label className="text-sm font-medium text-gray-700">
               Skills
              </label>

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4">

                <option>Select Skills</option>
                <option>HTML & CSS</option>
                <option>React.js</option>
                <option>JavaScript</option>

              </select>
              <label className="text-sm font-medium text-gray-700">
              Posted Date
              </label>

              <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm mt-2 mb-4">

                <option>Any Time</option>
                
              </select>



              {/* Apply Filter */}

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md text-sm font-medium">

                Apply Filters

              </button>

            </div>

          </div>



          {/* ================= BOTTOM INFORMATION CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">


            {/* Card 1 */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">

              <h3 className="font-semibold text-sm text-gray-800">
                Find the Best Opportunities
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Discover top OJT opportunities from leading companies.
              </p>

            </div>


            {/* Card 2 */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">

              <h3 className="font-semibold text-sm text-gray-800">
                Secure & Trusted
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                All companies are verified for safety and trust.
              </p>

            </div>


            {/* Card 3 */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">

              <h3 className="font-semibold text-sm text-gray-800">
                Easy Application
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Apply in a few simple steps and track your application.
              </p>

            </div>


            {/* Card 4 */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">

              <h3 className="font-semibold text-sm text-gray-800">
                Grow Your Career
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                Gain real-world experience and enhance your skills.
              </p>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}