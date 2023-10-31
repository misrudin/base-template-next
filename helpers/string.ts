export const filterString = (originalString: string): string => {
  let modifiedString =
    originalString.slice(0, 4) +
    '*'.repeat(8 - 4 + 1) +
    originalString.slice(8 + 1);
  return modifiedString;
};

export const titelize = (val: string): string => {
  return val?.split('_')?.join(' ');
};

export const slugify = (text?: string): string | null => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};
