import { useState } from "react";
import Header from "../../Components16/Common/Header";
import Sidebar from "../../Components16/Common/Sidebar";
 
import {
  ChevronRight,
  User,
  Lock,
  KeyRound,
  Bell,
  ShieldCheck,
  Palette,
  Shield,
  Smartphone,
  Camera,
  Pencil,
  Globe,
  Clock,
  Key,
  Download,
  UserX,
  LogOut,
  ShieldQuestion,
  Headset,
} from "lucide-react";
 
// ===== Reusable pieces =====
 
function SettingsMenuItem({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-left transition-colors ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon size={16} className={active ? "text-blue-600" : "text-gray-400"} />
      {label}
    </button>
  );
}
 
function ToggleSwitch({ checked, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={checked}
      aria-label={label}
      className={`w-10 h-[22px] rounded-full flex items-center px-0.5 shrink-0 transition-colors ${
        checked ? "bg-blue-600 justify-end" : "bg-gray-200 justify-start"
      }`}
    >
      <span className="w-4 h-4 rounded-full bg-white block" />
    </button>
  );
}
 
function SettingRow({ title, sub, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
 
function CardHeader({ icon: Icon, title, sub }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gray-600" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-400">{sub}</p>
      </div>
    </div>
  );
}
 
function QuickAction({ icon: Icon, label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 text-left"
    >
      <Icon size={16} className={danger ? "text-red-500" : "text-gray-500"} />
      <span className={`text-sm flex-1 ${danger ? "text-red-500" : "text-gray-700"}`}>{label}</span>
      <ChevronRight size={15} className="text-gray-300" />
    </button>
  );
}
 
// ===== Settings menu config =====
const menuItems = [
  { label: "Profile Settings", icon: User },
  { label: "Account Settings", icon: Lock },
  { label: "Password", icon: KeyRound },
  { label: "Notification Settings", icon: Bell },
  { label: "Privacy Settings", icon: ShieldCheck },
  { label: "Appearance", icon: Palette },
  { label: "Security", icon: Shield },
  { label: "Connected Devices", icon: Smartphone },
];
 
export default function Settings() {
  const [activeMenu, setActiveMenu] = useState("Profile Settings");
 
  // ===== Notification toggles (functional via useState) =====
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    portal: true,
  });
  const toggleNotification = (key) =>
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
 
  // ===== Dropdowns (functional via useState) =====
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("(GMT+05:30) Asia/Kolkata");
 
  // ===== Placeholder actions =====
  const handleEditProfile = () => alert("Open Edit Profile form");
  const handleEnable2FA = () => alert("Enabling Two-Factor Authentication");
  const handleQuickAction = (label) => alert(label);
 
  // ===== Profile mock data =====
  const profile = {
    fullName: "Mohammad Zaid",
    enrollment: "AISC/OJT/2024/1015",
    email: "zaid.mansuri@example.com",
    department: "BCA Science",
    phone: "+91 98765 43210",
    role: "Student",
  };
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar activePage="Settings" />
 
      {/* Offsets keep content clear of the fixed Header and Sidebar.
          overflow-x-hidden stops the page from ever scrolling horizontally. */}
      <main className="ml-64 pt-16 min-h-screen overflow-x-hidden flex flex-col">
        <div className="p-6 max-w-full flex-1">
          {/* ===== Page header ===== */}
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <div className="flex items-center gap-1 text-sm mt-1 mb-5">
            <span className="text-blue-600 font-medium">Dashboard</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-500">Settings</span>
          </div>
 
          {/* ===== 3-column layout ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* LEFT: Settings menu */}
            <div className="lg:col-span-1 min-w-0">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-gray-400 tracking-wide px-3 pt-1 pb-2">
                  SETTINGS MENU
                </p>
                <div className="space-y-1">
                  {menuItems.map(({ label, icon }) => (
                    <SettingsMenuItem
                      key={label}
                      label={label}
                      icon={icon}
                      active={activeMenu === label}
                      onClick={() => setActiveMenu(label)}
                    />
                  ))}
                </div>
              </div>
            </div>
 
            {/* MIDDLE: main setting cards */}
            <div className="lg:col-span-2 min-w-0 space-y-4">
              {/* Profile Settings */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Profile Settings</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Manage your personal information and profile details.
                    </p>
                  </div>
                  <button
                    onClick={handleEditProfile}
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-600 border border-blue-200 rounded-md px-3 py-1.5 hover:bg-blue-50 whitespace-nowrap"
                  >
                    <Pencil size={12} /> Edit Profile
                  </button>
                </div>
 
                <div className="flex flex-wrap gap-6">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                      <User size={36} className="text-gray-400" />
                    </div>
                    <button
                      aria-label="Change profile photo"
                      className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white"
                    >
                      <Camera size={11} className="text-white" />
                    </button>
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 flex-1 min-w-[220px]">
                    <div>
                      <p className="text-xs text-gray-400">Full Name</p>
                      <p className="text-sm font-medium text-gray-700">{profile.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Enrollment Number</p>
                      <p className="text-sm font-medium text-gray-700">{profile.enrollment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email Address</p>
                      <p className="text-sm font-medium text-gray-700">{profile.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Department</p>
                      <p className="text-sm font-medium text-gray-700">{profile.department}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone Number</p>
                      <p className="text-sm font-medium text-gray-700">{profile.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Role</p>
                      <p className="text-sm font-medium text-gray-700">{profile.role}</p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Account Settings */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <CardHeader icon={Globe} title="Account Settings" sub="Manage your account preferences." />
                <div className="mt-2">
                  <SettingRow title="Language" sub="Choose your preferred language.">
                    <div className="relative">
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="border border-gray-200 rounded-md py-2 pl-8 pr-8 text-sm text-gray-600 w-[170px]"
                      >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                      </select>
                      <Globe size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </SettingRow>
 
                  <SettingRow title="Timezone" sub="Select your current timezone.">
                    <div className="relative">
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="border border-gray-200 rounded-md py-2 pl-8 pr-8 text-sm text-gray-600 w-[220px]"
                      >
                        <option>(GMT+05:30) Asia/Kolkata</option>
                        <option>(GMT+00:00) UTC</option>
                        <option>(GMT-05:00) US Eastern</option>
                      </select>
                      <Clock size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </SettingRow>
                </div>
              </div>
 
              {/* Notification Settings */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <CardHeader icon={Bell} title="Notification Settings" sub="Manage how you receive notifications." />
                <div className="mt-2">
                  <SettingRow title="Email Notifications" sub="Receive important updates on your email.">
                    <ToggleSwitch
                      checked={notifications.email}
                      onToggle={() => toggleNotification("email")}
                      label="Toggle email notifications"
                    />
                  </SettingRow>
                  <SettingRow title="SMS Notifications" sub="Receive important updates on your mobile.">
                    <ToggleSwitch
                      checked={notifications.sms}
                      onToggle={() => toggleNotification("sms")}
                      label="Toggle SMS notifications"
                    />
                  </SettingRow>
                  <SettingRow title="Portal Notifications" sub="Show notifications for updates and alerts.">
                    <ToggleSwitch
                      checked={notifications.portal}
                      onToggle={() => toggleNotification("portal")}
                      label="Toggle portal notifications"
                    />
                  </SettingRow>
                </div>
              </div>
 
              {/* Security */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <CardHeader icon={Shield} title="Security" sub="Manage your security preferences." />
                <div className="mt-2">
                  <div className="flex items-center justify-between gap-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Two-Factor Authentication (2FA)</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Add an extra layer of security to your account.
                      </p>
                    </div>
                    <button
                      onClick={handleEnable2FA}
                      className="flex items-center gap-1.5 text-xs font-medium text-blue-600 border border-blue-200 rounded-md px-3 py-1.5 hover:bg-blue-50 whitespace-nowrap shrink-0"
                    >
                      <Lock size={12} /> Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            </div>
 
            {/* RIGHT: Quick Actions / Account Status / Need Help */}
            <div className="lg:col-span-1 min-w-0 space-y-4">
              {/* Quick Actions */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">Quick Actions</h3>
                <div className="mt-2">
                  <QuickAction icon={Key} label="Change Password" onClick={() => handleQuickAction("Change Password")} />
                  <QuickAction icon={Download} label="Download My Data" onClick={() => handleQuickAction("Download My Data")} />
                  <QuickAction icon={UserX} label="Deactivate Account" onClick={() => handleQuickAction("Deactivate Account")} danger />
                  <QuickAction icon={LogOut} label="Log Out From All Devices" onClick={() => handleQuickAction("Log Out From All Devices")} />
                </div>
              </div>
 
              {/* Account Status */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Account Status</h3>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-600">Account Active</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Your account is secure and all systems are running fine.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Need Help */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldQuestion size={16} className="text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-800">Need Help?</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  If you face any issue with your account settings, please contact the support team.
                </p>
                <button className="w-full flex items-center justify-center gap-1.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-md py-2 hover:bg-blue-50">
                  <Headset size={14} /> Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
 
        {/* ===== Footer ===== */}
        <footer className="border-t border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
          <span>© 2025 AISC OJT Portal. All rights reserved.</span>
          <span>Version 1.0.0</span>
        </footer>
      </main>
    </div>
  );
}
 