export interface Hexagram {
  number: number;
  name: string;
  korean: string;
  interpretation: string;
  guidance: string;
}

export interface GeneratedResult {
  numbers: number[];
  hexagramNumber: number;
  hexagram: Hexagram;
}
