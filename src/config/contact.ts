export interface ContactConfig {
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  instagram: string;
  instagramUrl: string;
  operatingHours: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  // Nomor WhatsApp admin resmi (placeholder dapat diganti via .env atau config)
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string) || "6285123456789",
  whatsappDisplay: "+62 851-2345-6789",
  email: (import.meta.env.VITE_ADMIN_EMAIL as string) || "halo@codingfirst.id",
  address: "Jl. HR. Boenyamin No. 88, Purwokerto Utara, Kab. Banyumas",
  city: "Purwokerto, Jawa Tengah & Online Seluruh Indonesia",
  instagram: "@codingfirst.id",
  instagramUrl: "https://instagram.com/codingfirst.id",
  operatingHours: "Senin – Sabtu, 08:30 – 17:30 WIB",
};
