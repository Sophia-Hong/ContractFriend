declare module 'react-dropzone' {
  import { DropzoneOptions } from 'react-dropzone';
  
  export interface DropzoneProps extends Omit<DropzoneOptions, 'accept'> {
    accept?: Record<string, string[]>;
  }
}
