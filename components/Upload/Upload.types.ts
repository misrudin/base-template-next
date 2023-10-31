import { UploadProps } from 'rc-upload';

export interface IUpload extends UploadProps {
  readonly title?: string;
  readonly description?: string;
  readonly icon?: string;
  readonly isLoading?: boolean;
  readonly imageUrl?: string;
  readonly heightWrapper?: string;
}
