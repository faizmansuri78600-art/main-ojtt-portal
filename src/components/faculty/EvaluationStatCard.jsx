import React from "react";
import { Icon } from "./facultyIcons";

const EvaluationStatCard = ({ icon, iconBg, iconColor, value, label, footer, linkText, onLinkClick = () => {} }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}>
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
    {footer && <p className="text-xs text-gray-400">{footer}</p>}
    {linkText && (
      <button onClick={onLinkClick} className="text-sm text-blue-600 font-medium hover:underline text-left">
        {linkText} →
      </button>
    )}
  </div>
);
export default EvaluationStatCard;