import { useState } from "react";
import Header from "../../Components16/Common/Header";
import Sidebar from "../../Components16/Common/Sidebar";
import tcsLogo from "../../assets/logos/tcslogo.png";
import MyAvtar from "../../assets/images/Myavtar.jpg";

import {
  ChevronRight,
  Pencil,
  Download,
  Camera,
  CheckCircle2,
  Circle,
  Mail,
  Phone,
  Building2,
  MapPin,
  User,
  FileText,
  Eye,
  RefreshCw,
  Globe,
  ExternalLink,
  Lock,
  ShieldCheck,
  Bell,
  MessageSquare,
  EyeOff,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MyProfile() {
  // ---- Static sample data ----

  const student = {
    name: "Ayesha Shaikh",
    status: "Active Student",
    rollNo: "BCA-2023-045",
    department: "Bachelor of Computer Application",
    semester: "Semester VI",
    studentId: "AISC2023045",
    email: "ayesha.shaikh@aisc.edu.in",
    mobile: "+91 98765 43210",
  };

  const profileCompletion = 90;

  const completionChecklist = [
    { label: "Personal Info", done: true },
    { label: "Academic Info", done: true },
    { label: "Skills", done: true },
    { label: "Documents", done: true },
    { label: "Resume Upload", done: false },
  ];

  const personalInfo = [
    { label: "Full Name", value: "Ayesha Shaikh" },
    { label: "Gender", value: "Female" },
    { label: "Date of Birth", value: "15 Jun 2004" },
    { label: "Address", value: "Pune, Maharashtra" },
    { label: "City", value: "Pune" },
    { label: "State", value: "Maharashtra" },
    { label: "PIN Code", value: "411034" },
    { label: "Blood Group", value: "B+" },
    { label: "Emergency Contact", value: "+91 87654 32109 (Father)" },
  ];

  const academicInfo = [
    {
      label: "College Name",
      value: "Abeda Inamdar Senior College",
    },
    {
      label: "Course",
      value: "Bachelor of Computer Application",
    },
    { label: "Department", value: "BCA" },
    { label: "Roll Number", value: "BCA-2023-045" },
    {
      label: "University Reg. No.",
      value: "MU12345678910",
    },
    { label: "Academic Year", value: "2023 - 2026" },
    { label: "Admission Year", value: "2023" },
  ];

  const cgpa = "8.45 / 10.00";

  const skills = [
    "Python",
    "Flask",
    "PostgreSQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Java",
    "Problem Solving",
    "DBMS",
    "OOPs",
    "Communication",
    "Teamwork",
    "Leadership",
  ];

  const resume = {
    fileName: "Ayesha_Shaikh_Resume.pdf",
    uploadedOn: "15 May 2025",
    size: "245 KB",
  };

  const documents = [
    { label: "Aadhar Card", sub: "aadhar.pdf" },
    { label: "College ID Card", sub: "idcard.pdf" },
    { label: "Bonafide Certificate", sub: "bonafide.pdf" },
    { label: "10th Marksheet", sub: "10th.pdf" },
    { label: "12th Marksheet", sub: "12th.pdf" },
  ];

  const ojtInfo = {
    company: "Tata Consultancy Services",
    mentor: "Mr. Rahul Sharma",
    joiningDate: "01 Apr 2025",
    endDate: "30 Jun 2025",
    location: "Pune, Maharashtra",
    hoursCompleted: 85,
    hoursTotal: 120,
    attendance: 92,
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ayesha-shaikh",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "github.com/ayesha-shaikh",
      icon: FaGithub,
    },
    {
      label: "Portfolio",
      value: "ayesha-shaikh.dev",
      icon: Globe,
    },
    {
      label: "Email",
      value: "ayesha.shaikh@aisc.edu.in",
      icon: Mail,
    },
  ];

  // ---- Account settings toggle state ----

  const [settings, setSettings] = useState({
    twoFactor: true,
    emailNotifications: true,
    smsNotifications: true,
    privacySettings: false,
  });

  const toggleSetting = (key) =>
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  // ---- Circular progress math ----

  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference - (profileCompletion / 100) * circumference;

  // ---- OJT hours progress bar ----

  const hoursPercent = Math.round(
    (ojtInfo.hoursCompleted / ojtInfo.hoursTotal) * 100
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />

     <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar activePage="My Profile" />

        <main className="flex-1 ml-64 overflow-y-auto p-6">
          {/* ===== Breadcrumb ===== */}

          <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
            <span>Dashboard</span>
            <ChevronRight size={12} />
            <span className="text-gray-600 font-medium">
              My Profile
            </span>
          </div>

          {/* ===== Page title + actions ===== */}

          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                My Profile
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage your personal, academic and professional
                information.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 text-sm font-medium text-blue-600 border border-blue-200 bg-white px-4 py-2 rounded-md hover:bg-blue-50">
                <Pencil size={14} />
                Edit Profile
              </button>

              <button className="flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                <Download size={14} />
                Download Resume
              </button>
            </div>
          </div>

          {/* ===== Profile header card ===== */}

          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <img
                  src={MyAvtar}
                  alt={student.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                />

                <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white">
                  <Camera size={11} className="text-white" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {student.name}
                  </h2>

                  <span className="text-[10px] font-medium text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5">
                    {student.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <User size={13} />
                    Roll No: {student.rollNo}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Building2 size={13} />
                    Department: {student.department}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <User size={13} />
                    Student ID: {student.studentId}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FileText size={13} />
                    Semester: {student.semester}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Mail size={13} />
                    Email: {student.email}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Phone size={13} />
                    Mobile: {student.mobile}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile completion */}

            <div className="flex items-center gap-5 shrink-0">
              <div className="relative w-24 h-24">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 96 96"
                >
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />

                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-gray-800">
                    {profileCompletion}%
                  </span>

                  <span className="text-[9px] text-gray-400">
                    Completed
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs">
                {completionChecklist.map(({ label, done }) => (
                  <li
                    key={label}
                    className="flex items-center gap-1.5"
                  >
                    {done ? (
                      <CheckCircle2
                        size={13}
                        className="text-green-500"
                      />
                    ) : (
                      <Circle
                        size={13}
                        className="text-gray-300"
                      />
                    )}

                    <span
                      className={
                        done
                          ? "text-gray-600"
                          : "text-gray-400"
                      }
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== Row 1: Personal / Academic / Skills ===== */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Personal Information */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Personal Information
                </h3>

                <button className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <ul className="space-y-2 text-xs">
                {personalInfo.map(({ label, value }) => (
                  <li
                    key={label}
                    className="flex justify-between gap-3"
                  >
                    <span className="text-gray-400">
                      {label}
                    </span>

                    <span className="text-gray-700 font-medium text-right">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Information */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Academic Information
                </h3>

                <button className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <ul className="space-y-2 text-xs mb-3">
                {academicInfo.map(({ label, value }) => (
                  <li
                    key={label}
                    className="flex justify-between gap-3"
                  >
                    <span className="text-gray-400">
                      {label}
                    </span>

                    <span className="text-gray-700 font-medium text-right">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-md px-3 py-2">
                <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                  <FileText
                    size={13}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-blue-500">
                    CGPA
                  </p>

                  <p className="text-sm font-bold text-gray-800">
                    {cgpa}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Skills
                </h3>

                <button className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                  <Pencil size={12} />
                  Edit Skills
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                Resume
              </h4>

              <div className="flex items-center gap-3 border border-gray-100 rounded-md p-2.5">
                <div className="w-8 h-8 rounded-md bg-red-50 flex items-center justify-center shrink-0">
                  <FileText
                    size={14}
                    className="text-red-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {resume.fileName}
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Uploaded on {resume.uploadedOn} ·{" "}
                    {resume.size}
                  </p>
                </div>

                <button
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="View resume"
                >
                  <Eye size={15} />
                </button>

                <button
                  className="text-gray-400 hover:text-blue-600"
                  aria-label="Download resume"
                >
                  <Download size={15} />
                </button>
              </div>

              <button className="w-full flex items-center justify-center gap-1.5 text-xs font-medium text-blue-600 border border-blue-100 bg-blue-50 py-2 rounded-md mt-2 hover:bg-blue-100">
                <RefreshCw size={12} />
                Replace
              </button>
            </div>
          </div>

          {/* ===== Row 2: Documents / OJT Information / Social Links ===== */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Documents */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Documents
                </h3>

                <button className="text-xs text-blue-600 font-medium">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {documents.map(({ label, sub }) => (
                  <div
                    key={label}
                    className="border border-gray-100 rounded-md p-2.5 flex flex-col items-center text-center"
                  >
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center mb-2">
                      <FileText
                        size={16}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="text-xs font-medium text-gray-700 leading-tight">
                      {label}
                    </p>

                    <p className="text-[10px] text-gray-400 truncate w-full">
                      {sub}
                    </p>

                    <span className="flex items-center gap-1 text-[10px] text-green-600 font-medium mt-1">
                      <CheckCircle2 size={11} />
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* OJT Information */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  OJT Information
                </h3>

                <button className="text-xs text-blue-600 font-medium">
                  View Details
                </button>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={tcsLogo}
                    alt="Company"
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm font-semibold text-gray-800">
                  {ojtInfo.company}
                </p>
              </div>

              <ul className="space-y-2 text-xs mb-4">
                <li className="flex items-center gap-2 text-gray-500">
                  <User size={13} />
                  Mentor:
                  <span className="text-gray-700 font-medium ml-auto">
                    {ojtInfo.mentor}
                  </span>
                </li>

                <li className="flex items-center gap-2 text-gray-500">
                  <FileText size={13} />
                  Joining Date:
                  <span className="text-gray-700 font-medium ml-auto">
                    {ojtInfo.joiningDate}
                  </span>
                </li>

                <li className="flex items-center gap-2 text-gray-500">
                  <FileText size={13} />
                  Expected End Date:
                  <span className="text-gray-700 font-medium ml-auto">
                    {ojtInfo.endDate}
                  </span>
                </li>

                <li className="flex items-center gap-2 text-gray-500">
                  <MapPin size={13} />
                  Location:
                  <span className="text-gray-700 font-medium ml-auto">
                    {ojtInfo.location}
                  </span>
                </li>
              </ul>

              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">
                    Hours Completed
                  </span>

                  <span className="font-medium text-gray-700">
                    {ojtInfo.hoursCompleted} /{" "}
                    {ojtInfo.hoursTotal} ({hoursPercent}%)
                  </span>
                </div>

                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${hoursPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">
                    Attendance
                  </span>

                  <span className="font-medium text-gray-700">
                    {ojtInfo.attendance}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${ojtInfo.attendance}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Social &amp; Professional Links
                </h3>

                <button className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                  <Pencil size={12} />
                  Edit
                </button>
              </div>

              <ul className="space-y-3">
                {socialLinks.map(
                  ({ label, value, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center shrink-0">
                        <Icon
                          size={14}
                          className="text-gray-600"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-400">
                          {label}
                        </p>

                        <p className="text-xs font-medium text-gray-700 truncate">
                          {value}
                        </p>
                      </div>

                      <ExternalLink
                        size={13}
                        className="text-gray-300 shrink-0"
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* ===== Account Settings ===== */}

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Account Settings
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
              {/* Change Password */}

              <button className="flex items-center gap-3 py-3 lg:pr-4 text-left hover:bg-gray-50 rounded-md">
                <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                  <Lock
                    size={14}
                    className="text-blue-600"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700">
                    Change Password
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Update your password regularly
                  </p>
                </div>

                <ChevronRight
                  size={14}
                  className="text-gray-300 shrink-0"
                />
              </button>

              <SettingToggle
                icon={ShieldCheck}
                title="Two-Factor Authentication"
                sub="Add an extra layer of security"
                checked={settings.twoFactor}
                onToggle={() =>
                  toggleSetting("twoFactor")
                }
              />

              <SettingToggle
                icon={Bell}
                title="Email Notifications"
                sub="Receive email alerts and updates"
                checked={settings.emailNotifications}
                onToggle={() =>
                  toggleSetting("emailNotifications")
                }
              />

              <SettingToggle
                icon={MessageSquare}
                title="SMS Notifications"
                sub="Receive SMS alerts and updates"
                checked={settings.smsNotifications}
                onToggle={() =>
                  toggleSetting("smsNotifications")
                }
              />
            </div>

            {/* Privacy Settings */}

            <button className="flex items-center gap-3 pt-3 mt-1 border-t border-gray-100 w-full text-left hover:bg-gray-50 rounded-md">
              <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center shrink-0">
                <EyeOff
                  size={14}
                  className="text-gray-500"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-700">
                  Privacy Settings
                </p>

                <p className="text-[10px] text-gray-400">
                  Manage your privacy preferences
                </p>
              </div>

              <ChevronRight
                size={14}
                className="text-gray-300 shrink-0"
              />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

// Small local toggle row used only inside Account Settings

function SettingToggle({
  icon: Icon,
  title,
  sub,
  checked,
  onToggle,
}) {
  return (
    <div className="flex items-center gap-3 py-3 lg:px-4">
      <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
        <Icon
          size={14}
          className="text-blue-600"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-gray-700">
          {title}
        </p>

        <p className="text-[10px] text-gray-400">
          {sub}
        </p>
      </div>

      <button
        onClick={onToggle}
        aria-pressed={checked}
        aria-label={`Toggle ${title}`}
        className={`w-9 h-5 rounded-full flex items-center px-0.5 shrink-0 transition-colors ${
          checked
            ? "bg-blue-600 justify-end"
            : "bg-gray-200 justify-start"
        }`}
      >
        <span className="w-4 h-4 rounded-full bg-white block" />
      </button>
    </div>
  );
}