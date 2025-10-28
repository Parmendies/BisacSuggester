interface Input {
  title: string;
  context: string;
  cart: string[];
  curta: string;
}

export const suggestBisac = (input: Input) => {
  // Basit örnek: rastgele bir BISAC kodu
  return {
    bisac_code: 'FIC000000',
    confidence: Math.random().toFixed(2),
  };
};
