// ===== MENU HAMBURGER (MOBILE) =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Tutup menu otomatis saat link diklik (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ===== GALERI DENGAN PAGINASI =====
// Ganti/tambah nama file di array ini sesuai jumlah foto kegiatan kamu.
// Setiap 4 foto otomatis jadi 1 halaman.
const galeriFotos = [
  's2.jpeg', 's2.jpeg', 's2.jpeg', 's2.jpeg',
  's2.jpeg', 's2.jpeg', 's2.jpeg', 's2.jpeg',
  's2.jpeg', 's2.jpeg', 's12.jpeg', 's13.jpeg',
  's14.jpeg', 's15.jpeg', 's16.jpeg', 's17.jpeg',
  's18.jpeg', 's19.jpeg', 's20.jpeg', 's21.jpeg'
];

const FOTO_PER_HALAMAN = 4;
let halamanAktif = 1;

function renderGaleri() {
  const grid = document.getElementById('galeriGrid');
  const pagination = document.getElementById('galeriPagination');
  const totalHalaman = Math.ceil(galeriFotos.length / FOTO_PER_HALAMAN);

  // Render foto untuk halaman aktif
  const start = (halamanAktif - 1) * FOTO_PER_HALAMAN;
  const fotoHalamanIni = galeriFotos.slice(start, start + FOTO_PER_HALAMAN);

  grid.innerHTML = fotoHalamanIni.map((foto, i) => `
    <img src="images/galeri/${foto}" alt="Kegiatan ${start + i + 1}" onclick="openModal(this.src)">
  `).join('');

  // Render tombol nomor halaman
  let tombolHtml = '';
  for (let i = 1; i <= totalHalaman; i++) {
    tombolHtml += `<button class="${i === halamanAktif ? 'active' : ''}" onclick="gantiHalamanGaleri(${i})">${i}</button>`;
  }
  pagination.innerHTML = tombolHtml;
}

function gantiHalamanGaleri(nomor) {
  halamanAktif = nomor;
  renderGaleri();
  document.getElementById('galeri').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

renderGaleri();

// ===== MODAL GALERI =====
function openModal(src) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'flex';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

// Tutup modal kalau klik di luar gambar
document.getElementById('imgModal').addEventListener('click', (e) => {
  if (e.target.id === 'imgModal') {
    closeModal();
  }
});

// ===== SEARCH ANGGOTA =====
const searchInput = document.getElementById('searchAnggota');
const anggotaGrid = document.getElementById('anggotaGrid');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const cards = anggotaGrid.querySelectorAll('.anggota-card');

  cards.forEach(card => {
    const nama = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = nama.includes(keyword) ? 'block' : 'none';
  });
});

// ===== FORM KONTAK (SEMENTARA, BELUM TERSAMBUNG KE BACKEND) =====
const kontakForm = document.getElementById('kontakForm');

kontakForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan kamu sudah terkirim (form ini masih contoh, belum tersambung ke server).');
  kontakForm.reset();
});

// ===== NAVBAR SHADOW SAAT SCROLL (opsional efek) =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }
});