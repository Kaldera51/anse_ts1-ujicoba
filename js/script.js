// Data untuk website
const galleryData = [
    {
        id: 1,
        title: "Pergi berlibur ke Griffith Observatory",
        description: "Datang ke Griffith Observatory, serasa main getea njir.",
        image: "images/gallery/griffith.jpg",
        date: "15 Juli 2025",
        location: "Los Angeles, California",
        category: "Wisata",
        photos: 1
    },
    {
        id: 2,
        title: "Mengunjungi The Strip di Las Vegas",
        description: "Keren bercahaya abiezzz, serasa jadi mafia kelas kakap wak.",
        image: "images/gallery/las-vegas-strip.jpg",
        date: "08 April 2024",
        location: "Las Vegas, Nevada",
        category: "Wisata",
        photos: 1
    }
]

// Data siswa
const studentsData = {
mainLeaders: [
        {
            id: 1,
            name: "M. Aslam Musyadad",
            position: "Ketua Kelas",
            initials: "AM",
            nim: "015",
            birthDate: "23 Juni 2010",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Helper"],
            achievements: ["Juara 1 MTQ tingkat Kecamatan (2022)"],
            bio: "Suka mengaji.",
            image: "images/students/aslam.jpg"
        },
        { id: 2, name: "Ferly Apri Trisnadi", position: "Wakil Ketua", initials: "FAT", nim: "008" },
        {
            id: 3,
            name: "M. Rizqi Maulana",
            position: "Sekretaris",
            initials: "RM",
            nim: "023",
            birthDate: "01 Oktober 2009",
            address: "Jetak Kedungdowo, Kaliwungu, Kudus",
            hobbies: ["Roleplay", "Program"],
            achievements: [],
            bio: "Ingin menjadi programmer handal namun enggan ngoding.",
            image: "images/students/rizqi-maulana.jpg"
        },
        {
            id: 4,
            name: "Aris Dwi Saputra",
            position: "Bendahara",
            initials: "ADS",
            nim: "005",
            birthDate: "09 Januari 2009",
            address: "Mijen Gadon, Kaliwungu, Kudus",
            hobbies: ["Game", "Jogging", "Fishing"],
            achievements: ["Juara 1 Lomba Adzan tingkat Desa (2019)"],
            bio: "Saya islam.",
            image: "images/students/aris.jpg"
        }
    ],
    
    coordinators: [
        {
            id: 5,
            name: "Muhammad Kholil",
            position: "Seksi Pendidikan",
            initials: "MK",
            nim: "020",
            birthDate: "29 September 2009",
            address: "Mijen Krajan, Kaliwungu, Kudus",
            hobbies: ["Volley Ball"],
            achievements: [],
            bio: "Rajin mengaji.",
            image: "images/students/kholil.jpg"
        },
        {
            id: 6,
            name: "Andika Fajar Zulianto",
            position: "Seksi Kebersihan",
            initials: "AFZ",
            nim: "004",
            birthDate: "24 Oktober 2009",
            address: "Mijen Klisat, Kaliwungu, Kudus",
            hobbies: ["Jogging", "Social Media"],
            achievements: [],
            bio: "Orang baik-baik, pendiam, dan murah hati.",
            image: "images/students/andika.jpg"
        },
        {
            id: 7,
            name: "M. Yahya Arif",
            position: "Seksi Keamanan",
            initials: "YA",
            nim: "011",
            birthDate: "23 Juni 2009",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Indoor Football", "Jogging"],
            achievements: ["Juara 1 Lomba Lari Sprint tingkat Kecamatan (2024)", "Juara 3 Lomba Puisi tingkat Sekolah (2024)"],
            bio: "Baik hati, sabar, dan tidak sombong.",
            image: "images/students/yahya.jpg"
        },
        { id: 8, name: "M. Yusuf Zakaria", position: "Seksi Olahraga", initials: "YZ", nim: "024" }
    ],
    
    classMembers: [
        { id: 9, name: "Achmad Mahendra", position: "Anggota", initials: "AM", nim: "001" },
        { id: 10, name: "Achmad Maulana Fahri", position: "Anggota", initials: "AMF", nim: "002" },
        { id: 11, name: "Achmad Miftahul Ula", position: "Anggota", initials: "AMU", nim: "003" },
        { id: 12, name: "Bagus Ahmad Dinijad", position: "Anggota", initials: "BAD", nim: "006" },
        {
            id: 13,
            name: "Farel Firmansyah",
            position: "Anggota",
            initials: "FF",
            nim: "007",
            birthDate: "10 November 2008",
            address: "Kedungdowo, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Mboh, ak dewe yo rrti.",
            image: "images/students/farel.jpg"
        },
        { id: 14, name: "Firdaus Galih Kurniawan", position: "Anggota", initials: "FGK", nim: "009" },
        { id: 15, name: "Masyaril Kharom", position: "Anggota", initials: "MK", nim: "010" },
        {
            id: 16,
            name: "Muhammad Doni",
            position: "Anggota",
            initials: "MD",
            nim: "012",
            birthDate: "05 Januari 2009",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Social Media"],
            achievements: [],
            bio: "Sering tidur.",
            image: "images/students/doni.jpg"
        },
        { id: 17, name: "M. Abdul Ryan", position: "Anggota", initials: "AR", nim: "013" },
        {
            id: 18,
            name: "M. Afka Immanul Haq",
            position: "Anggota",
            initials: "AIH",
            nim: "014",
            birthDate: "08 Mei 2009",
            address: "Sidorekso, Kaliwungu, Kudus",
            hobbies: ["Mount", "Travel"],
            achievements: [],
            bio: "Random Boy.",
            image: "images/students/afka.jpg"
        },
        {
            id: 19,
            name: "M. Dhika Saputra",
            position: "Anggota",
            initials: "DS",
            nim: "016",
            birthDate: "20 Desember 2008",
            address: "Belimbing Kidul, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Ingin menjadi orang yang lebih baik dari kemarin.",
            image: "images/students/dhika.jpg"
        },
        { id: 20, name: "M. Dwi Rizky Pradipta", position: "Anggota", initials: "DRP", nim: "017" },
        { id: 21, name: "M. Ilyas Sri Perdana", position: "Anggota", initials: "ISP", nim: "018" },
        {
            id: 22,
            name: "M. Kevin Muntakim",
            position: "Anggota",
            initials: "KM",
            nim: "019",
            birthDate: "07 Agustus 2009",
            address: "Mijen, Kaliwungu, Kudus",
            hobbies: ["Video Editor"],
            achievements: [],
            bio: "Kepin Dingin Banget Njing.",
            image: "images/students/kevin.jpg"
        },
        { id: 23, name: "Muhammad Masduqi", position: "Anggota", initials: "MM", nim: "021" },
        {
            id: 24,
            name: "M. Maulana Akmal",
            position: "Anggota",
            initials: "MA",
            nim: "022",
            birthDate: "25 Juli 2008",
            address: "Kacu Banget, Kaliwungu, Kudus",
            hobbies: ["Game"],
            achievements: [],
            bio: "Ramah, baik hati, humoris, tidak sombong, rajin ibadah, dan juga soft spoken.",
            image: "images/students/akmal.jpg"
        },
        { id: 25, name: "Rifky Akbar Nur Ramadhani", position: "Anggota", initials: "RANR", nim: "025" },
        { id: 26, name: "Rizki Dhinar Widhianto", position: "Anggota", initials: "RDW", nim: "026" },
        { id: 27, name: "Seno Indrawan", position: "Anggota", initials: "SI", nim: "027" },
        { id: 28, name: "Sugi Rejo", position: "Anggota", initials: "SR", nim: "028" },
        { id: 29, name: "M. Nailal Muna", position: "Anggota", initials: "NM", nim: "029" },
    ]
};

const scheduleData = {
    days: ['Sabtu', 'Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis'],
    subjects: {
        'Tadarus': '#8B4513',
        'Sejarah Kebudayaan Islam - Umi Syafaah, S.Pd.I.': '#654321',
        'Ke NU an - Umi Syafaah, S.Pd.I.': '#A0522D',
        'PJOK - Sunarto, S.E.': '#D2691E',
        'Bahasa Inggris - Akhmadatus Samawat, S.Ag.': '#CD853F',
        'Akhlak Kitab - Habib Tanwir, S.Pd.': '#8B7355',
        'Akidah Akhlak - Ririn Sholikhah, S.Pd.I.': '#C0A080',
        'Ekonomi - H. Zamroni, M.E.': '#228B22',
        'Sosiologi - Moch. Anwar Bagus, S.H.': '#2E8B57',
        'Tafsir - Fathul \'Alim, S.Pd.': '#3CB371',
        'Matematika - Tiara Intani Dewi, S.Pd.': '#4169E1',
        'Geografi - Efy Rachmawati, S.Sos., M.Pd.': '#4682B4',
        'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.': '#5F9EA0',
        'Bahasa Indonesia - Habib Tanwir, S.Pd.': '#6495ED',
        'Vokasi - Ali Zainudin.': '#1E90FF',
        'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.': '#DC143C',
        'Fiqih Kitab - Fauzan Akbar, S.H.I.': '#A52A2A',
        'Aswaja - K.H. Ahmad Radjab.': '#B22222',
        'Takhasus - Fathul \'Alim, S.Pd.': '#CD5C5C',
        'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.': '#32CD32',
        'Bahasa Arab - M. Fahmi Musthofa, S.Pd.': '#20B2AA',
        'Fiqih - Fauzan Akbar, S.H.I.': '#008080',
        'Sejarah - Umi Syafaah, S.Pd.I.': '#6A5ACD'
    },
    schedule: {
        'Sabtu': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Sejarah Kebudayaan Islam - Umi Syafaah, S.Pd.I.' },
            { time: '08:10 - 08:50', subject: 'Ke NU an - Umi Syafaah, S.Pd.I.' },
            { time: '08:50 - 09:30', subject: 'PJOK - Sunarto, S.E.' },
            { time: '09:30 - 10:10', subject: 'PJOK - Sunarto, S.E.' },
            { time: '10:30 - 11:10', subject: 'Bahasa Inggris - Akhmadatus Samawat, S.Ag.' },
            { time: '11:10 - 11:50', subject: 'Bahasa Inggris - Akhmadatus Samawat, S.Ag.' },
            { time: '12:20 - 13:00', subject: 'Akhlak Kitab - Habib Tanwir, S.Pd.' },
            { time: '13:00 - 13:40', subject: 'Akidah Akhlak - Ririn Sholikhah, S.Pd.I.' }
        ],
        'Ahad': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:45 - 08:10', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '08:30 - 08:50', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '09:15 - 09:30', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '10:15 - 10:10', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '10:30 - 11:10', subject: 'Sosiologi - Moch. Anwar Bagus, S.H.' },
            { time: '11:10 - 11:50', subject: 'Tafsir - Fathul \'Alim, S.Pd.' }
        ],
        'Senin': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '08:10 - 08:50', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '08:50 - 09:30', subject: 'Matematika - Tiara Intani Dewi, S.Pd.' },
            { time: '09:30 - 10:10', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '10:30 - 11:10', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '11:10 - 11:50', subject: 'Geografi - Efy Rachmawati, S.Sos., M.Pd.' },
            { time: '12:20 - 13:00', subject: 'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.' },
            { time: '13:00 - 13:40', subject: 'Nahwu Shorof - M. Khoirul Fikri M., S.Ag.' }
        ],
        'Selasa': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '08:10 - 08:50', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '08:50 - 09:30', subject: 'Vokasi - Ali Zainudin.' },
            { time: '09:30 - 10:10', subject: 'Vokasi - Ali Zainudin.' },
            { time: '10:30 - 11:10', subject: 'Vokasi - Ali Zainudin.' },
            { time: '11:10 - 11:50', subject: 'Vokasi - Ali Zainudin.' },
            { time: '12:20 - 13:00', subject: 'Vokasi - Ali Zainudin.' },
            { time: '13:00 - 13:40', subject: 'Vokasi - Ali Zainudin.' }
        ],
        'Rabu': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.' },
            { time: '08:10 - 08:50', subject: 'Pendidikan Pancasila - Moch. Anwar Bagus, S.H.' },
            { time: '08:50 - 09:30', subject: 'Fiqih Kitab - Fauzan Akbar, S.H.I.' },
            { time: '09:30 - 10:10', subject: 'Ekonomi - H. Zamroni, M.E.' },
            { time: '10:30 - 11:10', subject: 'Aswaja - K.H. Ahmad Radjab.' },
            { time: '11:10 - 11:50', subject: 'Bahasa Indonesia - Habib Tanwir, S.Pd.' },
            { time: '12:20 - 13:00', subject: 'Takhasus - Fathul \'Alim, S.Pd.' },
            { time: '13:00 - 13:40', subject: 'Takhasus - Fathul \'Alim, S.Pd.' }
        ],
        'Kamis': [
            { time: '06:55 - 07:30', subject: 'Tadarus' },
            { time: '07:30 - 08:10', subject: 'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.' },
            { time: '08:10 - 08:50', subject: 'Qur\'an Hadits - H. Yusuf Ilhami, M.Pd.I.' },
            { time: '08:50 - 09:30', subject: 'Bahasa Arab - M. Fahmi Musthofa, S.Pd.' },
            { time: '09:30 - 10:10', subject: 'Bahasa Arab - M. Fahmi Musthofa, S.Pd.' },
            { time: '10:30 - 11:10', subject: 'Fiqih - Fauzan Akbar, S.H.I.' },
            { time: '11:10 - 11:50', subject: 'Fiqih - Fauzan Akbar, S.H.I.' },
            { time: '12:20 - 13:00', subject: 'Sejarah - Umi Syafaah, S.Pd.I.' },
            { time: '13:00 - 13:40', subject: 'Sejarah - Umi Syafaah, S.Pd.I.' }
        ]
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    loadGallery();
    loadStudents();
    loadSchedule();
    setupEventListeners();
    setupScrollEffects();
    setupStudentModals();
    initializeMobileFeatures();
    centerHeroSection();
    setupEventDelegation();
}

// Load Gallery Data
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        
        galleryItem.innerHTML = `
            <div class="gallery-image">
                ${item.image ? 
                    `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none';">
                     <div class="image-placeholder" style="${item.image ? 'display: none' : ''}">
                         <i class="fas fa-image"></i>
                     </div>` :
                    `<div class="image-placeholder">
                         <i class="fas fa-image"></i>
                     </div>`
                }
                <div class="gallery-badge">${item.category}</div>
            </div>
            <div class="gallery-content">
                <h3>${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                <div class="gallery-meta">
                    <span class="gallery-date">
                        <i class="fas fa-calendar"></i> ${item.date}
                    </span>
                    <span class="gallery-photos">
                        <i class="fas fa-camera"></i> ${item.photos} foto
                    </span>
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
    
    setupGalleryModals();
}

// Fungsi untuk setup gallery modals
function setupGalleryModals() {
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.querySelector('.close-gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Click event untuk gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const galleryItem = galleryData.find(item => item.id === itemId);
            if (galleryItem) {
                showGalleryModal(galleryItem);
            }
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal ketika klik di luar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close dengan ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

function showGalleryModal(item) {
    const modal = document.getElementById('galleryModal');
    const modalBody = document.getElementById('galleryModalBody');
    
    modalBody.innerHTML = `
        <div class="gallery-modal-image">
            ${item.image ? 
                `<img src="${item.image}" alt="${item.title}">` :
                `<div style="text-align: center; color: var(--primary-color);">
                     <i class="fas fa-image" style="font-size: 4rem; margin-bottom: 20px;"></i>
                     <p>Gambar tidak tersedia</p>
                 </div>`
            }
        </div>
        <div class="gallery-modal-info">
            <h2 class="gallery-modal-title">${item.title}</h2>
            <p class="gallery-modal-description">${item.description}</p>
            
            <div class="gallery-modal-details">
                <div class="detail-item">
                    <span class="detail-label">Tanggal:</span>
                    <span class="detail-value">${item.date}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Lokasi:</span>
                    <span class="detail-value">${item.location}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Kategori:</span>
                    <span class="detail-value">${item.category}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Total Foto:</span>
                    <span class="detail-value">${item.photos} foto</span>
                </div>
            </div>
            
            <button class="btn btn-primary">
                <i class="fas fa-images"></i> Lihat Album Lengkap
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Fungsi untuk load students
function loadStudents() {
    loadStudentCategory('main-leaders', studentsData.mainLeaders);
    loadStudentCategory('coordinators', studentsData.coordinators);
    loadStudentCategory('class-members', studentsData.classMembers);
}

function loadStudentCategory(containerId, students) {
    const container = document.getElementById(containerId);
    
    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.setAttribute('data-id', student.id);
        
        studentCard.innerHTML = `
            <div class="student-avatar">
                ${student.image ? 
                    `<img src="${student.image}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="avatar-initials" style="display: none">${student.initials}</div>` :
                    `<div class="avatar-initials">${student.initials}</div>`
                }
            </div>
            <h3>${student.name}</h3>
            <div class="student-position">${student.position}</div>
            ${student.position !== 'Anggota' ? '<div class="student-badge">Pengurus</div>' : ''}
        `;
        
        container.appendChild(studentCard);
    });
}

// Fungsi untuk modal detail siswa
function setupStudentModals() {
    const modal = document.getElementById('studentModal');
    const closeBtn = document.querySelector('.close-modal');
    const studentCards = document.querySelectorAll('.student-card');

    // Click event untuk student cards
    studentCards.forEach(card => {
        card.addEventListener('click', function() {
            const studentId = parseInt(this.getAttribute('data-id'));
            const student = findStudentById(studentId);
            if (student) {
                showStudentModal(student);
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal ketika klik di luar
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close dengan ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

function findStudentById(id) {
    // Cari di semua kategori
    const allStudents = [
        ...studentsData.mainLeaders,
        ...studentsData.coordinators,
        ...studentsData.classMembers
    ];
    return allStudents.find(student => student.id === id);
}

function showStudentModal(student) {
    const modal = document.getElementById('studentModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="student-detail">
            <!-- Header dengan Avatar -->
            <div class="student-detail-header">
                <div class="student-detail-avatar">
                    ${student.image ? 
                        `<img src="${student.image}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                         <div class="avatar-initials" style="display: none">${student.initials}</div>` :
                        `<div class="avatar-initials">${student.initials}</div>`
                    }
                </div>
                <h2>${student.name}</h2>
                <div class="student-detail-position">${student.position}</div>
                <div class="student-nim">No. Absen: ${student.nim}</div>
            </div>
            
            <!-- Informasi Pribadi -->
            ${student.birthDate || student.address ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-user-circle"></i>
                    Informasi Pribadi
                </h3>
                <div class="personal-info-grid">
                    ${student.birthDate ? `
                    <div class="info-item">
                        <span class="info-label">
                            <i class="fas fa-birthday-cake"></i>
                            Tanggal Lahir
                        </span>
                        <span class="info-value">${student.birthDate}</span>
                    </div>
                    ` : ''}
                    
                    ${student.address ? `
                    <div class="info-item">
                        <span class="info-label">
                            <i class="fas fa-map-marker-alt"></i>
                            Alamat
                        </span>
                        <span class="info-value">${student.address}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            
            <!-- Tentang Saya -->
            ${student.bio ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-file-alt"></i>
                    Tentang Saya
                </h3>
                <div class="bio-text">
                    ${student.bio}
                </div>
            </div>
            ` : ''}
            
            <!-- Hobi -->
            ${student.hobbies && student.hobbies.length > 0 ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-heart"></i>
                    Hobi & Minat
                </h3>
                <div class="hobbies-container">
                    ${student.hobbies.map(hobby => `
                        <span class="hobby-tag">${hobby}</span>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <!-- Prestasi -->
            ${student.achievements && student.achievements.length > 0 ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-trophy"></i>
                    Prestasi
                </h3>
                <ul class="achievements-list">
                    ${student.achievements.map(achievement => `
                        <li class="achievement-item">
                            <i class="fas fa-award achievement-icon"></i>
                            <span class="achievement-text">${achievement}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Kontak -->
            ${student.phone || student.email ? `
            <div class="info-section">
                <h3 class="section-title-modal">
                    <i class="fas fa-address-book"></i>
                    Kontak
                </h3>
                <div class="contact-links">
                    ${student.phone ? `
                    <a href="tel:${student.phone}" class="contact-link">
                        <i class="fas fa-phone"></i>
                        ${student.phone}
                    </a>
                    ` : ''}
                    
                    ${student.email ? `
                    <a href="mailto:${student.email}" class="contact-link">
                        <i class="fas fa-envelope"></i>
                        ${student.email}
                    </a>
                    ` : ''}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Load Schedule Data
function loadSchedule() {
    const scheduleContainer = document.querySelector('.schedule-container');
    
    scheduleContainer.innerHTML = `
        <div class="schedule-tabs" id="scheduleTabs">
            ${scheduleData.days.map(day => `
                <button class="schedule-tab ${day === 'Senin' ? 'active' : ''}" data-day="${day}">
                    ${day}
                </button>
            `).join('')}
        </div>
        
        <div class="schedule-days" id="scheduleDays">
            ${scheduleData.days.map(day => `
                <div class="schedule-day ${day === 'Senin' ? 'active' : ''}" data-day="${day}">
                    <h3 class="day-title">Jadwal Pelajaran - ${day}</h3>
                    <div class="schedule-classes" id="classes-${day}">
                        <!-- Classes will be loaded here -->
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="schedule-summary">
            <div class="summary-item">
                <div class="summary-number">${scheduleData.days.length}</div>
                <div class="summary-label">Hari Aktif</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${Object.keys(scheduleData.subjects).length}</div>
                <div class="summary-label">Mata Pelajaran</div>
            </div>
            <div class="summary-item">
                <div class="summary-number">${getTotalClasses()}</div>
                <div class="summary-label">Total Jam</div>
            </div>
        </div>
    `;
    
    // Load classes for each day
    scheduleData.days.forEach(day => {
        loadDaySchedule(day);
    });
    
    setupScheduleTabs();
}

function loadDaySchedule(day) {
    const classesContainer = document.getElementById(`classes-${day}`);
    const classes = scheduleData.schedule[day];
    
    classesContainer.innerHTML = classes.map((classItem, index) => {
        const subjectColor = scheduleData.subjects[classItem.subject] || '#8B4513';
        
        return `
            <div class="class-item" style="border-left-color: ${subjectColor}">
                <div class="class-time">
                    <i class="fas fa-clock"></i>
                    ${classItem.time}
                </div>
                <div class="class-subject">${classItem.subject}</div>
                <div class="class-badge" style="background: ${subjectColor}">
                    Jam ${index + 1}
                </div>
            </div>
        `;
    }).join('');
}

function setupScheduleTabs() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const days = document.querySelectorAll('.schedule-day');
    
    tabs.forEach(tab => {
        // Gunakan both click dan touchstart events
        tab.addEventListener('click', handleTabClick);
        tab.addEventListener('touchstart', handleTabClick);
    });
    
    function handleTabClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const day = this.getAttribute('data-day');
        
        // Remove active class from all tabs and days
        tabs.forEach(t => t.classList.remove('active'));
        days.forEach(d => d.classList.remove('active'));
        
        // Add active class to current tab and day
        this.classList.add('active');
        document.querySelector(`.schedule-day[data-day="${day}"]`).classList.add('active');
    }
}

function getTotalClasses() {
    let total = 0;
    scheduleData.days.forEach(day => {
        total += scheduleData.schedule[day].length;
    });
    return total;
}
    
    // Create header row
    const headerRow = document.createElement('tr');
    scheduleData.headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    scheduleTable.appendChild(headerRow);
    
    // Create data rows
    scheduleData.rows.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
        });
        scheduleTable.appendChild(row);
    });

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle (tetap sama)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link (tetap sama)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(); // Panggil fungsi baru
    });
    
    // Smooth scrolling for navigation links (tetap sama)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup Scroll Effects
function setupScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        // Add fade-in animation for sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Handle Form Submission
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading bubble
    showBubble('loading', 'Mengirim Pesan...', 'Sedang mengirim ke email kami');
    
    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    
    // Custom URL Formspree
    const formspreeURL = 'https://formspree.io/f/mwprnneg';
    
    const formData = new FormData(form);
    
    fetch(formspreeURL, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            hideBubble();
            showBubble('success', 'Pesan Terkirim!', 'Pesan berhasil dikirim ke email kami');
            form.reset();
            
            // AUTO HIDE SUCCESS setelah 5 detik
            setTimeout(() => {
                hideBubble();
            }, 5000);
            
        } else {
            hideBubble();
            showBubble('error', 'Gagal Mengirim', 'Server down atau ada yang salah');
            
            // AUTO HIDE ERROR setelah 5 detik
            setTimeout(() => {
                hideBubble();
            }, 5000);
        }
    })
    .catch(error => {
        hideBubble();
        showBubble('error', 'Koneksi Error', 'Benerin dulu koneksi internet kamu');
        
        // AUTO HIDE ERROR setelah 5 detik
        setTimeout(() => {
            hideBubble();
        }, 5000);
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Fungsi untuk show bubble notification
function showBubble(type, title, message) {
    // Remove existing bubble if any
    const existingBubble = document.getElementById('formBubble');
    if (existingBubble) {
        existingBubble.remove();
    }
    
    const bubble = document.createElement('div');
    bubble.id = 'formBubble';
    bubble.className = `bubble-notification bubble-${type}`;
    
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle bubble-icon"></i>';
            break;
        case 'loading':
            icon = '<div class="loading-spinner"></div>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-triangle bubble-icon"></i>';
            break;
    }
    
    bubble.innerHTML = `
        <div class="bubble-content">
            <div class="bubble-icon">${icon}</div>
            <div class="bubble-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(bubble);
    
    // Trigger animation
    setTimeout(() => {
        bubble.classList.add('show');
    }, 100);
}

// Fungsi untuk hide bubble notification
function hideBubble() {
    const bubble = document.getElementById('formBubble');
    if (bubble) {
        bubble.classList.remove('show');
        bubble.classList.add('hide');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 500);
    }
}

// Add some interactive features
function setupInteractiveFeatures() {
    // Add click effect to student cards
    document.querySelectorAll('.student-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add loading animation
    function setupEventListeners() {
        document.body.classList.add('loaded');
    };
}

// Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(); showBubble('loading', 'Judul', 'Pesan'); // Untuk loading
showBubble('success', 'Judul', 'Pesan'); // Untuk success  
showBubble('error', 'Judul', 'Pesan'); // Untuk error
hideBubble(); // Memanggil fungsi baru
    });

// Initialize interactive features
setupInteractiveFeatures();

// ======= MOBILE FEATURES =======

// Mobile-specific initialization
function initializeMobileFeatures() {
    setupTouchEvents();
    preventZoomOnInput();
    optimizeMobilePerformance();
    setupMobileTouchFix();
}

// ===== HERO CENTERING FIX =====
function centerHeroSection() {
    const hero = document.querySelector('.hero');
    const header = document.getElementById('header');
    
    function updateHeroCenter() {
        const headerHeight = header.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Set hero height to fill screen minus header
        hero.style.minHeight = `${windowHeight - headerHeight}px`;
        hero.style.marginTop = `${headerHeight}px`;
    }
    
    // Update on load and resize
    updateHeroCenter();
    window.addEventListener('resize', updateHeroCenter);
    window.addEventListener('load', updateHeroCenter);
}

// Better touch events
function setupTouchEvents() {
    const touchElements = document.querySelectorAll('.student-card, .gallery-item, .btn, .schedule-tab');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transition = 'transform 0.1s ease, opacity 0.1s ease';
            this.style.transform = 'scale(0.97)';
            this.style.opacity = '0.9';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    });
}

// Prevent zoom on input focus (iOS)
function preventZoomOnInput() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px'; // Prevent zoom on iOS
        });
    });
}

function optimizeMobilePerformance() {
    // Debounce scroll events
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (!scrollTimer) {
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                // Scroll handling code here
            }, 100);
        }
    });
    
    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

function switchToNextScheduleTab() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const activeTab = document.querySelector('.schedule-tab.active');
    const currentIndex = Array.from(tabs).indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    
    tabs[nextIndex].click();
}

function switchToPrevScheduleTab() {
    const tabs = document.querySelectorAll('.schedule-tab');
    const activeTab = document.querySelector('.schedule-tab.active');
    const currentIndex = Array.from(tabs).indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    
    tabs[prevIndex].click();
}

// ===== FIXED MOBILE TOUCH FOR ALL ELEMENTS =====
function setupMobileTouchFix() {
    console.log('Setting up mobile touch fix for ALL elements...');
    
    // Tunggu sampai semua element ready
    setTimeout(() => {
        // === STUDENT CARDS ===
        const studentCards = document.querySelectorAll('.student-card');
        console.log('Found', studentCards.length, 'student cards');
        
        studentCards.forEach(card => {
            // HAPUS semua existing event listeners dulu
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
        });
        
        // Re-attach ke student cards yang baru
        document.querySelectorAll('.student-card').forEach(card => {
            card.onclick = function(e) {
                console.log('Student card CLICKED!');
                e.preventDefault();
                e.stopPropagation();
                
                const studentId = parseInt(this.getAttribute('data-id'));
                const student = findStudentById(studentId);
                if (student) {
                    showStudentModal(student);
                }
                return false;
            };
        });
        
        // === GALLERY ITEMS ===
        const galleryItems = document.querySelectorAll('.gallery-item');
        console.log('Found', galleryItems.length, 'gallery items');
        
        galleryItems.forEach(item => {
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
        });
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.onclick = function(e) {
                console.log('Gallery item CLICKED!');
                e.preventDefault();
                e.stopPropagation();
                
                const itemId = parseInt(this.getAttribute('data-id'));
                const galleryItem = galleryData.find(item => item.id === itemId);
                if (galleryItem) {
                    showGalleryModal(galleryItem);
                }
                return false;
            };
        });
        
        // === SCHEDULE TABS ===
        const scheduleTabs = document.querySelectorAll('.schedule-tab');
        console.log('Found', scheduleTabs.length, 'schedule tabs');
        
        // Setup schedule tabs functionality
        setupScheduleTabs();
        
        // === BUTTON "MARI KITA JELAJAHI" ===
        const exploreBtn = document.querySelector('.hero .btn-primary');
        if (exploreBtn) {
            exploreBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.querySelector('#about');
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
                return false;
            };
        }
        
        // === NAVIGATION LINKS ===
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.onclick = function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
                
                // Close mobile menu jika terbuka
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                return false;
            };
        });
        
        console.log('Mobile touch fix applied successfully!');
        
    }, 1500); // Tunggu 1.5 detik biar semua element benar-benar ready
}