export const generateWaLink = (phoneNumber: string, originalText?: string) => {
  const encodedText = encodeURIComponent(originalText);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
};
