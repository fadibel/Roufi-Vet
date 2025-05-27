
import React from "react";
import { Search, Filter, Calendar } from "lucide-react";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const AppointmentFilters = ({
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    serviceFilter,
    setServiceFilter,
    dateFilter,
    setDateFilter
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="md:col-span-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search pet, owner, or email..."
                        className="pl-10 bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="bg-white">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                    <SelectTrigger className="bg-white">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Services</SelectItem>
                        <SelectItem value="checkup">Checkup</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="dental">Dental Care</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                        <SelectItem value="grooming">Grooming</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="bg-white">
                        <Calendar className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="All Dates" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Dates</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="past">Past</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default AppointmentFilters;