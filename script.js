
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(() => {
                    const splashScreen = document.getElementById('splash-screen');
                    splashScreen.classList.add('hidden');
                }, 3000);

            const root = document.getElementById('root');
            let activeTab = 'Home';
            let activeMenu = 'Home';
            let searchQuery = '';
            let isSearchOpen = false;
            let isMenuOpen = false;
            const counts = {
                'Mythic Rank Boost': 1,
                'Epic Rank Boost': 2,
                'Legend Rank Boost': 3,
                'Grandmaster Rank Boost': 4
            };

            const handleTabClick = (tab) => {
                activeTab = tab;
                render();
            };

            const handleMenuClick = (menu) => {
                activeMenu = menu;
                render();
            };

            const handleIncrement = (title) => {
                counts[title]++;
                render();
            };

            const handleDecrement = (title) => {
                if (counts[title] > 0) counts[title]--;
                render();
            };

            const handleSearchToggle = () => {
                isSearchOpen = !isSearchOpen;
                render();
            };

            const handleSearchChange = (e) => {
                searchQuery = e.target.value;
            };

            const handleMenuToggle = () => {
                isMenuOpen = !isMenuOpen;
                render();
                const menu = document.querySelector('styles.css'); // ganti '.menu-class' dengan kelas CSS menu Anda
                if (isMenuOpen) {
                  menu.style.transition = "transform 0.3s ease-in-out";
                  menu.style.transform = "translateX(0)";
                } else {
                  menu.style.transform = "translateX(-100%)";
                }
              };
              

            const scrollToSection = (sectionId) => {
                const offset = 60; // Adjust based on navbar height
                const section = document.getElementById(sectionId);
                const yPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: yPosition, behavior: 'smooth' });
                isMenuOpen = false;
                render();
            };
            

            const handleSearchSubmit = () => {
                const sections = ['home', 'about', 'harga', 'contact'];
                const foundSection = sections.find(section => section.includes(searchQuery.toLowerCase()));
                if (foundSection) {
                    scrollToSection(foundSection);
                } else {
                    alert('Kata yang anda cari tidak ada');
                }
            };
            
            const images = [
                "assets/BISNIS JOKI - HEADER 3.png",   // Gambar pertama
                "assets/slogan.png",
                "assets/BISNIS JOKI - HEADER 2.png"  // Gambar kedua
            ];
            let currentImageIndex = 0;
            
            function changeImage() {
                const sliderImage = document.getElementById('slider-image');
                currentImageIndex = (currentImageIndex + 1) % images.length;
                sliderImage.style.opacity = 0; // Fade out
                setTimeout(() => {
                    sliderImage.src = images[currentImageIndex];
                    sliderImage.style.opacity = 1; // Fade in
                }, 1000); // Delay for fade transition
            }
            
            // Ubah gambar setiap 5 detik
            setInterval(changeImage, 5000);
             // Menangani perubahan skala gambar berdasarkan ukuran layar
            const adjustImageScale = () => {
                const hargaImages = document.querySelectorAll('.harga-item img');
                const tutorialImages = document.querySelectorAll('.tutorial-item img');

                if (window.innerWidth <= 600) {
                    hargaImages.forEach(img => img.style.transform = 'scale(0.5)');
                    tutorialImages.forEach(img => img.style.transform = 'scale(0.5)');
                } else {
                    hargaImages.forEach(img => img.style.transform = 'scale(1)');
                    tutorialImages.forEach(img => img.style.transform = 'scale(1)');
                }
            };

            // Event listener untuk menyesuaikan skala gambar saat ukuran layar berubah
            window.addEventListener('resize', adjustImageScale);
            adjustImageScale(); // Panggil saat halaman dimuat

            const renderMenuContent = () => {
                if (activeMenu === 'Home') {
                    return `
                        <div class="space-y-8">
                            <section id="home" class="text-center">
                                <div id="slider" class="relative w-full mt-4">
                                    <img id="slider-image" src="assets/BISNIS JOKI - HEADER 3.png" alt="Illustration of Mobile Legends gameplay 1" class="w-full rounded-lg transition-opacity duration-1000 opacity-100" />
                                </div>
                            </section>

                            <section id="about" class="flex flex-col md:flex-row items-center">
                                <div class="md:w-1/2 p-4 order-2 md:order-1">
                                    <img src="assets/LOGO JOKI 2 1.png" alt="Illustration of professional Mobile Legends players" class="w-full rounded-lg" />
                                </div>
                                <div class="md:w-1/2 p-4 order-1 md:order-2">
                                    <h2 class="text-3xl font-bold">Kenapa Harus Joki di BoostBlitz?</h2>
                                    <p class="mt-2"><p>-BoostBlitz</p>
                                    <p>Rise Through The Ranks at Lighting Speed!</p>
                                    Capai rank tertinggi mu dengan secepat kilat! Layaknya kilat, joki bersama BoostBlitz dijamin selesai dengan cepat, murah, dan tentunya aman.</p>
                                </div>
                            </section>
                             <section id="harga" class="text-center">
                            <h2 class="text-3xl font-bold">Harga Price List</h2>
                            <div class="mt-4 overflow-x-auto flex space-x-4">
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Mythic Rank Boost Full Granding</h3>
                                    <p class="mt-2">Rp 165.000</p>
                                    <img src="assets/MYTHIC.png" alt="Illustration of Mythic Rank Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Epic Rank Boost 1 star</h3>
                                    <p class="mt-2">Rp 5.500</p>
                                    <img src="assets/EPIC.png" alt="Illustration of Epic Rank Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Legend Rank Boost 1 star</h3>
                                    <p class="mt-2">Rp 6.500</p>
                                    <img src="assets/LEGEND.png" alt="Illustration of Legend Rank Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Mythic Rank Boost 1 star Rank Boost</h3>
                                    <p class="mt-2">Rp 14.500</p>
                                    <img src="assets/MYTHIC.png" alt="Illustration of Grandmaster Rank Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Mythic Honor Boost 1 star</h3>
                                    <p class="mt-2">Rp 15.000</p>
                                    <img src="assets/HONOR.png" alt="Illustration of Mythic Honor Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Mythic Glory Boost 1 star</h3>
                                    <p class="mt-2">Rp 19.500</p>
                                    <img src="assets/GLORY.png" alt="Illustration of Mythic Glory Boost" class="rounded-lg mt-4" />
                                </div>
                                <div class="harga-item">
                                    <h3 class="text-xl font-bold">Mythic Immortal Boost 1 star</h3>
                                    <p class="mt-2">Rp 25.000</p>
                                    <img src="assets/IMMORTAL.png" alt="Illustration of Mythic IMO Boost" class="rounded-lg mt-4" />
                                </div>
                            </div>
                        </section>

                        <!-- Bagian Tutorial -->
                        <section id="tutorial" class="text-center tutorial-container">
                                <h2 class="text-3xl font-bold">Tutorial Pembelian</h2>
                                <div class="mt-4 flex flex-col space-y-4"> <!-- Mengubah layout ke vertikal -->
                                    <div class="tutorial-item">
                                        <h3 class="text-xl font-bold">Langkah 1</h3>
                                        <p class="mt-2">Pilih joki yang kamu inginkan.</p>
                                    </div>
                                    <div class="tutorial-item">
                                        <h3 class="text-xl font-bold">Langkah 2</h3>
                                        <p class="mt-2">Hubungi kami melalui kontak dibawah, untuk konfirmasi.</p>
                                    </div>
                                    <div class="tutorial-item">
                                        <h3 class="text-xl font-bold">Langkah 3</h3>
                                        <p class="mt-2">Kamu akan diberikan petunjuk untuk mengisi form.</p>
                                    </div>
                                    <div class="tutorial-item">
                                        <h3 class="text-xl font-bold">Langkah 4</h3>
                                        <p class="mt-2">Tunggu dan selesai.</p>
                                    </div>
                                </div>
                            </section>


                            <section class="flex flex-col md:flex-row items-start md:space-x-8 p-4">
                    <div class="md:w-1/2 p-4">
                        <h2 class="text-3xl font-bold">Apa itu BoostBlitz?</h2>
                        <p class="mt-2">BoostBlitz adalah layanan joki khusus game Mobile Legends yang dijalankan oleh tujuh orang pemuda dari Bandung, Jawa Barat. Mereka menemukan ide untuk membantu pemain yang kesulitan dalam menaikkan rank atau tier di game favorit mereka. Mengedepankan kecepatan, dan keamanan diharapkan BoostBlitz menjadi solusi bagi rata-rata pemain. BoostBlitz dibentuk pada bulan November 2024.</p>
                    </div>
                    <div id="contact" class="md:w-1/2 p-4 mt-8 md:mt-0">
                        <h2 class="text-3xl font-bold">Contact Person</h2>
                        <p class="mt-2">Hubungi kami melalui:</p>
                        <div class="mt-4 space-y-2">
                            <a href="https://forms.gle/uZDt7JgvFUcS5dot8" target="_blank" class="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                                <i class="fas fa-file-alt mr-2"></i> Google Form
                            </a>
                            <a href="http://wa.me/+6289519086370" target="_blank" class="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                                <i class="fab fa-whatsapp mr-2"></i> WhatsApp
                            </a>
                            <a href="https://www.instagram.com/boostblitz.id" target="_blank" class="flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                                <i class="fab fa-instagram mr-2"></i> Instagram
                            </a>
                        </div>
                    </div>
                </section>

                    `;
                } 
                else if (activeMenu === 'Promo') {
                    return `
                        <div class="mb-4 text-center">
                            <h2 class="text-3xl font-bold">Promo 10 Star</h2>
                            <p class="mt-2">Dapatkan promo spesial untuk kenaikan 10 bintang dengan harga yang lebih terjangkau!</p>
                            <img src="assets/BISNIS JOKI - POST 3.png" alt="Illustration of Promo 10 Star" class="w-full rounded-lg mt-4" /> <!-- Ganti dengan URL gambar promo 10 star -->
                        </div>
                    `;
                }
                
                return '';
            };

            const render = () => {
                root.innerHTML = `
                    <div class="p-4 pb-20">
                        <!-- Navbar -->
                        <div class="flex justify-between items-center mb-4 fixed top-0 left-0 right-0 bg-black p-4 z-50" id='nav'>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-search text-white cursor-pointer" onclick="handleSearchToggle()" id='nav'></i>
                                <div class="text-white text-xl font-bold" id='nav'>BoostBlitz</div>
                            </div>
                            <!-- Tampilkan elemen berikut jika bukan di menu Promo -->
                            ${activeMenu !== 'Promo' ? `
                            <div class="hidden md:flex items-center space-x-4">
                                <div class="cursor-pointer" onclick="scrollToSection('home')">Home</div>
                                <div class="cursor-pointer" onclick="scrollToSection('about')">About</div>
                                <div class="cursor-pointer" onclick="scrollToSection('harga')">Harga</div>
                                <div class="cursor-pointer" onclick="scrollToSection('tutorial')">Tutorial</div>
                                <div class="cursor-pointer" onclick="scrollToSection('contact')">Contact</div>
                            </div>
                            ` : ''}
                            
                            <!-- Tampilkan ikon burger jika bukan di menu Promo dan dalam mode mobile -->
                            <div class="flex md:hidden items-center space-x-4">
                                ${activeMenu !== 'Promo' ? `
                                    <div class="relative">
                                        <i class="fas fa-bars text-white cursor-pointer" onclick="handleMenuToggle()"></i>
                                        ${isMenuOpen ? `
                                            <div class="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
                                                <h2 class="text-xl font-bold text-center mb-2">Menu</h2>
                                                <ul>
                                                    <li class="cursor-pointer mb-2" onclick="scrollToSection('home')">Home</li>
                                                    <li class="cursor-pointer mb-2" onclick="scrollToSection('about')">About</li>
                                                    <li class="cursor-pointer mb-2" onclick="scrollToSection('harga')">Harga</li>
                                                    <li class="cursor-pointer mb-2" onclick="scrollToSection('tutorial')">Tutorial</li>
                                                    <li class="cursor-pointer mb-2" onclick="scrollToSection('contact')">Contact</li>
                                                </ul>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                        
                        <!-- Konten utama, menambahkan padding-top agar tidak tertutup navbar -->
                        <div class="main-content" style="padding-top: 40px;">
                            ${isSearchOpen ? `
                                <div class="mb-4 flex mt-4">
                                    <input 
                                        type="text" 
                                        class="w-full p-2 rounded-lg text-black" 
                                        placeholder="Search..." 
                                        value="${searchQuery}" 
                                        oninput="handleSearchChange(event)" 
                                    />
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2" onclick="handleSearchSubmit()">Search</button>
                                </div>
                            ` : ''}
                            ${renderMenuContent()}
                        </div>
            
                        <!-- Footer Menu -->
                        <div class="fixed bottom-0 left-0 right-0 bg-black p-4 flex justify-around items-center">
                            <div class="text-center" onclick="handleMenuClick('Home')">
                                <i class="fas fa-home ${activeMenu === 'Home' ? 'active-menu' : 'text-white'}"></i>
                                <p class="text-sm ${activeMenu === 'Home' ? 'active-menu' : 'text-white'}">Home</p>
                            </div>
                            <div class="text-center" onclick="handleMenuClick('Promo')">
                                <i class="fas fa-gift ${activeMenu === 'Promo' ? 'active-menu' : 'text-white'}"></i>
                                <p class="text-sm ${activeMenu === 'Promo' ? 'active-menu' : 'text-white'}">Promo</p>
                            </div>
                        </div>
                    </div>
                `;
            };
            
            
            

            window.handleTabClick = handleTabClick;
            window.handleMenuClick = handleMenuClick;
            window.handleIncrement = handleIncrement;
            window.handleDecrement = handleDecrement;
            window.handleSearchToggle = handleSearchToggle;
            window.handleSearchChange = handleSearchChange;
            window.handleMenuToggle = handleMenuToggle;
            window.scrollToSection = scrollToSection;
            window.handleSearchSubmit = handleSearchSubmit;

            render();
        });
    