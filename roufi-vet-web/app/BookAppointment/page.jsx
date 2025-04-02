"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { 
 CalendarIcon, 
  Clock, 
  CheckCircle2,
  Cat,
  Dog,
  Bird,
  Rabbit,
  Stethoscope,
  Syringe,
  Scissors,
  Pill,
  BadgePlus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "../../components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/Card";
import Header from "@/components/Header";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM"
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  appointmentDate: z.date({
    required_error: "Please select a date for your appointment",
  }),
  appointmentTime: z.string({
    required_error: "Please select a time for your appointment",
  }),
  petType: z.enum(["dog", "cat", "bird", "rabbit", "other"], {
    required_error: "Please select your pet type",
  }),
  petName: z.string().min(1, { message: "Please enter your pet's name" }),
  petAge: z.string().optional(),
  serviceType: z.enum(["checkup", "vaccination", "dental", "surgery", "grooming", "other"], {
    required_error: "Please select a service type",
  }),
  isNewPatient: z.boolean().default(false),
  additionalNotes: z.string().optional(),
});

const BookAppointment = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      petName: "",
      petAge: "",
      additionalNotes: "",
      isNewPatient: false,
    },
  });

  const handleDateSelect = (date) => {
    console.log("Date selected:", date);
    form.setValue("appointmentDate", date);
  };

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    toast({
      title: "Appointment Scheduled",
      description: `Your appointment has been scheduled for ${format(data.appointmentDate, "PPPP")} at ${data.appointmentTime}.`,
      variant: "success"
    });
    form.reset();
  };

  const serviceIcons = {
    checkup: <Stethoscope className="h-5 w-5 text-roufi-green" />,
    vaccination: <Syringe className="h-5 w-5 text-roufi-green" />,
    dental: <Pill className="h-5 w-5 text-roufi-green" />,
    surgery: <Scissors className="h-5 w-5 text-roufi-green" />,
    grooming: <Scissors className="h-5 w-5 rotate-90 text-roufi-green" />,
    other: <BadgePlus className="h-5 w-5 text-roufi-green" />
  };

  const PetTypeIcon = ({type}) => {
    switch(type) {
      case "dog":
        return <Dog className="h-5 w-5" />;
      case "cat":
        return <Cat className="h-5 w-5" />;
      case "bird":
        return <Bird className="h-5 w-5" />;
      case "rabbit":
        return <Rabbit className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header/>
      <div className="bg-gradient-to-b from-roufi-cream to-white mt-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-roufi-green">
              Book Your Pet's Appointment
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Schedule a visit for your pet with our experienced veterinarians.
              We offer a wide range of services to keep your furry friends healthy and happy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-t-4 border-t-roufi-green">
                <CardHeader className="bg-gradient-to-r from-roufi-green/10 to-transparent">
                  <CardTitle className="text-2xl text-roufi-green">Appointment Details</CardTitle>
                  <CardDescription>
                    Fill out the form below to schedule your pet's appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="bg-roufi-cream/30 p-4 rounded-md mb-6">
                        <h3 className="text-roufi-brown font-medium mb-4 flex items-center gap-2">
                          <div className="bg-roufi-brown text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</div>
                          Your Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="(555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="bg-roufi-green/10 p-4 rounded-md mb-6">
                        <h3 className="text-roufi-green font-medium mb-4 flex items-center gap-2">
                          <div className="bg-roufi-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</div>
                          Appointment Time
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="appointmentDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Appointment Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={cn(
                                          "w-full  pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0 z-50 bg-gray-50" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={handleDateSelect}
                                      disabled={(date) => {
                                        // Disable dates in the past and weekends
                                        const today = new Date();
                                        today.setHours(0, 0, 0, 0);
                                        const day = date.getDay();
                                        return date < today || day === 0 || day === 6;
                                      }}
                                      initialFocus
                                    //   className="pointer-events-auto bg-white"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="appointmentTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Appointment Time</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-gray-50" >
                                    {timeSlots.map((time) => (
                                      <SelectItem key={time} value={time}>
                                        <div className="flex items-center gap-2 ">
                                          <Clock className="h-4 w-4 " />
                                          <span>{time}</span>
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="bg-roufi-light-green/10 p-4 rounded-md mb-6">
                        <h3 className="text-roufi-green font-medium mb-4 flex items-center gap-2">
                          <div className="bg-roufi-light-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</div>
                          Pet Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="petType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Type</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select pet type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-gray-50">
                                    <SelectItem value="dog">
                                      <div className="flex items-center gap-2">
                                        <Dog className="h-4 w-4" />
                                        <span>Dog</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="cat">
                                      <div className="flex items-center gap-2">
                                        <Cat className="h-4 w-4" />
                                        <span>Cat</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="bird">
                                      <div className="flex items-center gap-2">
                                        <Bird className="h-4 w-4" />
                                        <span>Bird</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="rabbit">
                                      <div className="flex items-center gap-2">
                                        <Rabbit className="h-4 w-4" />
                                        <span>Rabbit</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="petName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Max" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="petAge"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Age (optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="2 years" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="isNewPatient"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-white">
                                <FormControl>
                                  <input
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={field.onChange}
                                    className="h-4 w-4 mt-1"
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    This is my pet's first visit to Roufi Vet Clinic
                                  </FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="bg-roufi-red/5 p-4 rounded-md mb-6">
                        <h3 className="text-roufi-red font-medium mb-4 flex items-center gap-2">
                          <div className="bg-roufi-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</div>
                          Service Type
                        </h3>
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What service does your pet need?</FormLabel>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="checkup" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.checkup} Regular Checkup
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="vaccination" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.vaccination} Vaccination
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="dental" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.dental} Dental Care
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="surgery" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.surgery} Surgery
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="grooming" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.grooming} Grooming
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 bg-white rounded-md p-3 border hover:border-roufi-green cursor-pointer transition-colors">
                                  <FormControl>
                                    <RadioGroupItem value="other" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                    {serviceIcons.other} Other
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="additionalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes (optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please share any specific concerns or information about your pet..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-roufi-green hover:bg-roufi-green/90 text-lg py-6"
                      >
                        <CheckCircle2 className="mr-2 h-5 w-5" /> 
                        Book Appointment
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-20 shadow-lg border-t-4 border-t-roufi-brown">
                <CardHeader className="bg-gradient-to-r from-roufi-brown/10 to-transparent">
                  <CardTitle>Our Services</CardTitle>
                  <CardDescription>
                    What to expect during your visit
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-3">
                    {serviceIcons.checkup}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Regular Checkup</h3>
                      <p className="text-gray-600 text-sm">
                        A comprehensive health examination of your pet to ensure they are healthy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {serviceIcons.vaccination}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Vaccination</h3>
                      <p className="text-gray-600 text-sm">
                        Essential vaccines to protect your pet from common diseases.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {serviceIcons.dental}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Dental Care</h3>
                      <p className="text-gray-600 text-sm">
                        Cleaning, polishing, and extraction services to maintain your pet's oral health.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {serviceIcons.surgery}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Surgery</h3>
                      <p className="text-gray-600 text-sm">
                        From routine spaying/neutering to complex procedures.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {serviceIcons.grooming}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Grooming</h3>
                      <p className="text-gray-600 text-sm">
                        Professional bathing, hair trimming, and nail clipping.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t mt-6">
                    <h3 className="font-medium text-gray-900 mb-3">Clinic Hours</h3>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <div className="font-medium">Saturday - Thursday:</div>
                      <div>8:00 AM - 7:00 PM</div>
                      <div className="font-medium">Friday:</div>
                      <div>9:00 AM - 12:00 AM</div>
                      {/* <div className="font-medium">Sunday:</div>
                      <div>Closed</div> */}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-gray-600 text-sm">
                      For emergencies outside our regular hours, please call our emergency line:
                      <span className="block text-roufi-red font-bold mt-2">+213 551.21.76.99</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="bg-roufi-cream/50 flex justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium text-roufi-brown">Need help?</p>
                    <p className="text-sm text-gray-600">Call us at +213 771.12.40.91</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookAppointment;
