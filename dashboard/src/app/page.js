"use client";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./components/ui/Button";
import AppointmentStats from "../app/components/dashboard/AppointmentStats";
import AppointmentFilters from "../app/components/dashboard/AppointmentFilters";
import AppointmentTable from "../app/components/dashboard/AppointmentTable";
import ServiceSummary from "../app/components/dashboard/ServiceSummary";
import AppointmentDetailsDialog from "../app/components/dashboard/AppointmentDetailsDialog";
import Link from "next/link";
// Mock data for appointments
const initialAppointments = [
  {
    id: "ap-1",
    petName: "Max",
    petType: "dog",
    ownerName: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    date: new Date(2023, 5, 15, 9, 0),
    service: "checkup",
    status: "pending",
    notes: "Annual checkup and vaccinations",
    isNewPatient: true,
  },
  {
    id: "ap-2",
    petName: "Bella",
    petType: "cat",
    ownerName: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    date: new Date(2023, 5, 15, 10, 30),
    service: "dental",
    status: "confirmed",
    notes: "Having trouble eating",
    isNewPatient: false,
  },
  {
    id: "ap-3",
    petName: "Charlie",
    petType: "dog",
    ownerName: "Alice Johnson",
    email: "alice@example.com",
    phone: "(555) 456-7890",
    date: new Date(2023, 5, 15, 13, 0),
    service: "vaccination",
    status: "completed",
    notes: "",
    isNewPatient: false,
  },
  {
    id: "ap-4",
    petName: "Daisy",
    petType: "rabbit",
    ownerName: "Bob Williams",
    email: "bob@example.com",
    phone: "(555) 234-5678",
    date: new Date(2023, 5, 16, 14, 30),
    service: "grooming",
    status: "pending",
    notes: "First grooming session",
    isNewPatient: true,
  },
  {
    id: "ap-5",
    petName: "Sunny",
    petType: "bird",
    ownerName: "Carol Brown",
    email: "carol@example.com",
    phone: "(555) 876-5432",
    date: new Date(2023, 5, 16, 16, 0),
    service: "checkup",
    status: "cancelled",
    notes: "Wing injury follow-up",
    isNewPatient: false,
  },
];

const Dashboard = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Filter and sort appointments
  const filteredAppointments = appointments
    .filter((appointment) => {
      const matchesSearch =
        appointment.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.ownerName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || appointment.status === statusFilter;

      const matchesService =
        serviceFilter === "all" || appointment.service === serviceFilter;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const appointmentDate = new Date(appointment.date);
      appointmentDate.setHours(0, 0, 0, 0);

      let matchesDate = true;
      if (dateFilter === "today") {
        matchesDate = appointmentDate.getTime() === today.getTime();
      } else if (dateFilter === "upcoming") {
        matchesDate = appointmentDate.getTime() > today.getTime();
      } else if (dateFilter === "past") {
        matchesDate = appointmentDate.getTime() < today.getTime();
      }

      return matchesSearch && matchesStatus && matchesService && matchesDate;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortDirection === "asc"
          ? a.date.getTime() - b.date.getTime()
          : b.date.getTime() - a.date.getTime();
      } else if (sortBy === "petName") {
        return sortDirection === "asc"
          ? a.petName.localeCompare(b.petName)
          : b.petName.localeCompare(a.petName);
      } else if (sortBy === "ownerName") {
        return sortDirection === "asc"
          ? a.ownerName.localeCompare(b.ownerName)
          : b.ownerName.localeCompare(a.ownerName);
      }
      return 0;
    });

  // Toggle sort direction
  const toggleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };

  // Handle appointment status update
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );

    const appointment = appointments.find((a) => a.id === id);

    toast({
      title: `Appointment ${newStatus}`,
      description: `${appointment?.petName}'s appointment has been ${newStatus}.`,
      variant: newStatus === "cancelled" ? "destructive" : "default",
    });
  };

  // Stats for the dashboard
  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    completed: appointments.filter((a) => a.status === "completed").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  // Summary by service type
  const serviceStats = {
    checkup: appointments.filter((a) => a.service === "checkup").length,
    vaccination: appointments.filter((a) => a.service === "vaccination").length,
    dental: appointments.filter((a) => a.service === "dental").length,
    surgery: appointments.filter((a) => a.service === "surgery").length,
    grooming: appointments.filter((a) => a.service === "grooming").length,
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    router.push("/Login");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gradient-to-b from-roufi-cream/50 to-white py-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-roufi-green">
                Appointment Dashboard
              </h1>
              <p className="text-gray-600">
                Manage and track all appointments for Roufi Vet Clinic
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Link href="/book-appointment">
                <Button className="bg-roufi-green hover:bg-roufi-green/90">
                  <Calendar className="mr-2 h-4 w-4" /> New Appointment
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-roufi-red text-roufi-red hover:bg-roufi-red hover:text-white"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>

          <AppointmentStats stats={stats} />

          <AppointmentFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            serviceFilter={serviceFilter}
            setServiceFilter={setServiceFilter}
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
          />

          <AppointmentTable
            filteredAppointments={filteredAppointments}
            appointments={appointments}
            sortBy={sortBy}
            sortDirection={sortDirection}
            toggleSort={toggleSort}
            updateAppointmentStatus={updateAppointmentStatus}
            setSelectedAppointment={setSelectedAppointment}
          />

          <ServiceSummary serviceStats={serviceStats} />
        </div>
      </div>

      <AppointmentDetailsDialog
        selectedAppointment={selectedAppointment}
        setSelectedAppointment={setSelectedAppointment}
        updateAppointmentStatus={updateAppointmentStatus}
      />

      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
