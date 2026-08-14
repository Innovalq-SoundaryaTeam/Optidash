/**
 * OptiDash Global JavaScript
 * Ultra-Luxury Setup: Light Default, Icon Swapping, RTL, Routing, & Mobile Menu
 */

const initOptiDash = () => {
    const htmlElement = document.documentElement;
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    // --- 1. Light Mode Default ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // --- 2. Update Theme Icons (Sun/Moon) ---
    const updateThemeIcon = () => {
        const isDark = htmlElement.classList.contains('dark');
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                if (isDark) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun', 'text-amber-400');
                } else {
                    icon.classList.remove('fa-sun', 'text-amber-400');
                    icon.classList.add('fa-moon');
                }
            }
        });
    };

    updateThemeIcon();

    // Toggle Theme Click Event
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon();
        });
    });

    // --- 3. RTL / LTR Management ---
    const savedDirection = localStorage.getItem('direction') || 'ltr';
    htmlElement.setAttribute('dir', savedDirection);

    rtlToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('direction', newDir);
        });
    });

    // --- 4. Mobile Menu Toggle ---
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            }
        });
    }

    // --- 5. Dynamic Active Link Highlight ---
    const currentPath = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isHomeMenu = link.getAttribute('data-target') === 'home' && (currentPath === 'home.html' || currentPath === 'home-2.html');

        if (href === currentPath || isHomeMenu) {
            link.classList.remove('text-gray-500', 'dark:text-gray-400', 'text-gray-600');
            link.classList.add('text-primary', 'font-bold');
        } else {
            link.classList.remove('text-primary', 'font-bold');
        }
    });

    // --- 6. Coming Soon Interceptor ---
    const placeholderLinks = document.querySelectorAll('a[href="#"]');
    placeholderLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'coming-soon.html';
        });
    });

    // --- 7. Ultra-Luxury Grain Texture Overlay ---
    if (!document.querySelector('.grain-overlay')) {
        const grain = document.createElement('div');
        grain.className = 'grain-overlay';
        document.body.appendChild(grain);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOptiDash);
} else {
    initOptiDash();
}