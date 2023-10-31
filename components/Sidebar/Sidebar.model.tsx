import { IMenu } from '@interfaces/IMenu';
import {
  BsBoxFill,
  BsFillBellFill,
  BsFillGridFill,
  BsGearFill,
} from 'react-icons/bs';
import {
  FaBullhorn,
  FaCashRegister,
  FaFileInvoiceDollar,
  FaPaperPlane,
  FaRegImages,
  FaStore,
  FaTags,
  FaUsers,
} from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

export const listMenuAdmin: IMenu[] = [
  {
    name: 'Main',
    isParent: true,
    child: [
      {
        name: 'Beranda',
        route: '/',
        code: 'beranda',
        icon: <BsFillGridFill />,
      },
    ],
  },
  {
    isDivider: true,
  },
  {
    name: 'Order',
    isParent: true,
    child: [
      {
        name: 'Invoice',
        route: '/invoice',
        code: 'invoice',
        icon: <FaFileInvoiceDollar />,
      },
      {
        name: 'Transaksi',
        route: '/order',
        code: 'order',
        icon: <FaCashRegister />,
      },
    ],
  },
  {
    isDivider: true,
  },
  {
    name: 'Content',
    isParent: true,
    child: [
      {
        name: 'Brand',
        route: '/brand',
        code: 'brand',
        icon: <FaTags />,
      },
      {
        name: 'Product',
        isMulti: true,
        code: 'product,product/size,product/color,product/category',
        icon: <BsBoxFill />,
        child: [
          {
            name: 'List',
            route: '/product',
            code: 'product',
          },
          {
            name: 'Ukuran',
            route: '/product/size',
            code: 'product/size',
          },
          {
            name: 'Warna',
            route: '/product/color',
            code: 'product/color',
          },
          {
            name: 'Kategori',
            route: '/product/category',
            code: 'product/category',
          },
        ],
      },
      {
        name: 'Store',
        route: '/store',
        code: 'store',
        icon: <FaStore />,
      },
      {
        name: 'Banner',
        route: '/banner',
        code: 'banner',
        icon: <FaRegImages />,
      },
      {
        name: 'Notifikasi',
        route: '/notification',
        code: 'notification',
        icon: <BsFillBellFill />,
      },
      {
        name: 'Campaign',
        route: '/campaign',
        code: 'campaign',
        icon: <FaBullhorn />,
      },
      {
        name: 'Voucher',
        route: '/voucher',
        code: 'voucher',
        icon: <MdDiscount />,
      },
    ],
  },
  {
    isDivider: true,
  },
  {
    name: 'Marketplace',
    isParent: true,
    child: [
      {
        name: 'Produk',
        route: '/marketplace/product',
        code: 'marketplace/product',
        icon: <FaFileInvoiceDollar />,
      },
      {
        name: 'Order',
        route: '/marketplace/order',
        code: 'marketplace/order',
        icon: <FaCashRegister />,
      },
    ],
  },
  {
    isDivider: true,
  },
  {
    name: 'Setting',
    isParent: true,
    child: [
      {
        name: 'Message Template',
        route: '/template',
        code: 'template',
        icon: <FaPaperPlane />,
      },
      {
        name: 'Member',
        route: '/member',
        code: 'member',
        icon: <FaUsers />,
      },
      {
        name: 'General Setting',
        route: '/setting',
        code: 'setting',
        icon: <BsGearFill />,
      },
    ],
  },
];
