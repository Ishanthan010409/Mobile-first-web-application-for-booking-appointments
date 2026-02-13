// ===== ONBOARDING SCREEN =====
function skipOnboarding() {
    goToLogin();
}

function nextOnboardingSlide() {
    if (currentOnboardingSlide < 3) {
        document.getElementById(`onboarding-slide-${currentOnboardingSlide}`).style.display = 'none';
        currentOnboardingSlide++;
        document.getElementById(`onboarding-slide-${currentOnboardingSlide}`).style.display = 'block';
        updateSlideIndicators();
    }
}

function updateSlideIndicators() {
    const slides = document.querySelectorAll('.onboarding-slide');
    slides.forEach((slide, index) => {
        const indicators = slide.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            if (i === currentOnboardingSlide - 1) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    });
}