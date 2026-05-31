// Variabel global untuk menyimpan jumlah barangan di dalam troli
let cartCount = 0;

/**
 * Fungsi untuk menambahkan item ke keranjang belanja (simulasi)
 */
function addToCart() {
    cartCount++;
    const badge = document.getElementById('cart-count');
    
    if (badge) {
        badge.innerText = cartCount;
        
        // Memberi kesan visual maklum balas apabila item ditambah
        badge.classList.add('scale-125', 'bg-green-600');
        
        // Mengembalikan saiz asal lencana kaunter selepas 300ms
        setTimeout(() => {
            badge.classList.remove('scale-125', 'bg-green-600');
        }, 300);
    }
}

/**
 * Fungsi untuk menutup dan membuang komponen baner kuki dari paparan
 */
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

/**
 * Inisialisasi interaksi gambar produk di luar dismissCookie
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card img[data-alt-src]').forEach((img) => {
        img.style.cursor = 'pointer';

        // Helper untuk menukar src <-> data-alt-src
        const swap = () => {
            const alt = img.dataset.altSrc;
            if (!alt) return;
            const curr = img.getAttribute('src');
            img.setAttribute('src', alt);
            img.dataset.altSrc = curr;
        };

        // Mouse (hover) -- hanya jika bukan bagian dari interaksi sentuh
        img.addEventListener('mouseenter', () => {
            if (img.dataset._touchActive) return;
            swap();
        });
        img.addEventListener('mouseleave', () => {
            if (img.dataset._touchActive) return;
            swap();
        });

        // Touch (mobile): show while touching
        img.addEventListener('touchstart', (e) => {
            img.dataset._touchActive = '1';
            swap();
        }, {passive: true});

        img.addEventListener('touchend', (e) => {
            if (img.dataset._touchActive) {
                swap();
                delete img.dataset._touchActive;
            }
        }, {passive: true});

        img.addEventListener('touchcancel', (e) => {
            if (img.dataset._touchActive) {
                swap();
                delete img.dataset._touchActive;
            }
        }, {passive: true});

        // Click fallback (desktop and keyboard) — abaikan jika sentuhan aktif
        img.addEventListener('click', (e) => {
            if (img.dataset._touchActive) return;
            e.stopPropagation();
            swap();
        });
    });
});

// Tetap ekspor fungsi toggle jika ada kode lain yang memanggilnya
function toggleProductImage(img) {
    const alt = img.dataset.altSrc;
    if (!alt) return;
    const curr = img.getAttribute('src');
    img.setAttribute('src', alt);
    img.dataset.altSrc = curr;
}
