import { ESocialMedia } from '@interfaces/ESocialMedia';

export const shareSocialMedia = (
  socialMedia: ESocialMedia,
  shortenUrl: string,
  description: string,
): string => {
  const caption = `${description}. Yuk lihat selengkapnya di link berikut!`;
  let link = `https://api.whatsapp.com/send?text=${caption} ${shortenUrl}`;
  switch (socialMedia) {
    case ESocialMedia.facebook:
      link = `https://www.facebook.com/sharer/sharer.php?u=${shortenUrl}&quote=${caption}`;
      break;
    case ESocialMedia.telegram:
      link = `https://t.me/share/url?url=${shortenUrl}&text=${caption}`;
      break;
    case ESocialMedia.twitter:
      link = `https://twitter.com/intent/tweet?text=${caption} ${shortenUrl}`;
      break;
    case ESocialMedia.instagram:
      link = '#';
      break;
    case ESocialMedia.tiktok:
      link = '#';
      break;
    case ESocialMedia.whatsapp:
    default:
      link = `https://api.whatsapp.com/send?text=${caption} ${shortenUrl}`;
      break;
  }
  return link;
};
