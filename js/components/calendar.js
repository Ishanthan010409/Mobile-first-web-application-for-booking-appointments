// ===== CALENDAR COMPONENT =====
function generateCalendar() {
    const calendarDays = document.getElementById('calendar-days');
    if (!calendarDays) return;
    
    calendarDays.innerHTML = '';
    
    const daysInMonth = 31;
    const firstDayOfMonth = 0;
    
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'disabled');
        calendarDays.appendChild(emptyDay);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        
        if (day < 20) {
            dayElement.classList.add('disabled');
        } else {
            dayElement.addEventListener('click', function() {
                selectDate(day);
            });
            
            if (day === 20) {
                setTimeout(() => selectDate(20), 100);
            }
        }
        
        calendarDays.appendChild(dayElement);
    }
}

function selectDate(day) {
    selectedDate = `October ${day}, 2023`;
    
    document.querySelectorAll('.calendar-day').forEach(dayElement => {
        dayElement.classList.remove('selected');
    });
    
    document.querySelectorAll('.calendar-day').forEach(dayElement => {
        if (dayElement.textContent == day && !dayElement.classList.contains('disabled')) {
            dayElement.classList.add('selected');
        }
    });
    
    generateTimeSlots();
}

function prevMonth() {
    alert('Previous month (demo)');
}

function nextMonth() {
    alert('Next month (demo)');
}

function generateTimeSlots() {
    const timeSlotsContainer = document.getElementById('time-slots');
    if (!timeSlotsContainer) return;
    
    timeSlotsContainer.innerHTML = '';
    
    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', 
        '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM'
    ];
    
    timeSlots.forEach(slot => {
        const timeSlotElement = document.createElement('div');
        timeSlotElement.classList.add('time-slot');
        timeSlotElement.textContent = slot;
        
        if (slot === '9:00 AM' || slot === '1:00 PM' || slot === '4:00 PM') {
            timeSlotElement.classList.add('disabled');
        } else {
            timeSlotElement.addEventListener('click', function() {
                selectTime(slot);
            });
            
            if (slot === '2:00 PM') {
                setTimeout(() => selectTime('2:00 PM'), 200);
            }
        }
        
        timeSlotsContainer.appendChild(timeSlotElement);
    });
}

function selectTime(time) {
    selectedTime = time;
    
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    document.querySelectorAll('.time-slot').forEach(slot => {
        if (slot.textContent === time && !slot.classList.contains('disabled')) {
            slot.classList.add('selected');
        }
    });
}