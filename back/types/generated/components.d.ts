import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProductComposition extends Schema.Component {
  collectionName: 'components_product_product_compositions';
  info: {
    displayName: 'product_composition';
  };
  attributes: {
    item: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product-composition': ProductProductComposition;
    }
  }
}
