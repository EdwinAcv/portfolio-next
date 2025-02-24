import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limita cada IP a 100 solicitudes por ventana de 15 minutos
  message: 'Too many requests from this IP, please try again after 15 minutes',
});