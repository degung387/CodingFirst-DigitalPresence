export interface CurriculumStep {
  level: string;
  stepNumber: string;
  title: string;
  focus: string;
  description: string;
  skills: string[];
  output: string;
}

export const curriculumSteps: CurriculumStep[] = [
  {
    stepNumber: "01",
    level: "Level 1",
    title: "Logic & Computational Thinking",
    focus: "Fondasi Berpikir Kritis & Logika",
    description: "Siswa belajar memecah masalah besar menjadi bagian-bagian teratur (dekomposisi), memahami urutan instruksi, dan mengenali pola.",
    skills: ["Pola Pikir Algoritmik", "Dekomposisi Masalah", "Perulangan & Percabangan", "Debug Masalah Sederhana"],
    output: "Peta Logika & Skenario Problem Solving"
  },
  {
    stepNumber: "02",
    level: "Level 2",
    title: "Programming Fundamentals",
    focus: "Mengenal Kode & Sintaksis",
    description: "Transisi menuju bahasa pemrograman nyata. Siswa memahami variabel, tipe data, fungsi logika, dan aturan penulisan kode bersih.",
    skills: ["Variabel & Tipe Data", "Fungsi & Modularitas", "Operasi Aritmatika & Logika", "Input & Output Pengguna"],
    output: "Program Konsol & Kalkulator Interaktif"
  },
  {
    stepNumber: "03",
    level: "Level 3",
    title: "Web / Game Development",
    focus: "Implementasi Visual & Interaktivitas",
    description: "Mewujudkan ide ke dalam media interaktif. Siswa memilih spesialisasi perancangan website responsif atau logika game interaktif.",
    skills: ["UI/UX Layout Dasar", "Event Listener & Handler", "Manipulasi DOM / Game Canvas", "Animasi & Efek Visual"],
    output: "Halaman Web Responsif / Game 2D Berfungsi Penuh"
  },
  {
    stepNumber: "04",
    level: "Level 4",
    title: "Project Development",
    focus: "Penyusunan Proyek Mandiri",
    description: "Siswa merancang proyek aplikasi atau game original secara mandiri dengan bimbingan mentor untuk menyelesaikan tantangan dunia nyata.",
    skills: ["Perencanaan Fitur Proyek", "Troubleshooting & Debugging", "Penyempurnaan Antarmuka", "Manajemen File & Aset"],
    output: "Proyek Utuh Siap Pakai & Diuji"
  },
  {
    stepNumber: "05",
    level: "Level 5",
    title: "Portfolio & Presentation",
    focus: "Presentasi Karya & Kesiapan Publik",
    description: "Mengembangkan rasa percaya diri. Siswa mendokumentasikan kode, mempublikasikan hasil karya, dan mempresentasikannya di depan mentor serta orang tua.",
    skills: ["Public Speaking & Demo", "Dokumentasi & Readme", "Hosting / Deployment Dasar", "Refleksi Pembelajaran"],
    output: "Portofolio Online & Sertifikat Kelulusan"
  }
];
