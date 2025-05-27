
# Roufi Vet - Veterinary Clinic Management System

A modern, responsive web application for managing veterinary clinic operations, built with React and featuring a complete appointment management system with admin dashboard.

## 🚀 Live Demo



## 📋 Features

### Public Features
- **Modern Landing Page** - Professional veterinary clinic website
- **Service Information** - Detailed pages for different veterinary services
- **Appointment Booking** - Easy-to-use appointment scheduling system
- **Contact Information** - Contact details and clinic information
- **Responsive Design** - Fully responsive across all devices

### Admin Dashboard
- **Secure Login** - Protected admin access with authentication
- **Appointment Management** - View, filter, and manage all appointments
- **Real-time Statistics** - Dashboard with appointment metrics and analytics
- **Advanced Filtering** - Filter by status, service type, date, and search
- **Status Management** - Update appointment statuses (pending, confirmed, completed, cancelled)
- **Detailed View** - View complete appointment details in modal dialogs
- **Service Analytics** - Summary of appointments by service type

### Specialized Services
- **Large Animal Care** - Dedicated section for large animal veterinary services
- **Cattle Services** - Specialized cattle health and management services
- **Pet Preventative Care** - Comprehensive pet health and preventative care information

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (@tanstack/react-query)
- **Charts**: Recharts
- **Type Safety**: TypeScript
- **Date Handling**: date-fns
- **Form Handling**: React Hook Form with Zod validation

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── AppointmentStats.jsx
│   │   ├── AppointmentFilters.jsx
│   │   ├── AppointmentTable.jsx
│   │   ├── AppointmentDetailsDialog.jsx
│   │   ├── ServiceSummary.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── ServiceLabel.jsx
│   │   └── PetTypeIcon.jsx
│   ├── Hero.tsx               # Landing page hero section
│   ├── Services.tsx           # Services showcase
│   ├── Testimonials.tsx       # Customer testimonials
│   ├── CallToAction.tsx       # CTA sections
│   ├── Footer.tsx             # Site footer
│   ├── Navbar.tsx             # Navigation bar
│   └── ProtectedRoute.jsx     # Route protection component
├── pages/
│   ├── Index.tsx              # Landing page
│   ├── Dashboard.jsx          # Admin dashboard
│   ├── Login.jsx              # Admin login
│   ├── About.tsx              # About page
│   ├── Contact.tsx            # Contact page
│   ├── Services.jsx           # Services page
│   ├── BookAppointment.jsx    # Appointment booking
│   ├── LargeAnimal.jsx        # Large animal services
│   ├── Cattle.jsx             # Cattle services
│   ├── PetPreventativeCare.jsx # Pet care services
│   └── NotFound.tsx           # 404 page
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
└── main.tsx                   # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔐 Admin Access

To access the admin dashboard:

1. Navigate to `/login`
2. Use the demo credentials:
   - **Email**: `admin@roufivet.com`
   - **Password**: `admin123`
3. Access the dashboard at `/dashboard`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with sidebar navigation
- **Tablet** - Adapted layouts with collapsible navigation
- **Mobile** - Touch-friendly interface with hamburger menu

## 🎨 Design System

- **Primary Colors**: 
  - Roufi Green: `#4F7942`
  - Roufi Red: `#DC2626`
  - Roufi Cream: `#FAF7F0`
- **Typography**: System fonts with Tailwind CSS typography
- **Components**: Consistent design system using shadcn/ui components

## 🔧 Key Features Implementation

### Authentication
- Simple localStorage-based authentication for demo purposes
- Protected routes using React Router
- Logout functionality with navigation

### Dashboard Analytics
- Real-time appointment statistics
- Service type distribution
- Status-based filtering and sorting
- Search functionality across multiple fields

### Appointment Management
- CRUD operations for appointments
- Status workflow management
- Detailed appointment information
- Filter and search capabilities

## 🚀 Deployment



### Deploy with Vercel
1. Import your GitHub repository
2. Vercel will automatically detect the settings
3. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team


## 🙏 Acknowledgments

- Built with [fadi belkacemi](https://fadibelkacemi.pro/) 
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Roufi Vet** - Providing exceptional veterinary care with modern technology solutions.
