export interface Program {
  id: string;
  title: string;
  level: string;
  targetAge: string;
  description: string;
  duration: string;
  sessions: string;
  mainTopics: string[];
  sampleProject: string;
  badge?: string;
}

export const programs: Program[] = [
  {
    id: "coding-fundamental",
    title: "Coding Fundamental",
    level: "Beginner",
    targetAge: "7 – 12 Tahun",
    description: "Program awal yang mengenalkan logika komputasi melalui visual blocks, animasi interaktif, dan pemecahan masalah yang menyenangkan.",
    duration: "2 – 3 Bulan",
    sessions: "8 – 12 Pertemuan",
    mainTopics: [
      "Algoritma & Sequential Logic",
      "Kondisi (If-Else) & Perulangan (Loops)",
      "Karakter, Suara & Animasi Visual",
      "Interactive Storytelling & Mini Games"
    ],
    sampleProject: "Animasi Interaktif & Game Labirin",
    badge: "Ramah Pemula"
  },
  {
    id: "web-development",
    title: "Web Development",
    level: "Intermediate",
    targetAge: "12 – 18 Tahun",
    description: "Mempelajari pondasi website modern dengan HTML5, CSS3, dan JavaScript interaktif hingga mampu merilis website pertama secara online.",
    duration: "3 – 4 Bulan",
    sessions: "12 – 16 Pertemuan",
    mainTopics: [
      "Struktur HTML5 & Semantik Web",
      "Styling CSS3 Modern & Flexbox/Grid",
      "Dasar Interaktivitas JavaScript (DOM)",
      "Responsive Layout Mobile-Friendly"
    ],
    sampleProject: "Website Portofolio Pribadi & Kalkulator Interaktif",
    badge: "Paling Diminati"
  },
  {
    id: "game-development",
    title: "Game Development",
    level: "Semua Level",
    targetAge: "8 – 15 Tahun",
    description: "Mengenalkan logika pemrograman melalui perancangan mekanisme game 2D, desain karakter, sistem skor, dan fisika permainan.",
    duration: "3 Bulan",
    sessions: "12 Pertemuan",
    mainTopics: [
      "Logika Mekanika Game & Kontrol Pemain",
      "Collision Detection & Fisika Sederhana",
      "Sistem Skor, Level & Sound Effect",
      "Debugging & Playtesting Game"
    ],
    sampleProject: "Game Platformer 2D & Space Shooter",
    badge: "Kreatif & Fun"
  },
  {
    id: "advanced-coding",
    title: "Advanced Coding",
    level: "Advanced",
    targetAge: "14+ Tahun & Mahasiswa",
    description: "Program lanjutan untuk siswa yang ingin mendalami bahasa pemrograman teks seperti Python, struktur data, dan pengenalan API.",
    duration: "4 Bulan",
    sessions: "16 Pertemuan",
    mainTopics: [
      "Python Syntax, List, Dictionary & Functions",
      "Logika Struktur Data & Algoritma",
      "Pengenalan API & Pengolahan Data",
      "Version Control Dasar dengan Git"
    ],
    sampleProject: "Aplikasi Otomasi Data & Bot Interaktif",
    badge: "Persiapan Karir & Lomba"
  }
];
