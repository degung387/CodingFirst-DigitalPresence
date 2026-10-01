import { CONTACT_CONFIG } from '../config/contact';

/**
 * Membuat link WhatsApp Click-to-Chat yang valid dan URL-encoded
 */
export function createWhatsAppLink(message: string, customNumber?: string): string {
  const number = (customNumber || CONTACT_CONFIG.whatsappNumber).replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export interface FreeTrialFormData {
  parentName: string;
  studentName: string;
  whatsapp: string;
  studentAge: string;
  program: string;
  schedule: string;
  notes?: string;
}

/**
 * Format pesan pendaftaran Free Trial sesuai template PRD
 */
export function buildFreeTrialMessage(data: FreeTrialFormData): string {
  return [
    'Halo Coding First, saya ingin mendaftar Free Trial.',
    '',
    `Nama Orang Tua: ${data.parentName || '-'}`,
    `Nama Siswa: ${data.studentName || '-'}`,
    `Nomor WhatsApp: ${data.whatsapp || '-'}`,
    `Usia Siswa: ${data.studentAge ? `${data.studentAge} tahun` : '-'}`,
    `Program: ${data.program || '-'}`,
    `Jadwal: ${data.schedule || 'Fleksibel'}`,
    `Catatan: ${data.notes && data.notes.trim() ? data.notes.trim() : '-'}`,
  ].join('\n');
}

/**
 * Format pesan tanya harga paket
 */
export function buildPricingInquiryMessage(planName: string): string {
  return `Halo Coding First, saya tertarik untuk mengetahui detail dan promo untuk Paket ${planName}. Bisakah dibantu informasi jadwal dan pendaftarannya?`;
}

/**
 * Format pesan konsultasi program
 */
export function buildProgramInquiryMessage(programName: string): string {
  return `Halo Coding First, saya ingin berkonsultasi mengenai program ${programName} untuk anak saya. Bagaimana materi dan jadwal terdekatnya?`;
}

/**
 * Format pesan umum admin
 */
export function buildGeneralInquiryMessage(): string {
  return `Halo Coding First, saya ingin menanyakan informasi seputar kelas dan program belajar coding.`;
}
