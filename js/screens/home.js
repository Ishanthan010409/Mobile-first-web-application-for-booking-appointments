// Service Selection
function selectService(service) {
    selectedService = service;
    
    // Update visual selection
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Find and select the clicked card
    event.currentTarget.classList.add('selected');
    
    // In a real app, you would update the UI based on the selected service
    console.log(`Service selected: ${service}`);
}

// Specialist Selection
function selectSpecialist(specialist) {
    selectedSpecialist = specialist;
    
    // Update visual selection
    document.querySelectorAll('.specialist-card').forEach(card => {
        card.style.borderColor = 'var(--border)';
    });
    
    event.currentTarget.style.borderColor = 'var(--primary)';
    
    console.log(`Specialist selected: ${specialist}`);
}

function goToDateTime() {
    if (selectedService && selectedSpecialist) {
        showScreen('datetime-screen');
        generateCalendar();
        generateTimeSlots();
    } else {
        alert('Please select a service and specialist before continuing.');
    }
}