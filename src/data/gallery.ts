export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: "Kelas" | "Project" | "Event" | "Student Activity";
  description: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    title: "Suasana Kelas Coding Interaktif",
    category: "Kelas",
    description: "Pendampingan mentor intensif dalam memahami logika percabangan dan perulangan kode.",
    alt: "Anak-anak belajar coding di depan laptop bersama bimbingan mentor"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    title: "Eksplorasi Game Labirin Mandiri",
    category: "Student Activity",
    description: "Siswa berdiskusi memecahkan bug pada algoritma pergerakan karakter game buatan sendiri.",
    alt: "Siswa aktif mempraktikkan kode di layar komputer"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    title: "Presentasi Karya Akhir Modul",
    category: "Project",
    description: "Momen membanggakan ketika siswa mempresentasikan website karya pertamanya.",
    alt: "Presentasi proyek coding siswa di hadapan teman dan mentor"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "Kolaborasi Tim Mini-Hackathon",
    category: "Event",
    description: "Sesi tantangan coding seru untuk melatih kerjasama tim dan problem solving cepat.",
    alt: "Kelompok siswa berdiskusi antusias mengerjakan tantangan coding"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    title: "Uji Coba Coding Sensor & Robotik",
    category: "Student Activity",
    description: "Menerapkan instruksi kode untuk mengontrol pergerakan simulasi hardware cerdas.",
    alt: "Siswa bereksperimen dengan perangkat elektronik dan instruksi program"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    title: "Workshop Digital Kreatif Akhir Pekan",
    category: "Event",
    description: "Kegiatan pengenalan dunia teknologi dan coding untuk pelajar sekolah di Purwokerto.",
    alt: "Kegiatan workshop coding yang dihadiri pelajar dan orang tua"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
    title: "Review Proyek Website Responsif",
    category: "Project",
    description: "Pemeriksaan baris kode CSS dan JavaScript bersama mentor untuk optimasi tampilan mobile.",
    alt: "Tampilan source code website dan hasil render di layar"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    title: "Pendampingan Private 1-on-1",
    category: "Kelas",
    description: "Fokus belajar personal sesuai ritme dan minat spesifik siswa dalam pembuatan game.",
    alt: "Mentor mendampingi siswa secara privat di ruang belajar"
  }
];

export const galleryCategories = ["Semua", "Kelas", "Project", "Event", "Student Activity"] as const;
