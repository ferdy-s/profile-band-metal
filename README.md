# False Preacher | Official Band Website

<img width="2879" height="1799" alt="image" src="https://github.com/user-attachments/assets/a6ea6627-e771-4003-9a86-93529f1c2946" />
<img width="692" height="1483" alt="image" src="https://github.com/user-attachments/assets/2e552ce3-4ae3-49f6-93c6-a9cd0c2bd16e" />

Sebuah website modern dengan pendekatan sinematik dan agresif yang dirancang untuk merepresentasikan identitas band deathcore secara digital.  
Proyek ini menampilkan perpaduan antara visual yang kuat, narasi, dan pengalaman pengguna yang imersif.

---

## Gambaran Umum

Website ini dirancang sebagai representasi digital band yang profesional, bukan sekadar portofolio biasa.

Fokus utama:
- Identitas visual yang kuat
- Penyajian rilisan berbasis narasi
- Pengalaman pengguna yang imersif
- Interaksi modern dan responsif

---

## Konsep

"False Preacher" mengangkat tema:
- Otoritas yang korup
- Manipulasi sistem kepercayaan
- Keruntuhan psikologis dan sosial

Konsep ini diterjemahkan ke dalam:
- Antarmuka gelap (dark UI)
- Tipografi agresif
- Tata letak sinematik
- Struktur minimalis namun kuat

---

## Fitur

### Sistem Rilisan
- Fokus pada satu rilisan utama
- Integrasi audio player
- Informasi metadata lengkap (label, lisensi, durasi, dll)
- Narasi konsep karya

### Bagian Anggota (Members)
- Interaksi hover dinamis
- Animasi menggunakan Framer Motion
- Layout responsif dan bersih

### Sistem Tur
- Tampilan seperti feed Instagram (rasio 4:5)
- Slider halus untuk desktop dan mobile
- Galeri multi-gambar

### Sistem Terjemahan (Berbasis API)
- Terjemahan otomatis menggunakan API
- Tidak memerlukan kamus manual
- Pergantian bahasa secara real-time

### Antarmuka dan Pengalaman Pengguna
- Estetika deathcore
- Efek visual seperti noise dan scanline
- Desain minimalis dengan karakter kuat
- Sepenuhnya responsif

---

## Teknologi yang Digunakan

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animasi: Framer Motion
- Ikon: React Icons
- API Terjemahan: LibreTranslate
- Deployment: Vercel dan GitHub

---

## Struktur Proyek

app/ -> Routing dan halaman utama
components/ -> Komponen UI
context/ -> State global (terjemahan)
hooks/ -> Custom hooks
lib/ -> Utility dan konfigurasi
public/ -> Asset statis (gambar, audio)
isi_data/ -> Data statis band


---

## Instalasi

```bash
git clone https://github.com/ferdy-s/profile-band-metal.git
cd profile-band-metal
npm install
npm run dev
