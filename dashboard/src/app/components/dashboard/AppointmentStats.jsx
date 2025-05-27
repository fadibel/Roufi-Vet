
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AppointmentStats = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <Card className="bg-white shadow-sm border-roufi-green/20">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-roufi-green">{stats.total}</div>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-yellow-200">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-green-200">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Confirmed</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-blue-200">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
                </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border-red-200">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Cancelled</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AppointmentStats;