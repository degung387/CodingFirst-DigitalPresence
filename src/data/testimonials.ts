export interface Testimonial {
  id: number;
  name: string;
  role: string;
  category: "Orang Tua" | "Siswa";
  avatarInitials: string;
  content: string;
  program: string;
  rating: number;
  isPlaceholderNote?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Rina W.",
    role: "Orang Tua Siswa (Kelas 5 SD)",
    category: "Orang Tua",
    avatarInitials: "RW",
    content: "Awalnya anak saya cuma suka main game di tablet, tapi setelah ikut Free Trial di Coding First jadi penasaran cara bikin game sendiri. Sekarang dia bangga tiap kali selesai bikin level game baru!",
    program: "Game Development",
    rating: 5
  },
  {
    id: 2,
    name: "Arya P.",
    role: "Siswa SMP (14 Tahun)",
    category: "Siswa",
    avatarInitials: "AP",
    content: "Materi coding-nya dijelasin runtut banget dan mentornya asyik diajak diskusi pas nemu error. Dalam 2 bulan saya sudah berhasil bikin website portofolio sendiri yang bisa dibuka di HP teman-teman.",
    program: "Web Development",
    rating: 5
  },
  {
    id: 3,
    name: "Bapak Hendra S.",
    role: "Orang Tua Siswa (Kelas 3 SD)",
    category: "Orang Tua",
    avatarInitials: "HS",
    content: "Metode visual programming sangat cocok untuk anak seusia SD. Tidak bikin pusing, melatih logika berpikir sistematis, dan laporan progres dari mentornya sangat detail setiap bulan.",
    program: "Coding Fundamental",
    rating: 5
  },
  {
    id: 4,
    name: "Fadhil M.",
    role: "Pelajar SMA (16 Tahun)",
    category: "Siswa",
    avatarInitials: "FM",
    content: "Kelas Advanced Coding ngebantu banget memahami logika Python dan algoritma dasar. Sangat berguna buat persiapan masuk jurusan Teknik Informatika nanti.",
    program: "Advanced Coding",
    rating: 5
  },
  {
    id: 5,
    name: "Ibu Diana K.",
    role: "Orang Tua Siswa (Online Class - Luar Kota)",
    category: "Orang Tua",
    avatarInitials: "DK",
    content: "Walaupun kami domisili di luar Purwokerto dan ikut kelas online, interaksi mentor tetap sangat intensif dan sabar memandu anak langkah demi langkah.",
    program: "Coding Fundamental",
    rating: 5
  }
];
