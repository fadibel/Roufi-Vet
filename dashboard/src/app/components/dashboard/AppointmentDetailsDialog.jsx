
import React from "react";
import { format } from "date-fns";
import { CheckCircle, XCircle, Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog";
import PetTypeIcon from "./PetTypeIcon";
import ServiceLabel from "./ServiceLabel";
import StatusBadge from "./StatusBadge";

const AppointmentDetailsDialog = ({
    selectedAppointment,
    setSelectedAppointment,
    updateAppointmentStatus
}) => {
    if (!selectedAppointment) return null;

    return (
        <AlertDialog open={!!selectedAppointment} onOpenChange={() => setSelectedAppointment(null)}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center">
                        <div className="mr-2 flex-shrink-0">
                            <PetTypeIcon type={selectedAppointment.petType} />
                        </div>
                        <span>{selectedAppointment.petName}'s Appointment</span>
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Appointment details and contact info.
                    </AlertDialogDescription>

                    <div className="space-y-4 mt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Status:</span>
                            <StatusBadge status={selectedAppointment.status} />
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Service:</span>
                            <ServiceLabel service={selectedAppointment.service} />
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Date:</span>
                            <span>{format(selectedAppointment.date, "PPP")}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Time:</span>
                            <span>{format(selectedAppointment.date, "h:mm a")}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Owner:</span>
                            <span>{selectedAppointment.ownerName}</span>
                        </div>

                        <div className="pt-2 space-y-1">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <a href={`mailto:${selectedAppointment.email}`} className="text-roufi-green hover:underline">
                                    {selectedAppointment.email}
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <a href={`tel:${selectedAppointment.phone}`} className="text-roufi-green hover:underline">
                                    {selectedAppointment.phone}
                                </a>
                            </div>
                        </div>

                        {selectedAppointment.notes && (
                            <div className="mt-4">
                                <p className="text-gray-500 mb-1">Notes:</p>
                                <p className="text-sm bg-gray-50 p-2 rounded">{selectedAppointment.notes}</p>
                            </div>
                        )}
                    </div>
                </AlertDialogHeader>

                <AlertDialogFooter className="flex gap-2">
                    {selectedAppointment.status === "pending" && (
                        <>
                            <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    updateAppointmentStatus(selectedAppointment.id, "confirmed");
                                    setSelectedAppointment(null);
                                }}
                            >
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Confirm
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => {
                                    updateAppointmentStatus(selectedAppointment.id, "cancelled");
                                    setSelectedAppointment(null);
                                }}
                            >
                                <XCircle className="mr-2 h-4 w-4" />
                                Cancel
                            </Button>
                        </>
                    )}

                    {selectedAppointment.status === "confirmed" && (
                        <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => {
                                updateAppointmentStatus(selectedAppointment.id, "completed");
                                setSelectedAppointment(null);
                            }}
                        >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark Completed
                        </Button>
                    )}

                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AppointmentDetailsDialog;