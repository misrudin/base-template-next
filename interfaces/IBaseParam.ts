export interface IBaseParams {
  page?: number;
  length?: number;
  search?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
  manual?: string;
  store_id?: string;
  brand_id?: string;
  sync_shopee?: string;
  filterDateType?: 'all' | 'month' | '3month' | 'custom' | string;
}

export const initialParams: IBaseParams = {};
