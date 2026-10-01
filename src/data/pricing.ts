export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  popular?: boolean;
  sessions: string;
  durationPerSession: string;
  classSize: string;
  features: string[];
  ctaLabel: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Paket Basic",
    price: "Rp XXX.XXX",
    period: "/ bulan",
    subtitle: "Pilihan tepat untuk anak yang baru pertama kali mengenal logika komputer.",
    popular: false,
    sessions: "4 Pertemuan / Bulan",
    durationPerSession: "90 Menit / Sesi",
    classSize: "Kelas Kecil (3 - 5 Siswa)",
    features: [
      "Kurikulum pengenalan fondasi logika",
      "Mentoring interaktif & ramah anak",
      "Akses modul belajar digital",
      "Laporan perkembangan belajar bulanan",
      "Sertifikat penyelesaian modul"
    ],
    ctaLabel: "Tanya via WhatsApp"
  },
  {
    id: "standard",
    name: "Paket Standard",
    price: "Rp XXX.XXX",
    period: "/ bulan",
    subtitle: "Program paling disukai orang tua untuk progres belajar yang cepat dan terarah.",
    popular: true,
    sessions: "8 Pertemuan / Bulan",
    durationPerSession: "90 Menit / Sesi",
    classSize: "Kelas Semi-Private (2 - 4 Siswa)",
    features: [
      "Semua fasilitas di Paket Basic",
      "Kurikulum intensif Web / Game Dev",
      "Praktik pembuatan project nyata setiap pekan",
      "Konsultasi tugas & PR bersama mentor",
      "Sesi showcase karya di akhir periode",
      "Sertifikat kelulusan resmi Coding First"
    ],
    ctaLabel: "Tanya via WhatsApp"
  },
  {
    id: "premium",
    name: "Paket Private",
    price: "Rp XXX.XXX",
    period: "/ bulan",
    subtitle: "Pendampingan 1-on-1 eksklusif dengan kurikulum fleksibel disesuaikan minat siswa.",
    popular: false,
    sessions: "8 - 12 Pertemuan (Fleksibel)",
    durationPerSession: "90 Menit / Sesi",
    classSize: "Private 1-on-1 Eksklusif",
    features: [
      "Bimbingan 1-on-1 mentor berdedikasi",
      "Jadwal fleksibel dapat disesuaikan",
      "Kurikulum custom sesuai minat anak (Game/Web/Python)",
      "Bimbingan pembuatan portofolio publik",
      "Persiapan lomba coding / olimpiade",
      "Akses materi dan rekaman pembelajaran selamanya"
    ],
    ctaLabel: "Tanya via WhatsApp"
  }
];
