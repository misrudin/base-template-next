export const IMAGE_LAZY =
  'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=';

import { UseToastOptions } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { IOption } from '@interfaces/IOption';

export const dynamicOptions: { ssr: boolean } = { ssr: false };
export const dynamicOptionsSsr: { ssr: boolean } = { ssr: false };

export const keyName = process.env.NEXT_PUBLIC_SECRET_KEY ?? 'auth-key-brand';
export const brandKey = 'brand';
export const employeeKey = 'employee';
export const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY ?? 'root';

export const SocialMediaEmbed = styled.iframe`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
`;

export const tabStyle = {
  border: '1px solid',
  borderColor: 'border',
  py: '1',
  color: 'font.pencil',
  fontWeight: 'bold',
  fontSize: 'sm',
  _selected: {
    borderColor: 'font.primary',
    color: 'font.primary',
  },
  _hover: {
    borderColor: 'font.primary',
    color: 'font.primary',
  },
};

export const toastOptions: UseToastOptions = {
  isClosable: true,
  position: 'bottom',
  duration: 3000,
  variant: 'solid',
};

export const showToast = (
  toast,
  message: string,
  status: string,
  title: string = '',
) =>
  toast({
    description: message || 'Failed',
    status,
    ...(title ? { title } : {}),
    ...toastOptions,
  });

export const pageTitle = [
  {
    screen: 'settings',
    title: 'Settings',
  },
  {
    screen: 'my-voucher',
    title: 'My Voucher',
  },
  {
    screen: 'transaction',
    title: 'Daftar Transaksi',
  },
  {
    screen: 'invoice',
    title: 'Menunggu Pembayaran',
  },
  {
    screen: 'notification',
    title: 'Notification',
  },
  {
    screen: 'notification',
    title: 'Notification',
  },
  {
    screen: 'point',
    title: 'Point',
  },
];

export const sortingOptions = [
  { label: 'Paling Relevan', value: 'relevance' },
  { label: 'Produk Termurah', value: 'lowest' },
  { label: 'Produk Termahal', value: 'highest' },
];

export const statusOrder: IOption[] = [
  {
    label: 'Semua Status',
    value: 'paid,process,packing,sent,arrived,expired,cancled',
  },
  {
    label: 'Lunas',
    value: 'paid',
  },
  {
    label: 'Diproses',
    value: 'process',
  },
  {
    label: 'Packing',
    value: 'packing',
  },
  {
    label: 'Dikirim',
    value: 'sent',
  },
  {
    label: 'Diterima',
    value: 'arrived',
  },
  {
    label: 'Kadaluarsa',
    value: 'expired',
  },
  {
    label: 'Dibatalkan',
    value: 'cancled',
  },
];

export const statusInvoice: IOption[] = [
  { label: 'Semua Status', value: '' },
  { label: 'Menunggu Pembayaran', value: 'unpaid' },
  { label: 'Lunas', value: 'paid' },
  { label: 'Dibatalkan', value: 'canceled' },
];

export const metodeInvoice: IOption[] = [
  { label: 'Semua Metode Pembayaran', value: '' },
  { label: 'Transfer Manual', value: 'true' },
  { label: 'Pembayaran Otomatis', value: 'false' },
];

export const filterDateOption: IOption[] = [
  { label: 'Semua Tanggal', value: 'all' },
  { label: '30 Hari Terahir', value: 'month' },
  { label: '90 Hari Terahir', value: '3month' },
  { label: 'Pilih Tanggal Sendiri', value: 'custom' },
];

export const valueByRating = (rate: number) => {
  switch (rate) {
    case 1:
      return 'Sangat Buruk';
    case 2:
      return 'Buruk';
    case 3:
      return 'Cukup';
    case 4:
      return 'Baik';
    case 5:
      return 'Sangat Baik';
    default:
      return '';
  }
};

export const optionsBrand: IOption[] = [
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'unpublished',
    label: 'Unpublished',
  },
];

export const optionsTemplate: IOption[] = [
  {
    value: 'active',
    label: 'Aktif',
  },
  {
    value: 'inactive',
    label: 'Nonaktif',
  },
];

export const filterSync: IOption[] = [
  { label: 'Semua', value: '' },
  { label: 'Sinkron Shopee', value: 'true' },
  { label: 'Belum Sinkron Shopee', value: 'false' },
];

export const optionsStatusGeneral: IOption[] = [
  {
    value: '',
    label: 'Semua Status',
  },
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'unpublished',
    label: 'Unpublished',
  },
];
