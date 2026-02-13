# AppointmentEase

A modern, mobile-first web application for booking appointments with service providers. Book appointments with your preferred specialists in just a few taps.

![AppointmentEase Banner](https://img.shields.io/badge/AppointmentEase-Book%20Appointments-brightgreen?style=for-the-badge)

## ✨ Features

- **Onboarding Experience**: Smooth 3-slide introduction explaining the app's value proposition
- **Secure Authentication**: Email/password login with Google and Apple social login options
- **Service Selection**: Choose from various services (Haircut, Massage, Consultation, Fitness Training)
- **Specialist Profiles**: Browse verified professionals with ratings and reviews
- **Interactive Calendar**: Select preferred dates with an intuitive calendar interface
- **Time Slot Booking**: Choose from available time slots that fit your schedule
- **Appointment Confirmation**: Receive detailed confirmation with reminders and calendar integration
- **Responsive Design**: Mobile-first design that works seamlessly on all devices

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with CSS custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Font Awesome 6.4.0**: Icon library for UI elements
- **No External Frameworks**: Built with pure web technologies

## 📁 Project Structure

```
AppointmentEase/
├── index.html                 # Main HTML entry point
├── README.md                  # Project documentation
├── assets/                    # Static assets (images, etc.)
├── css/
│   ├── style.css             # Main stylesheet with global styles
│   ├── components/
│   │   ├── buttons.css       # Button component styles
│   │   ├── calendar.css     # Calendar component styles
│   │   ├── cards.css        # Card component styles
│   │   └── navigation.css   # Navigation component styles
│   └── screens/
│       ├── confirmation.css # Confirmation screen styles
│       ├── datetime.css     # Date/time selection styles
│       ├── home.css        # Home screen styles
│       ├── login.css       # Login screen styles
│       └── onboarding.css  # Onboarding screen styles
├── js/
│   ├── app.js               # Main application logic and state management
│   ├── components/
│   │   ├── calendar.js     # Calendar component logic
│   │   └── navigation.js    # Navigation component logic
│   └── screens/
│       ├── confirmation.js # Confirmation screen logic
│       ├── datetime.js     # Date/time selection logic
│       ├── home.js         # Home screen logic
│       └── onboarding.js   # Onboarding screen logic
└── images/                  # Image assets directory
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly from the file system

### Installation

1. **Clone the repository**:
   
```
bash
   git clone https://github.com/yourusername/AppointmentEase.git
   cd AppointmentEase
   
```

2. **Open the application**:
   
   Simply open `index.html` in your web browser:
   
```
bash
   # Using Windows
   start index.html
   
   # Using macOS
   open index.html
   
   # Using Linux
   xdg-open index.html
   
```

   Or serve it with a local server:
   
```
bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
```

3. **Access the app**:
   Open your browser and navigate to `http://localhost:8000`

## 📱 App Screens

### 1. Onboarding Screen
Welcome slides introducing the app's key features:
- Easy appointment booking
- Verified specialists selection
- Flexible time slot selection

![Onboarding Screen](images/screenshot-onboarding.png)

### 2. Login Screen
Authentication options:
- Email and password sign-in
- Google OAuth login
- Apple ID login

![Login Screen](images/screenshot-login.png)

### 3. Home Screen (Service & Specialist Selection)
- Browse available services with pricing
- View specialist profiles with ratings
- Progress indicator for booking steps

![Home Screen](images/screenshot-home.png)

### 4. Date & Time Selection
- Interactive calendar for date selection
- Available time slots display
- Service and specialist summary

![Date & Time Screen](images/screenshot-datetime.png)

### 5. Confirmation Screen
- Appointment confirmation message
- Detailed booking summary
- Reminders and calendar integration options

![Confirmation Screen](images/screenshot-confirmation.png)

## 🎨 Customization

### Changing Colors

Edit CSS custom properties in `css/style.css`:

```
css
:root {
    --primary: #4F46E5;        /* Primary brand color */
    --secondary: #10B981;     /* Secondary color */
    --background: #F9FAFB;    /* Background color */
    --surface: #FFFFFF;       /* Card/surface color */
    --text-primary: #111827;  /* Primary text */
    --text-secondary: #6B7280;/* Secondary text */
    --border: #E5E7EB;        /* Border color */
}
```

### Adding New Services

1. Add service card in `index.html` within the services grid
2. Add corresponding case in `selectService()` function in `js/app.js`
3. Style the new service in `css/screens/home.css`

### Adding New Screens

1. Create the screen HTML in `index.html`
2. Add styles in a new CSS file under `css/screens/`
3. Add JavaScript logic in a new file under `js/screens/`
4. Register screen navigation in `js/app.js`

## 📋 Application Flow

```
Onboarding → Login → Home (Service + Specialist) → Date/Time → Confirmation
```

1. **Start**: User sees onboarding slides (can skip)
2. **Auth**: User signs in (demo mode allows direct access)
3. **Select**: User chooses service and specialist
4. **Schedule**: User picks preferred date and time
5. **Confirm**: User receives booking confirmation

## 🔧 Development

### Running in Development Mode

Since this is a static website, you can:
- Edit files directly in your code editor
- Refresh the browser to see changes
- Use browser DevTools for debugging

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the code comments for implementation details

---

<p align="center">Made with ❤️ for easy appointment booking</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Platform-Web-orange.svg" alt="Platform">
</p>
