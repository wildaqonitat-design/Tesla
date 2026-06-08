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