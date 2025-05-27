
import React from "react";

const ServiceLabel = ({ service }) => {
    const getServiceDetails = () => {
        switch (service) {
            case "checkup":
                return { label: "Checkup", className: "bg-blue-100 text-blue-800" };
            case "vaccination":
                return { label: "Vaccination", className: "bg-green-100 text-green-800" };
            case "dental":
                return { label: "Dental Care", className: "bg-purple-100 text-purple-800" };
            case "surgery":
                return { label: "Surgery", className: "bg-red-100 text-red-800" };
            case "grooming":
                return { label: "Grooming", className: "bg-yellow-100 text-yellow-800" };
            default:
                return { label: "Other", className: "bg-gray-100 text-gray-800" };
        }
    };

    const { label, className } = getServiceDetails();

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
            {label}
        </span>
    );
};

export default ServiceLabel;