export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  detail: string;
}

export const learningProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Assessment & Trial",
    shortDesc: "Mengetahui kemampuan dan minat awal siswa",
    detail: "Melalui sesi uji coba gratis (Free Trial), mentor mengidentifikasi cara belajar, ketertarikan (game/web/animasi), dan menentukan level awal yang paling pas untuk anak."
  },
  {
    step: "02",
    title: "Guided Learning",
    shortDesc: "Siswa belajar terstruktur sesuai tingkatan",
    detail: "Mentor mendampingi pemahaman konsep secara runut, bertahap, dan santai. Siswa diajak berpikir eksploratif tanpa takut melakukan kesalahan (trial & error)."
  },
  {
    step: "03",
    title: "Hands-on Practice",
    shortDesc: "Siswa mengerjakan latihan dan mini project",
    detail: "Bukan sekadar mendengarkan teori, 70% waktu digunakan untuk coding langsung membuat proyek interaktif sehingga logika tertanam secara alami."
  },
  {
    step: "04",
    title: "Showcase & Portfolio",
    shortDesc: "Siswa mempresentasikan hasil karyanya",
    detail: "Di akhir modul, siswa mendemonstrasikan karyanya di depan mentor dan orang tua, melatih kepercayaan diri, komunikasi, dan memiliki bukti portofolio digital."
  }
];
