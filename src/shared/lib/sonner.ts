import { toast } from 'vue-sonner';

export const errorToast = (message: string) =>
  toast.error(message, {
    position: 'bottom-right',
    style: {
      background: '#fda4af',
      border: '#fda4af',
      color: '#e60000',
    },
  });
