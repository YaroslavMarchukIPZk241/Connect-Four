export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export const defaultSettings = {
  rows: 6,
  columns: 7,
  perMoveSeconds: 10, 
  difficulty: 'normal' 
};
