/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    screens: {
      lg: {
        raw: "screen and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


function dismissCookie() {
    const banner = document.getElementById('cookie-banner');
    
    if (banner) {
        // Menggunakan animasi transisi pudar dan turun ke bawah sebelum dibuang
        banner.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
        
        // Membuang elemen secara kekal daripada DOM selepas animasi tamat
        setTimeout(() => {
            banner.remove();
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function(){ feather.replace(); });

document.addEventListener('DOMContentLoaded', function () {
      var menuButton = document.getElementById('mobile-menu-button');
      var mobileMenu = document.getElementById('mobile-menu');
      var mobileMenuClose = document.getElementById('mobile-menu-close');

      if (!menuButton || !mobileMenu) return;

      var toggleMenu = function () {
        var isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        menuButton.setAttribute('aria-expanded', String(isHidden));
      };

      menuButton.addEventListener('click', toggleMenu);
      mobileMenuClose && mobileMenuClose.addEventListener('click', toggleMenu);
    });