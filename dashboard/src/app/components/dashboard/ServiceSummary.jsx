
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ServiceSummary = ({ serviceStats }) => {
    return (
        <Card className="bg-white shadow-sm mb-8">
            <CardHeader className="border-b border-roufi-green/10 pb-3">
                <CardTitle className="text-lg text-roufi-green">Service Summary</CardTitle>
                <CardDescription>Breakdown of appointment types</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50">
                        <span className="text-lg font-bold text-blue-700">{serviceStats.checkup}</span>
                        <span className="text-sm text-blue-600">Checkups</span>
                    </div>

                    <div className="flex flex-col items-center p-3 rounded-lg bg-green-50">
                        <span className="text-lg font-bold text-green-700">{serviceStats.vaccination}</span>
                        <span className="text-sm text-green-600">Vaccinations</span>
                    </div>

                    <div className="flex flex-col items-center p-3 rounded-lg bg-purple-50">
                        <span className="text-lg font-bold text-purple-700">{serviceStats.dental}</span>
                        <span className="text-sm text-purple-600">Dental Care</span>
                    </div>

                    <div className="flex flex-col items-center p-3 rounded-lg bg-red-50">
                        <span className="text-lg font-bold text-red-700">{serviceStats.surgery || 0}</span>
                        <span className="text-sm text-red-600">Surgeries</span>
                    </div>

                    <div className="flex flex-col items-center p-3 rounded-lg bg-yellow-50">
                        <span className="text-lg font-bold text-yellow-700">{serviceStats.grooming}</span>
                        <span className="text-sm text-yellow-600">Groomings</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ServiceSummary;