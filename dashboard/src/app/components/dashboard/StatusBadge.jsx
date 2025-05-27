
import React from "react";

const StatusBadge = ({ status }) => {
    const getStatusDetails = () => {
        switch (status) {
            case "pending":
                return { label: "Pending", className: "bg-yellow-100 text-yellow-800 border-yellow-200" };
            case "confirmed":
                return { label: "Confirmed", className: "bg-green-100 text-green-800 border-green-200" };
            case "completed":
                return { label: "Completed", className: "bg-blue-100 text-blue-800 border-blue-200" };
            case "cancelled":
                return { label: "Cancelled", className: "bg-red-100 text-red-800 border-red-200" };
            default:
                return { label: "Unknown", className: "bg-gray-100 text-gray-800 border-gray-200" };
        }
    };

    const { label, className } = getStatusDetails();

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${className}`}>
            {label}
        </span>
    );
};

export default StatusBadge;