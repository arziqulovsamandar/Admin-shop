export interface discountData {
  id: number;
  name: string;
  persentage: number;
  start_date: Date;
  end_date: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface singildiscountData {
  id: number;
  name: string;
  persentage: number;
  start_date: Date;
  end_date: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface categoriesData {
  id: number;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface productData {
  basketItems: [];
  brand: string;
  category: [];
  category_id: number;
  comment: [];
  createdAt: Date;
  description: string;
  discount_product: [];
  id: number;
  is_active: boolean;
  life: string;
  media: [];
  mfg: string;
  name: string;
  price: string;
  qr_code: string;
  store: [];
  total_count: number;
  unit_of_measure: string;
  updatedAt: Date;
  value: string;
}
export interface singilproductData {
  basketItems: [];
  brand: string;
  category: [];
  category_id: number;
  comment: [];
  createdAt: Date;
  description: string;
  discount_product: [];
  id: number;
  is_active: boolean;
  life: string;
  media: [
    {
      id: number;
      media_link: string;
    }
  ];
  mfg: string;
  name: string;
  price: string;
  qr_code: string;
  store: [];
  total_count: number;
  unit_of_measure: string;
  updatedAt: Date;
  value: string;
}
export interface storeData {
  id: number;
  addCount: number;
  product: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
export interface singilstoreData {
  id: number;
  addCount: number;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface OrdetData {
  id: number;
  phone: string;
  order_date: Date;
  createdAt: Date;
  status: boolean;
  payment_type: number;
  userAddress_id: number;
  basket_id: number;
  cupon_code_id: number;
  user_id: number;
}
export interface MediaData {
  id: number;
  media_link: string;
  product: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
export interface singilMediaData {
  media_link: string;
  product_id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface customerData {
  id: number;
  full_name: string;
  phone: string;
  is_active: boolean;
}
export interface cuponCodeData {
  id: number;
  name: string;
  persentage: number;
  end_date: Date;
}
export interface singilcuponCodeData {
  name: string;
  persentage: number;
  end_date: Date;
  createdAt: Date;
  updatedAt: Date;
}
