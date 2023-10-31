import isEmpty from 'lodash/isEmpty';

export const formatNumber = (num: number, isThousand = false) => {
  if (!isEmpty(num.toString())) {
    let curr: any = '';
    const format = num.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    if (isThousand) {
      curr =
        num <= 1000
          ? num
          : convert.splice(1, 2).join('.').split('').reverse().join('');
    } else {
      curr = num < 1000 ? num : convert.join('.').split('').reverse().join('');
    }

    return curr.toString();
  }
};

export const ribuan = (nStr: string | number) => {
  const value = nStr?.toString();
  return value?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const bigPrice = (nStr: string | number) => {
  const value: string = nStr.toString();
  const formatedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const temp = formatedValue.split('.');
  const mainValue = temp.filter((_, i) => i !== temp.length - 1);
  const subValue = temp.filter((_, i) => i === temp.length - 1);
  return {
    mainValue: mainValue.join('.'),
    subValue: subValue.join('.'),
  };
};

export function intToString(num: number): string {
  const newNum = num.toString().replace(/[^0-9.]/g, '');
  if (num < 1000) {
    return newNum;
  }
  const si = [
    { v: 1e3, s: 'K' },
    { v: 1e6, s: 'M' },
    { v: 1e9, s: 'B' },
    { v: 1e12, s: 'T' },
    { v: 1e15, s: 'P' },
    { v: 1e18, s: 'E' },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
    si[index].s
  );
}

export function formatRupiah(angka: string, prefix?: string) {
  const numberString = angka.replace(/[^,\d]/g, '').toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let rupiah = split[0].substr(0, sisa);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix === undefined ? rupiah : rupiah ? prefix + rupiah : '';
}

export function stringToInt(angka?: string): number | undefined {
  if (!angka) return undefined;
  return parseInt(angka.replace(/[^0-9.]/g, ''));
}

export function removeStringFormInt(value?: string): number | undefined {
  if (!value) return undefined;
  return Number(value?.replace(/\D/g, ''));
}

export const twoNumber = (num: number) => {
  return num.toLocaleString('id-ID', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
