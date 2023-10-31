import Resizer from 'react-image-file-resizer';

export const resizeFile = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      800,
      800,
      'PNG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64',
    );
  });
