export const regex = {
  letters: /[a-zA-Z]/,
  digits: /[0-9]/,
  symbols: /[^a-zA-Z0-9]/,
};

export type StrengthType = 'default' | 'short' | 'easy' | 'medium' | 'strong';

export const styles = {
  first: {
    short: { 'background-color': 'red' },
    easy: { 'background-color': 'red' },
    medium: { 'background-color': 'yellow' },
    strong: { 'background-color': 'green' },
    default: { 'background-color': 'grey' },
  },
  second: {
    short: { 'background-color': 'red' },
    easy: { 'background-color': 'grey' },
    medium: { 'background-color': 'yellow' },
    strong: { 'background-color': 'green' },
    default: { 'background-color': 'grey' },
  },
  third: {
    short: { 'background-color': 'red' },
    easy: { 'background-color': 'grey' },
    medium: { 'background-color': 'grey' },
    strong: { 'background-color': 'green' },
    default: { 'background-color': 'grey' },
  },
};
