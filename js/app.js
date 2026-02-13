// ===== APP STATE =====
let currentOnboardingSlide = 1;
let selectedService = 'haircut';
let selectedSpecialist = 'alex';
let selectedDate = null;
let selectedTime = null;
let selectedServiceName = 'Haircut';
let selectedSpecialistName = 'Alex Morgan';
let selectedServicePrice = '$30';

// ===== SCREEN NAVIGATION =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'datetime-screen') {
        if (typeof generateCalendar === 'function') generateCalendar();
        if (typeof generateTimeSlots === 'function') generateTimeSlots();
        updateServiceInfo();
    }
}

function goToLogin() {
    showScreen('login-screen');
}

function goToHome() {
    showScreen('home-screen');
}

function goToDateTime() {
    if (selectedService && selectedSpecialist) {
        showScreen('datetime-screen');
    } else {
        alert('Please select a service and specialist');
    }
}

function goToConfirmation() {
    if (selectedDate && selectedTime) {
        showScreen('confirmation-screen');
    } else {
        alert('Please select a date and time');
    }
}

// ===== SERVICE SELECTION =====
function selectService(element, service) {
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedService = service;
    
    switch(service) {
        case 'haircut':
            selectedServiceName = 'Haircut';
            selectedServicePrice = '$30';
            break;
        case 'massage':
            selectedServiceName = 'Massage';
            selectedServicePrice = '$75';
            break;
        case 'consultation':
            selectedServiceName = 'Consultation';
            selectedServicePrice = '$120';
            break;
        case 'fitness':
            selectedServiceName = 'Fitness Training';
            selectedServicePrice = '$60';
            break;
    }
}

// ===== SPECIALIST SELECTION =====
function selectSpecialist(element, specialist) {
    document.querySelectorAll('.specialist-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedSpecialist = specialist;
    
    selectedSpecialistName = specialist === 'alex' ? 'Alex Morgan' : 'Sarah Chen';
}

function updateServiceInfo() {
    const infoElement = document.getElementById('selected-service-info');
    if (infoElement) {
        infoElement.textContent = `${selectedSpecialistName} • ${selectedServiceName} • ${selectedServicePrice}`;
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('AppointmentEase initialized');
    showScreen('onboarding-screen');
    
    // Pre-select first items for demo
    setTimeout(() => {
        const firstService = document.querySelector('.service-card');
        if (firstService) selectService(firstService, 'haircut');
        
        const firstSpecialist = document.querySelector('.specialist-card');
        if (firstSpecialist) selectSpecialist(firstSpecialist, 'alex');
    }, 100);
});