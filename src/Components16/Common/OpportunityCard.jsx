import React from "react";
import {
  MapPin,
  Clock,
  IndianRupee,
  Bookmark,
} from "lucide-react";

export default function OpportunityCard({
  opportunity,
  isBookmarked,
  onToggleBookmark,
}) {
  const {
    id,
    logo,
    title,
    company,
    location,
    duration,
    stipend,
    postedOn,
    skills,
    isNew,
  } = opportunity;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-4 hover:shadow-sm transition-shadow">

      {/* Company Logo */}
      <div className="w-14 h-14 rounded-md border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 bg-gray-50">
        <img
          src={logo}
          alt={company}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">

        <div className="flex items-center gap-2">

          <h3 className="text-sm font-semibold text-gray-800">
            {title}
          </h3>

          {isNew && (
            <span className="text-[10px] font-semibold text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5">
              New
            </span>
          )}

        </div>

        <p className="text-sm text-gray-500 mt-0.5">
          {company}
        </p>

        {/* Details */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2">

          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {location}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={13} />
            {duration}
          </span>

          <span className="flex items-center gap-1">
            <IndianRupee size={13} />
            {stipend}/Month
          </span>

        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end justify-between h-full shrink-0 gap-3">

        <button
          aria-label={
            isBookmarked
              ? "Remove bookmark"
              : "Save opportunity"
          }
          onClick={() => onToggleBookmark(id)}
          className={
            isBookmarked
              ? "text-blue-600"
              : "text-gray-400 hover:text-blue-600"
          }
        >
          <Bookmark
            size={18}
            fill={isBookmarked ? "currentColor" : "none"}
          />
        </button>

        <p className="text-xs text-gray-400 whitespace-nowrap">
          Posted on {postedOn}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md whitespace-nowrap">
          View Details
        </button>

      </div>

    </div>
  );
}