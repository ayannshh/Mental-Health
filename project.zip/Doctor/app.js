// Premium Mental Health Platform - MindCare
class MindCareApp {
    constructor() {
        this.currentSection = 'home';
        this.currentDoctor = null;
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        this.selectedDate = null;
        this.moodChart = null;
        this.messages = [];
        this.currentConversation = 'dr-sarah';
        
        // Initialize data
        this.doctors = [
            {
                id: 1,
                name: "Dr. Sarah Mitchell",
                avatar: "👩‍⚕️",
                specialty: "Anxiety & Depression",
                rating: 4.9,
                reviewCount: 127,
                yearsExperience: 8,
                education: "PhD Psychology, Harvard Medical School",
                languages: ["English", "Spanish"],
                insuranceAccepted: ["Blue Cross", "Aetna", "Cigna"],
                availability: "Mon-Fri 9AM-5PM",
                consultationFee: 150,
                about: "Specializing in cognitive behavioral therapy for anxiety and depression. I believe in creating a safe, non-judgmental space for healing.",
                nextAvailable: "Tomorrow 2:00 PM",
                isOnline: true,
                specializations: ["CBT", "DBT", "Trauma Therapy", "Mindfulness"]
            },
            {
                id: 2,
                name: "Dr. Michael Chen",
                avatar: "👨‍⚕️",
                specialty: "Trauma & PTSD",
                rating: 4.8,
                reviewCount: 89,
                yearsExperience: 12,
                education: "MD Psychiatry, Johns Hopkins",
                languages: ["English", "Mandarin"],
                insuranceAccepted: ["UnitedHealth", "Blue Cross", "Medicare"],
                availability: "Tue-Sat 10AM-6PM",
                consultationFee: 200,
                about: "Expert in trauma-informed therapy with extensive experience in PTSD treatment and recovery.",
                nextAvailable: "Today 4:30 PM",
                isOnline: true,
                specializations: ["EMDR", "Trauma Therapy", "PTSD", "Military Veterans"]
            },
            {
                id: 3,
                name: "Dr. Emily Rodriguez",
                avatar: "👩‍⚕️",
                specialty: "Teen & Family Therapy",
                rating: 4.9,
                reviewCount: 156,
                yearsExperience: 10,
                education: "PsyD Clinical Psychology, Stanford",
                languages: ["English", "Spanish", "Portuguese"],
                insuranceAccepted: ["Aetna", "Cigna", "Humana"],
                availability: "Mon-Thu 11AM-7PM",
                consultationFee: 175,
                about: "Dedicated to helping families heal together through evidence-based therapeutic approaches.",
                nextAvailable: "Wed 11:00 AM",
                isOnline: false,
                specializations: ["Family Therapy", "Teen Counseling", "Parent Coaching", "Relationship Therapy"]
            }
        ];

        this.patientData = {
            name: "Alex Johnson",
            avatar: "😊",
            memberSince: "January 2024",
            upcomingAppointments: [
                {
                    id: 1,
                    doctorName: "Dr. Sarah Mitchell",
                    doctorAvatar: "👩‍⚕️",
                    date: "Tomorrow",
                    time: "2:00 PM",
                    type: "Video Consultation",
                    status: "confirmed"
                },
                {
                    id: 2,
                    doctorName: "Dr. Michael Chen",
                    doctorAvatar: "👨‍⚕️",
                    date: "Friday",
                    time: "10:30 AM",
                    type: "Follow-up Session",
                    status: "confirmed"
                }
            ],
            moodHistory: [
                {date: "Mon", mood: 7, notes: "Feeling optimistic"},
                {date: "Tue", mood: 5, notes: "Stressful day at work"},
                {date: "Wed", mood: 8, notes: "Great therapy session"},
                {date: "Thu", mood: 6, notes: "Moderate anxiety"},
                {date: "Fri", mood: 9, notes: "Very positive day"},
                {date: "Sat", mood: 7, notes: "Relaxing weekend"},
                {date: "Sun", mood: 8, notes: "Practiced mindfulness"}
            ],
            currentMedications: [
                {name: "Sertraline", dosage: "50mg", frequency: "Daily", prescribedBy: "Dr. Sarah Mitchell"},
                {name: "Lorazepam", dosage: "0.5mg", frequency: "As needed", prescribedBy: "Dr. Sarah Mitchell"}
            ],
            treatmentGoals: [
                {goal: "Reduce daily anxiety levels", progress: 75, status: "on-track"},
                {goal: "Improve sleep quality", progress: 60, status: "improving"},
                {goal: "Practice mindfulness daily", progress: 90, status: "excellent"}
            ]
        };

        this.mentalHealthTools = [
            {
                name: "Mood Tracker",
                icon: "📊",
                description: "Track your daily mood and emotions",
                category: "assessment"
            },
            {
                name: "Breathing Exercises",
                icon: "🫁",
                description: "Guided breathing techniques for anxiety relief",
                category: "coping"
            },
            {
                name: "Meditation Library",
                icon: "🧘‍♀️",
                description: "Hundreds of guided meditations",
                category: "mindfulness"
            },
            {
                name: "CBT Worksheets",
                icon: "📝",
                description: "Interactive cognitive behavioral therapy tools",
                category: "therapy"
            },
            {
                name: "Crisis Support",
                icon: "🆘",
                description: "24/7 emergency mental health support",
                category: "emergency"
            },
            {
                name: "Sleep Stories",
                icon: "🌙",
                description: "Calming bedtime stories and sounds",
                category: "sleep"
            }
        ];

        this.conversations = [
            {
                id: 'dr-sarah',
                name: 'Dr. Sarah Mitchell',
                avatar: '👩‍⚕️',
                preview: 'How are you feeling today?',
                status: 'online'
            },
            {
                id: 'dr-michael',
                name: 'Dr. Michael Chen',
                avatar: '👨‍⚕️',
                preview: 'Remember to practice the breathing...',
                status: 'offline'
            }
        ];

        this.chatMessages = {
            'dr-sarah': [
                {
                    type: 'received',
                    content: 'Good morning! How are you feeling today?',
                    time: '9:30 AM'
                },
                {
                    type: 'sent',
                    content: 'Hi Dr. Mitchell! I\'m feeling much better than yesterday. The breathing exercises really helped.',
                    time: '9:32 AM'
                },
                {
                    type: 'received',
                    content: 'That\'s wonderful to hear! Breathing exercises can be very effective for managing anxiety. How would you rate your mood today on a scale of 1-10?',
                    time: '9:35 AM'
                },
                {
                    type: 'sent',
                    content: 'I\'d say about a 7-8 today. Much better than the 5 I was at yesterday.',
                    time: '9:37 AM'
                }
            ]
        };

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        console.log('Setting up MindCare application...');
        
        this.setupNavigation();
        this.setupEventListeners();
        
        // Render all content immediately
        this.renderDoctors();
        this.renderAppointments();
        this.renderDashboard();
        this.renderTools();
        this.renderMessages();
        this.setupCalendar();
        
        // Show home section by default
        this.navigateToSection('home');
        
        // Setup animations after a small delay to ensure DOM is ready
        setTimeout(() => {
            this.setupAnimations();
        }, 100);
        
        console.log('🧠 MindCare Platform initialized successfully');
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        console.log('Setting up navigation for', navItems.length, 'items');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                console.log('Navigating to section:', section);
                
                this.navigateToSection(section);
                
                // Update active state
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Add ripple effect
                this.addRippleEffect(item, e);
                
                this.showToast(`Switched to ${section.charAt(0).toUpperCase() + section.slice(1)}`);
            });
        });
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Doctor filtering
        const specialtyFilter = document.getElementById('specialtyFilter');
        const languageFilter = document.getElementById('languageFilter');
        const availabilityFilter = document.getElementById('availabilityFilter');
        
        if (specialtyFilter) {
            specialtyFilter.addEventListener('change', () => this.filterDoctors());
        }
        if (languageFilter) {
            languageFilter.addEventListener('change', () => this.filterDoctors());
        }
        if (availabilityFilter) {
            availabilityFilter.addEventListener('change', () => this.filterDoctors());
        }

        // Calendar navigation
        const prevMonth = document.getElementById('prevMonth');
        const nextMonth = document.getElementById('nextMonth');
        
        if (prevMonth) {
            prevMonth.addEventListener('click', () => this.navigateCalendar(-1));
        }
        if (nextMonth) {
            nextMonth.addEventListener('click', () => this.navigateCalendar(1));
        }

        // Booking form
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.bookAppointment();
            });
        }

        // Message input
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        // Modal close on backdrop click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
        
        console.log('Event listeners setup complete');
    }

    navigateToSection(sectionName) {
        console.log('Navigating to section:', sectionName);
        
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active');
            
            this.currentSection = sectionName;
            
            // Initialize section-specific features
            if (sectionName === 'dashboard') {
                setTimeout(() => this.initMoodChart(), 200);
            }
            
            console.log('Successfully navigated to:', sectionName);
        } else {
            console.error('Section not found:', sectionName);
        }
    }

    setupAnimations() {
        // Only setup animations if GSAP is available
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded, skipping animations');
            return;
        }

        console.log('Setting up GSAP animations...');

        // Register ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Animate floating cards in hero
        const floatingCards = document.querySelectorAll('.floating-card');
        if (floatingCards.length > 0) {
            gsap.to('.floating-card', {
                y: -20,
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.2,
                repeat: -1,
                yoyo: true
            });
        }

        // Animate cards on hover
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.doctor-card, .tool-card, .dashboard-card')) {
                const card = e.target.closest('.doctor-card, .tool-card, .dashboard-card');
                gsap.to(card, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.doctor-card, .tool-card, .dashboard-card')) {
                const card = e.target.closest('.doctor-card, .tool-card, .dashboard-card');
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        console.log('GSAP animations setup complete');
    }

    addRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    renderDoctors() {
        const container = document.getElementById('doctorsGrid');
        if (!container) {
            console.warn('Doctors grid container not found');
            return;
        }

        console.log('Rendering doctors...');
        
        container.innerHTML = this.doctors.map(doctor => `
            <div class="doctor-card" onclick="app.showDoctorProfile(${doctor.id})">
                <div class="doctor-header">
                    <div class="doctor-avatar">${doctor.avatar}</div>
                    <div class="doctor-info">
                        <h3>${doctor.name}</h3>
                        <div class="doctor-specialty">${doctor.specialty}</div>
                    </div>
                </div>
                
                <div class="doctor-rating">
                    <span class="rating-stars">⭐ ${doctor.rating}</span>
                    <span class="rating-text">(${doctor.reviewCount} reviews)</span>
                </div>
                
                <div class="doctor-details">
                    <div class="detail-item">
                        <span class="detail-label">Experience:</span>
                        <span class="detail-value">${doctor.yearsExperience} years</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Next Available:</span>
                        <span class="detail-value">${doctor.nextAvailable}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Consultation Fee:</span>
                        <span class="detail-value">$${doctor.consultationFee}</span>
                    </div>
                </div>
                
                <div class="doctor-status ${doctor.isOnline ? 'status-online' : 'status-offline'}">
                    <div class="status-dot"></div>
                    ${doctor.isOnline ? 'Available Now' : 'Offline'}
                </div>
                
                <div class="doctor-actions">
                    <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); app.bookWithDoctor(${doctor.id})">
                        Book Now
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); app.showDoctorProfile(${doctor.id})">
                        View Profile
                    </button>
                </div>
            </div>
        `).join('');
        
        console.log('Doctors rendered successfully');
    }

    filterDoctors() {
        const specialtyEl = document.getElementById('specialtyFilter');
        const languageEl = document.getElementById('languageFilter');
        const availabilityEl = document.getElementById('availabilityFilter');
        
        const specialty = specialtyEl?.value || '';
        const language = languageEl?.value || '';
        const availability = availabilityEl?.value || '';

        let filtered = this.doctors;

        if (specialty) {
            filtered = filtered.filter(doctor => 
                doctor.specialty.toLowerCase().includes(specialty)
            );
        }

        if (language) {
            filtered = filtered.filter(doctor => 
                doctor.languages.some(lang => 
                    lang.toLowerCase().includes(language)
                )
            );
        }

        if (availability === 'today' || availability === 'tomorrow') {
            filtered = filtered.filter(doctor => doctor.isOnline);
        }

        const container = document.getElementById('doctorsGrid');
        if (!container) return;

        container.innerHTML = filtered.map(doctor => `
            <div class="doctor-card" onclick="app.showDoctorProfile(${doctor.id})">
                <div class="doctor-header">
                    <div class="doctor-avatar">${doctor.avatar}</div>
                    <div class="doctor-info">
                        <h3>${doctor.name}</h3>
                        <div class="doctor-specialty">${doctor.specialty}</div>
                    </div>
                </div>
                
                <div class="doctor-rating">
                    <span class="rating-stars">⭐ ${doctor.rating}</span>
                    <span class="rating-text">(${doctor.reviewCount} reviews)</span>
                </div>
                
                <div class="doctor-details">
                    <div class="detail-item">
                        <span class="detail-label">Experience:</span>
                        <span class="detail-value">${doctor.yearsExperience} years</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Next Available:</span>
                        <span class="detail-value">${doctor.nextAvailable}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Consultation Fee:</span>
                        <span class="detail-value">$${doctor.consultationFee}</span>
                    </div>
                </div>
                
                <div class="doctor-status ${doctor.isOnline ? 'status-online' : 'status-offline'}">
                    <div class="status-dot"></div>
                    ${doctor.isOnline ? 'Available Now' : 'Offline'}
                </div>
                
                <div class="doctor-actions">
                    <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); app.bookWithDoctor(${doctor.id})">
                        Book Now
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); app.showDoctorProfile(${doctor.id})">
                        View Profile
                    </button>
                </div>
            </div>
        `).join('');

        this.showToast(`Found ${filtered.length} doctors matching your criteria`);
    }

    showDoctorProfile(doctorId) {
        const doctor = this.doctors.find(d => d.id === doctorId);
        if (!doctor) return;

        const modal = document.getElementById('doctorModal');
        const body = document.getElementById('doctorModalBody');

        body.innerHTML = `
            <div class="doctor-profile">
                <div class="profile-header">
                    <div class="doctor-avatar-lg" style="width: 80px; height: 80px; font-size: 48px; display: flex; align-items: center; justify-content: center; background: var(--color-bg-2); border-radius: var(--radius-full); margin-right: var(--space-16);">${doctor.avatar}</div>
                    <div class="profile-info">
                        <h2>${doctor.name}</h2>
                        <p class="specialty" style="color: var(--color-primary); font-weight: var(--font-weight-semibold);">${doctor.specialty}</p>
                        <div class="rating">
                            <span class="stars">⭐ ${doctor.rating}</span>
                            <span>(${doctor.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>
                
                <div class="profile-section" style="margin: var(--space-20) 0;">
                    <h4>About</h4>
                    <p>${doctor.about}</p>
                </div>
                
                <div class="profile-section" style="margin: var(--space-20) 0;">
                    <h4>Education & Experience</h4>
                    <p><strong>Education:</strong> ${doctor.education}</p>
                    <p><strong>Experience:</strong> ${doctor.yearsExperience} years</p>
                </div>
                
                <div class="profile-section" style="margin: var(--space-20) 0;">
                    <h4>Specializations</h4>
                    <div class="specializations">
                        ${doctor.specializations.map(spec => 
                            `<span class="specialization-tag" style="display: inline-block; background: var(--color-bg-3); padding: var(--space-4) var(--space-8); margin: var(--space-2); border-radius: var(--radius-sm); font-size: var(--font-size-sm);">${spec}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="profile-section" style="margin: var(--space-20) 0;">
                    <h4>Languages</h4>
                    <p>${doctor.languages.join(', ')}</p>
                </div>
                
                <div class="profile-section" style="margin: var(--space-20) 0;">
                    <h4>Insurance Accepted</h4>
                    <p>${doctor.insuranceAccepted.join(', ')}</p>
                </div>
                
                <div class="profile-actions" style="margin-top: var(--space-24);">
                    <button class="btn btn--primary btn--lg btn--full-width" onclick="app.bookWithDoctor(${doctor.id})">
                        Book Appointment - $${doctor.consultationFee}
                    </button>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    bookWithDoctor(doctorId) {
        this.currentDoctor = this.doctors.find(d => d.id === doctorId);
        this.closeDoctorModal();
        this.showBookingModal();
    }

    showBookingModal() {
        const modal = document.getElementById('bookingModal');
        const selectedDoctorEl = document.getElementById('selectedDoctor');
        
        if (this.currentDoctor) {
            selectedDoctorEl.innerHTML = `
                <div class="selected-doctor-info" style="display: flex; align-items: center; gap: var(--space-12); padding: var(--space-12); background: var(--color-bg-1); border-radius: var(--radius-md);">
                    <div class="doctor-avatar" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: var(--color-bg-2); border-radius: var(--radius-full);">${this.currentDoctor.avatar}</div>
                    <div>
                        <div class="doctor-name" style="font-weight: var(--font-weight-semibold);">${this.currentDoctor.name}</div>
                        <div class="doctor-specialty" style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${this.currentDoctor.specialty}</div>
                    </div>
                </div>
            `;
        }

        this.renderDateTimePicker();
        modal.classList.remove('hidden');
    }

    renderDateTimePicker() {
        const container = document.getElementById('datetimePicker');
        if (!container) return;

        const today = new Date();
        const dates = [];
        
        for (let i = 1; i <= 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }

        const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

        container.innerHTML = `
            <div class="date-picker" style="margin-bottom: var(--space-16);">
                <h5 style="margin-bottom: var(--space-8);">Select Date:</h5>
                <div class="date-options" style="display: flex; gap: var(--space-8); flex-wrap: wrap;">
                    ${dates.map(date => `
                        <button type="button" class="date-option" data-date="${date.toISOString()}" style="padding: var(--space-8); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); cursor: pointer; text-align: center;">
                            <span class="date-day" style="display: block; font-size: var(--font-size-xs);">${date.toLocaleDateString('en', {weekday: 'short'})}</span>
                            <span class="date-num" style="display: block; font-weight: var(--font-weight-semibold);">${date.getDate()}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="time-picker">
                <h5 style="margin-bottom: var(--space-8);">Select Time:</h5>
                <div class="time-options" style="display: flex; gap: var(--space-8); flex-wrap: wrap;">
                    ${timeSlots.map(time => `
                        <button type="button" class="time-option" data-time="${time}" style="padding: var(--space-8) var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); cursor: pointer;">${time}</button>
                    `).join('')}
                </div>
            </div>
        `;

        // Add event listeners for date/time selection
        container.querySelectorAll('.date-option').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.date-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                btn.style.background = 'var(--color-primary)';
                btn.style.color = 'var(--color-btn-primary-text)';
            });
        });

        container.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.time-option').forEach(b => {
                    b.classList.remove('selected');
                    b.style.background = 'var(--color-surface)';
                    b.style.color = 'var(--color-text)';
                });
                btn.classList.add('selected');
                btn.style.background = 'var(--color-primary)';
                btn.style.color = 'var(--color-btn-primary-text)';
            });
        });
    }

    bookAppointment() {
        const typeEl = document.getElementById('appointmentType');
        const notesEl = document.getElementById('appointmentNotes');
        const selectedDate = document.querySelector('.date-option.selected');
        const selectedTime = document.querySelector('.time-option.selected');

        const type = typeEl?.value;
        const notes = notesEl?.value;

        if (!type || !selectedDate || !selectedTime) {
            this.showToast('Please fill in all required fields', 'error');
            return;
        }

        this.showLoading(true, 'Booking your appointment...');

        setTimeout(() => {
            const newAppointment = {
                id: Date.now(),
                doctorName: this.currentDoctor.name,
                doctorAvatar: this.currentDoctor.avatar,
                date: selectedDate.querySelector('.date-day').textContent + ', ' + selectedDate.querySelector('.date-num').textContent,
                time: selectedTime.dataset.time,
                type: type,
                status: 'confirmed'
            };

            this.patientData.upcomingAppointments.unshift(newAppointment);
            this.renderAppointments();
            
            this.showLoading(false);
            this.closeBookingModal();
            this.showToast('Appointment booked successfully! 🎉');
        }, 2000);
    }

    setupCalendar() {
        this.updateCalendar();
    }

    navigateCalendar(direction) {
        this.currentMonth += direction;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.updateCalendar();
    }

    updateCalendar() {
        const titleEl = document.getElementById('calendarTitle');
        const gridEl = document.getElementById('calendarGrid');

        if (!titleEl || !gridEl) return;

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        titleEl.textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;

        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const days = [];
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push(date);
        }

        gridEl.innerHTML = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            .map(day => `<div class="calendar-day header">${day}</div>`)
            .join('') +
            days.map(date => {
                const isCurrentMonth = date.getMonth() === this.currentMonth;
                const isAvailable = isCurrentMonth && date > new Date() && date.getDay() !== 0;
                const isToday = date.toDateString() === new Date().toDateString();
                
                return `
                    <div class="calendar-day ${isAvailable ? 'available' : ''} ${isToday ? 'today' : ''}" 
                         data-date="${date.toISOString()}">
                        ${date.getDate()}
                    </div>
                `;
            }).join('');

        // Add click handlers
        gridEl.querySelectorAll('.calendar-day.available').forEach(day => {
            day.addEventListener('click', () => {
                gridEl.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
                this.selectedDate = day.dataset.date;
            });
        });
    }

    renderAppointments() {
        const container = document.getElementById('upcomingAppointments');
        if (!container) {
            console.warn('Appointments container not found');
            return;
        }

        console.log('Rendering appointments...');

        container.innerHTML = this.patientData.upcomingAppointments.map(apt => `
            <div class="appointment-item">
                <div class="appointment-header">
                    <div class="appointment-doctor" style="display: flex; align-items: center; gap: var(--space-8);">
                        <span class="doctor-avatar-sm" style="width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;">${apt.doctorAvatar}</span>
                        ${apt.doctorName}
                    </div>
                    <div class="appointment-type">${apt.type}</div>
                </div>
                <div class="appointment-time">
                    📅 ${apt.date} at ${apt.time}
                </div>
                <div class="appointment-actions" style="display: flex; gap: var(--space-8); margin-top: var(--space-12);">
                    <button class="btn btn--sm btn--primary" onclick="app.joinSession(${apt.id})">
                        Join Session
                    </button>
                    <button class="btn btn--sm btn--outline" onclick="app.rescheduleAppointment(${apt.id})">
                        Reschedule
                    </button>
                </div>
            </div>
        `).join('');
        
        console.log('Appointments rendered successfully');
    }

    renderDashboard() {
        this.renderGoals();
        this.renderMedications();
    }

    renderGoals() {
        const container = document.getElementById('goalsList');
        if (!container) return;

        console.log('Rendering goals...');

        container.innerHTML = this.patientData.treatmentGoals.map(goal => `
            <div class="goal-item">
                <div class="goal-name">${goal.goal}</div>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${goal.progress}%"></div>
                    </div>
                    <span class="progress-percentage">${goal.progress}%</span>
                </div>
                <div class="goal-status status status--${goal.status === 'excellent' ? 'success' : goal.status === 'on-track' ? 'success' : 'warning'}">
                    ${goal.status.charAt(0).toUpperCase() + goal.status.slice(1)}
                </div>
            </div>
        `).join('');
    }

    renderMedications() {
        const container = document.getElementById('medicationsList');
        if (!container) return;

        console.log('Rendering medications...');

        container.innerHTML = this.patientData.currentMedications.map(med => `
            <div class="medication-item">
                <div class="medication-info">
                    <div class="medication-name">${med.name}</div>
                    <div class="medication-details">${med.dosage} - ${med.frequency}</div>
                </div>
                <div class="medication-status status-taken">Taken</div>
            </div>
        `).join('');
    }

    initMoodChart() {
        const canvas = document.getElementById('moodChart');
        if (!canvas || this.moodChart) return;

        console.log('Initializing mood chart...');

        const ctx = canvas.getContext('2d');
        
        this.moodChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.patientData.moodHistory.map(entry => entry.date),
                datasets: [{
                    label: 'Mood Level',
                    data: this.patientData.moodHistory.map(entry => entry.mood),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
        
        console.log('Mood chart initialized successfully');
    }

    renderTools() {
        const container = document.getElementById('toolsGrid');
        if (!container) {
            console.warn('Tools grid container not found');
            return;
        }

        console.log('Rendering tools...');

        container.innerHTML = this.mentalHealthTools.map(tool => `
            <div class="tool-card" onclick="app.openTool('${tool.name}')">
                <div class="tool-category">${tool.category}</div>
                <div class="tool-icon">${tool.icon}</div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
            </div>
        `).join('');
        
        console.log('Tools rendered successfully');
    }

    openTool(toolName) {
        const modal = document.getElementById('toolModal');
        const title = document.getElementById('toolModalTitle');
        const body = document.getElementById('toolModalBody');

        if (title) title.textContent = toolName;
        
        // Generate different content based on tool
        let content = '';
        
        switch(toolName) {
            case 'Mood Tracker':
                content = this.generateMoodTrackerContent();
                break;
            case 'Breathing Exercises':
                content = this.generateBreathingContent();
                break;
            case 'Meditation Library':
                content = this.generateMeditationContent();
                break;
            case 'CBT Worksheets':
                content = this.generateCBTContent();
                break;
            case 'Crisis Support':
                content = this.generateCrisisContent();
                break;
            case 'Sleep Stories':
                content = this.generateSleepContent();
                break;
            default:
                content = '<p>Tool content coming soon...</p>';
        }
        
        if (body) body.innerHTML = content;
        if (modal) modal.classList.remove('hidden');
    }

    generateMoodTrackerContent() {
        return `
            <div class="mood-tracker-tool">
                <h4>How are you feeling today?</h4>
                <div class="mood-scale" style="display: flex; gap: var(--space-8); margin: var(--space-16) 0; justify-content: center;">
                    ${[1,2,3,4,5,6,7,8,9,10].map(num => `
                        <button class="mood-btn" data-mood="${num}" onclick="app.recordMood(${num})" style="width: 40px; height: 40px; border: 1px solid var(--color-border); border-radius: var(--radius-full); background: var(--color-surface); cursor: pointer; font-weight: var(--font-weight-semibold);">
                            ${num}
                        </button>
                    `).join('')}
                </div>
                <div class="mood-labels" style="display: flex; justify-content: space-between; margin-bottom: var(--space-16);">
                    <span>😞 Very Low</span>
                    <span>😊 Very High</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Notes (Optional)</label>
                    <textarea id="moodNotes" class="form-control" placeholder="How was your day? What influenced your mood?"></textarea>
                </div>
                <button class="btn btn--primary" onclick="app.saveMoodEntry()">Save Entry</button>
            </div>
        `;
    }

    generateBreathingContent() {
        return `
            <div class="breathing-tool" style="text-align: center;">
                <h4>Guided Breathing Exercise</h4>
                <div class="breathing-circle" id="breathingCircle" style="width: 150px; height: 150px; border: 4px solid var(--color-primary); border-radius: 50%; margin: var(--space-24) auto; display: flex; align-items: center; justify-content: center; transition: all 4s ease-in-out;">
                    <div class="breathing-text" id="breathingText">Click Start</div>
                </div>
                <div class="breathing-controls" style="margin: var(--space-24) 0;">
                    <button class="btn btn--primary" onclick="app.startBreathing()">Start Exercise</button>
                    <button class="btn btn--secondary" onclick="app.stopBreathing()">Stop</button>
                </div>
                <div class="breathing-instructions">
                    <p>Follow the circle: breathe in as it expands, breathe out as it contracts.</p>
                </div>
            </div>
        `;
    }

    generateMeditationContent() {
        const meditations = [
            { name: "Morning Mindfulness", duration: "10 min", type: "mindfulness" },
            { name: "Anxiety Relief", duration: "15 min", type: "anxiety" },
            { name: "Sleep Preparation", duration: "20 min", type: "sleep" },
            { name: "Body Scan", duration: "25 min", type: "relaxation" }
        ];

        return `
            <div class="meditation-library">
                <h4>Choose Your Meditation</h4>
                <div class="meditation-list">
                    ${meditations.map(med => `
                        <div class="meditation-item" onclick="app.playMeditation('${med.name}')" style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: var(--space-8); cursor: pointer;">
                            <div class="meditation-info">
                                <h5 style="margin-bottom: var(--space-4);">${med.name}</h5>
                                <span class="meditation-duration" style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">${med.duration}</span>
                            </div>
                            <button class="btn btn--sm btn--primary">▶ Play</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateCBTContent() {
        return `
            <div class="cbt-worksheets">
                <h4>Cognitive Behavioral Therapy Tools</h4>
                <div class="worksheet-options">
                    <div class="worksheet-item" onclick="app.startCBTWorksheet('thought-record')" style="padding: var(--space-16); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: var(--space-12); cursor: pointer;">
                        <h5>Thought Record</h5>
                        <p>Identify and challenge negative thoughts</p>
                    </div>
                    <div class="worksheet-item" onclick="app.startCBTWorksheet('mood-activity')" style="padding: var(--space-16); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: var(--space-12); cursor: pointer;">
                        <h5>Mood-Activity Chart</h5>
                        <p>Track how activities affect your mood</p>
                    </div>
                    <div class="worksheet-item" onclick="app.startCBTWorksheet('goal-setting')" style="padding: var(--space-16); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: var(--space-12); cursor: pointer;">
                        <h5>Goal Setting</h5>
                        <p>Set and track meaningful goals</p>
                    </div>
                </div>
            </div>
        `;
    }

    generateCrisisContent() {
        return `
            <div class="crisis-support">
                <div class="crisis-alert" style="background: var(--color-bg-4); padding: var(--space-16); border-radius: var(--radius-md); margin-bottom: var(--space-16);">
                    <h4>🆘 Crisis Support Resources</h4>
                    <p>If you're having thoughts of self-harm or suicide, please reach out immediately:</p>
                </div>
                
                <div class="crisis-contacts" style="margin-bottom: var(--space-16);">
                    <div class="crisis-contact" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12); padding: var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                        <strong>National Suicide Prevention Lifeline</strong>
                        <a href="tel:988" class="btn btn--primary">Call 988</a>
                    </div>
                    <div class="crisis-contact" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12); padding: var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                        <strong>Crisis Text Line</strong>
                        <span>Text HOME to 741741</span>
                    </div>
                    <div class="crisis-contact" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-12); padding: var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                        <strong>Emergency Services</strong>
                        <a href="tel:911" class="btn btn--primary">Call 911</a>
                    </div>
                </div>
                
                <div class="crisis-actions">
                    <button class="btn btn--primary btn--full-width" onclick="app.startCrisisChat()" style="margin-bottom: var(--space-8);">
                        💬 Start Crisis Chat
                    </button>
                    <button class="btn btn--outline btn--full-width" onclick="app.findNearestER()">
                        🏥 Find Nearest Emergency Room
                    </button>
                </div>
            </div>
        `;
    }

    generateSleepContent() {
        const stories = [
            "Peaceful Forest Journey",
            "Ocean Waves at Sunset", 
            "Mountain Cabin Retreat",
            "Gentle Rain Sounds"
        ];

        return `
            <div class="sleep-stories">
                <h4>Calming Sleep Stories</h4>
                <div class="story-list">
                    ${stories.map(story => `
                        <div class="story-item" onclick="app.playSleepStory('${story}')" style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-12); border: 1px solid var(--color-border); border-radius: var(--radius-md); margin-bottom: var(--space-8); cursor: pointer;">
                            <div class="story-info">
                                <h5 style="margin-bottom: var(--space-4);">${story}</h5>
                                <span class="story-duration" style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">30-45 min</span>
                            </div>
                            <button class="btn btn--sm btn--primary">▶ Play</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderMessages() {
        const container = document.getElementById('conversationsList');
        if (!container) {
            console.warn('Conversations list container not found');
            return;
        }

        console.log('Rendering messages...');

        container.innerHTML = this.conversations.map(conv => `
            <div class="conversation-item ${conv.id === this.currentConversation ? 'active' : ''}" 
                 onclick="app.selectConversation('${conv.id}')">
                <div class="conversation-avatar">${conv.avatar}</div>
                <div class="conversation-info">
                    <div class="conversation-name">${conv.name}</div>
                    <div class="conversation-preview">${conv.preview}</div>
                </div>
                <div class="conversation-status ${conv.status}" style="width: 8px; height: 8px; border-radius: 50%; background: ${conv.status === 'online' ? 'var(--color-success)' : 'var(--color-text-secondary)'};"></div>
            </div>
        `).join('');

        this.renderChatMessages();
        console.log('Messages rendered successfully');
    }

    selectConversation(conversationId) {
        this.currentConversation = conversationId;
        this.renderMessages();
    }

    renderChatMessages() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        const messages = this.chatMessages[this.currentConversation] || [];

        container.innerHTML = messages.map(msg => `
            <div class="message-item message-${msg.type}">
                <div class="message-bubble">
                    ${msg.content}
                    <div class="message-time">${msg.time}</div>
                </div>
            </div>
        `).join('');

        container.scrollTop = container.scrollHeight;
    }

    sendMessage() {
        const input = document.getElementById('messageInput');
        const message = input?.value?.trim();
        
        if (!message) return;

        const newMessage = {
            type: 'sent',
            content: message,
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };

        if (!this.chatMessages[this.currentConversation]) {
            this.chatMessages[this.currentConversation] = [];
        }

        this.chatMessages[this.currentConversation].push(newMessage);
        this.renderChatMessages();
        
        input.value = '';

        // Simulate doctor response
        setTimeout(() => {
            const responses = [
                "Thank you for sharing that with me.",
                "How does that make you feel?",
                "That's a great insight.",
                "Let's explore that further in our next session.",
                "Remember to practice the techniques we discussed."
            ];
            
            const autoResponse = {
                type: 'received',
                content: responses[Math.floor(Math.random() * responses.length)],
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            };

            this.chatMessages[this.currentConversation].push(autoResponse);
            this.renderChatMessages();
        }, 1000 + Math.random() * 2000);
    }

    // Modal functions
    closeDoctorModal() {
        const modal = document.getElementById('doctorModal');
        if (modal) modal.classList.add('hidden');
    }

    closeBookingModal() {
        const modal = document.getElementById('bookingModal');
        if (modal) modal.classList.add('hidden');
    }

    closeToolModal() {
        const modal = document.getElementById('toolModal');
        if (modal) modal.classList.add('hidden');
    }

    showEmergencyModal() {
        const modal = document.getElementById('emergencyModal');
        if (modal) modal.classList.remove('hidden');
    }

    closeEmergencyModal() {
        const modal = document.getElementById('emergencyModal');
        if (modal) modal.classList.add('hidden');
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // Utility functions
    showLoading(show, text = 'Loading...') {
        const overlay = document.getElementById('loadingOverlay');
        const textEl = document.getElementById('loadingText');
        
        if (overlay) {
            if (show) {
                if (textEl) textEl.textContent = text;
                overlay.classList.remove('hidden');
            } else {
                overlay.classList.add('hidden');
            }
        }
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const messageEl = toast?.querySelector('.toast-message');
        const iconEl = toast?.querySelector('.toast-icon');
        
        if (!toast || !messageEl) {
            console.log('Toast:', message);
            return;
        }

        messageEl.textContent = message;
        
        if (iconEl) {
            iconEl.textContent = type === 'error' ? '❌' : '✅';
        }

        toast.className = `toast toast--${type}`;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }

    // Tool interactions
    addMoodEntry() {
        this.openTool('Mood Tracker');
    }

    recordMood(moodLevel) {
        const buttons = document.querySelectorAll('.mood-btn');
        buttons.forEach(btn => {
            btn.classList.remove('selected');
            btn.style.background = 'var(--color-surface)';
            btn.style.color = 'var(--color-text)';
        });
        const selectedBtn = document.querySelector(`[data-mood="${moodLevel}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
            selectedBtn.style.background = 'var(--color-primary)';
            selectedBtn.style.color = 'var(--color-btn-primary-text)';
        }
    }

    saveMoodEntry() {
        const selectedMood = document.querySelector('.mood-btn.selected');
        const notesEl = document.getElementById('moodNotes');
        const notes = notesEl?.value;
        
        if (!selectedMood) {
            this.showToast('Please select a mood level', 'error');
            return;
        }

        // Add to mood history
        const today = new Date().toLocaleDateString('en', {weekday: 'short'});
        this.patientData.moodHistory.push({
            date: today,
            mood: parseInt(selectedMood.dataset.mood),
            notes: notes || ''
        });

        // Keep only last 7 entries
        if (this.patientData.moodHistory.length > 7) {
            this.patientData.moodHistory.shift();
        }

        // Update chart
        if (this.moodChart) {
            this.moodChart.data.labels = this.patientData.moodHistory.map(entry => entry.date);
            this.moodChart.data.datasets[0].data = this.patientData.moodHistory.map(entry => entry.mood);
            this.moodChart.update();
        }

        this.closeToolModal();
        this.showToast('Mood entry saved! 📊');
    }

    startBreathing() {
        this.showToast('Breathing exercise started. Follow the circle!');
    }

    stopBreathing() {
        this.showToast('Breathing exercise stopped.');
    }

    playMeditation(name) {
        this.showToast(`Playing: ${name}. Find a comfortable position.`);
    }

    playSleepStory(name) {
        this.showToast(`Playing: ${name}. Sweet dreams!`);
    }

    startVideoCall() {
        this.showToast('Video call feature coming soon!');
    }

    joinSession(appointmentId) {
        this.showToast('Joining session... Please wait.');
    }

    rescheduleAppointment(appointmentId) {
        this.showToast('Reschedule feature coming soon!');
    }

    startEmergencyChat() {
        this.showToast('Connecting you to crisis support...');
    }

    findNearestER() {
        this.showToast('Finding nearest emergency room...');
    }

    startCrisisChat() {
        this.showToast('Connecting to crisis counselor...');
    }

    startCBTWorksheet(type) {
        this.showToast(`Starting ${type} worksheet...`);
    }
}

// Initialize the app
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new MindCareApp();
    window.app = app;
    
    console.log('🌟 MindCare Premium Platform Ready!');
    console.log('✅ Advanced GSAP Animations');
    console.log('✅ Comprehensive Doctor Network');
    console.log('✅ Interactive Appointment System');
    console.log('✅ Mental Health Dashboard');
    console.log('✅ Wellness Tools & Resources');
    console.log('✅ Secure Messaging');
    console.log('✅ Emergency Support Features');
    console.log('✅ Premium UX Design');
});

// Add CSS for ripple effect
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);