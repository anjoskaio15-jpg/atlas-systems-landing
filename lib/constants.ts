const WHATSAPP_NUMBER = "5584996212632";
const WHATSAPP_MESSAGE = "Olá, gostaria de solicitar uma análise gratuita para meu negócio!";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
