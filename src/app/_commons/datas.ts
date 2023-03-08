import { Link } from './models/link';
import { Product } from './models/product';

export const LINKS: Link[] = [
  { id: 0, path: '', name: 'Home', icon: '' },
  { id: 1, path: '/about', name: 'A propos', icon: '' },
  { id: 2, path: '/contact', name: 'Contact', icon: '' },
];

export const PRODUCTS: Product[] = [
  {
    id: 748798,
    name: 'poivre xx penja',
    img: 'assets/product.png',
    description: 'deccription loremipsum',
    previews: [
      'https://ileauxepices.com/1354-product_zoom/graines-de-soja-grillees.jpg',
      'https://cdn.discordapp.com/attachments/483349134661779476/1029367018165633156/productpreview1.jpg',
      'assets/preview.png',
      'assets/productpreview1.png',
      'assets/productpreview1.png',
    ],
    path: '/product/533364',
  },
  {
    id: 2245,
    name: 'poivre xx penja',
    description: 'deccription loremipsum',
    img: 'assets/product.png',
    previews: [
      'https://ileauxepices.com/1354-product_zoom/graines-de-soja-grillees.jpg',
      'https://cdn.discordapp.com/attachments/483349134661779476/1029367018165633156/productpreview1.jpg',

      'assets/preview.png',
      'assets/productpreview1.png',
      'assets/productpreview1.png',
    ],
    path: '/product/234',
  },
];
