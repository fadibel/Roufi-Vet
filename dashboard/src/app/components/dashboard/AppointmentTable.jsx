
import React from "react";
import { format } from "date-fns";
import { CheckCircle, XCircle, ArrowDownUp, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import PetTypeIcon from "./PetTypeIcon";
import ServiceLabel from "./ServiceLabel";
import StatusBadge from "./StatusBadge";

const AppointmentTable = ({
    filteredAppointments,
    appointments,
    sortBy,
    sortDirection,
    toggleSort,
    updateAppointmentStatus,
    setSelectedAppointment
}) => {
    return (
        <Card className="bg-white shadow-sm overflow-hidden mb-8">
            <CardHeader className="bg-roufi-green/5 border-b border-roufi-green/10 pb-3">
                <CardTitle className="text-lg text-roufi-green">Appointments</CardTitle>
                <CardDescription>
                    Showing {filteredAppointments.length} of {appointments.length} appointments
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-gray-50">
                                <TableHead className="w-1/12">Pet</TableHead>
                                <TableHead
                                    className="w-2/12 cursor-pointer"
                                    onClick={() => toggleSort("petName")}
                                >
                                    <div className="flex items-center">
                                        Pet Name
                                        {sortBy === "petName" && (
                                            <ArrowDownUp
                                                className="ml-1 h-3 w-3"
                                                style={{ transform: sortDirection === "desc" ? "rotate(180deg)" : "" }}
                                            />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead
                                    className="w-2/12 cursor-pointer"
                                    onClick={() => toggleSort("ownerName")}
                                >
                                    <div className="flex items-center">
                                        Owner
                                        {sortBy === "ownerName" && (
                                            <ArrowDownUp
                                                className="ml-1 h-3 w-3"
                                                style={{ transform: sortDirection === "desc" ? "rotate(180deg)" : "" }}
                                            />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead
                                    className="w-2/12 cursor-pointer"
                                    onClick={() => toggleSort("date")}
                                >
                                    <div className="flex items-center">
                                        Date & Time
                                        {sortBy === "date" && (
                                            <ArrowDownUp
                                                className="ml-1 h-3 w-3"
                                                style={{ transform: sortDirection === "desc" ? "rotate(180deg)" : "" }}
                                            />
                                        )}
                                    </div>
                                </TableHead>
                                <TableHead className="w-1/12">Service</TableHead>
                                <TableHead className="w-1/12">Status</TableHead>
                                <TableHead className="w-3/12 text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredAppointments.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="h-24 text-center">
                                        No appointments found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredAppointments.map((appointment) => (
                                    <TableRow key={appointment.id} className="hover:bg-gray-50/80">
                                        <TableCell>
                                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8">
                                                <PetTypeIcon type={appointment.petType} />
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {appointment.petName}
                                            {appointment.isNewPatient && (
                                                <span className="ml-2 px-1.5 py-0.5 bg-roufi-cream/70 text-roufi-green text-xs rounded-sm">
                                                    New
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell>{appointment.ownerName}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{format(appointment.date, "MMM d, yyyy")}</span>
                                                <span className="text-xs text-gray-500">
                                                    {format(appointment.date, "h:mm a")}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <ServiceLabel service={appointment.service} />
                                        </TableCell>
                                        <TableCell>
                                            <StatusBadge status={appointment.status} />
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setSelectedAppointment(appointment)}
                                                >
                                                    <MessageSquare className="h-4 w-4" />
                                                    <span className="sr-only">View Details</span>
                                                </Button>

                                                {appointment.status === "pending" && (
                                                    <>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                                            onClick={() => updateAppointmentStatus(appointment.id, "confirmed")}
                                                        >
                                                            <CheckCircle className="h-4 w-4" />
                                                            <span className="sr-only">Confirm</span>
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                            onClick={() => updateAppointmentStatus(appointment.id, "cancelled")}
                                                        >
                                                            <XCircle className="h-4 w-4" />
                                                            <span className="sr-only">Cancel</span>
                                                        </Button>
                                                    </>
                                                )}

                                                {appointment.status === "confirmed" && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                        onClick={() => updateAppointmentStatus(appointment.id, "completed")}
                                                    >
                                                        <CheckCircle className="h-4 w-4" />
                                                        <span className="sr-only">Mark Completed</span>
                                                    </Button>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default AppointmentTable;