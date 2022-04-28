export interface Fields {
  product_name: string;
  img_url: string;
  description: string;
  price: number;
  id_type: number;
}

export interface RootObject {
  model: string;
  pk: number;
  fields: Fields;
}