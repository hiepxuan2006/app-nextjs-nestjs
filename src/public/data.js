import product1 from './images/image-product-1.jpg'
import product2 from './images/image-product-2.jpg'
import product3 from './images/image-product-3.jpg'
import product4 from './images/image-product-4.jpg'

import product1Slider from './images/image-product-1-slider.jpg'
import product2Slider from './images/image-product-2-slider.jpg'
import product3Slider from './images/image-product-3-slider.jpg'
import product4Slider from './images/image-product-4-slider.jpg'

import product1Thumbnail from './images/image-product-1-thumbnail.jpg'
import product2Thumbnail from './images/image-product-2-thumbnail.jpg'
import product3Thumbnail from './images/image-product-3-thumbnail.jpg'
import product4Thumbnail from './images/image-product-4-thumbnail.jpg'

export const product = {
  company: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  currentPrice: 125,
  discount: 50,
  oldPrice: 250,
  images: {
    mainImgs: [product1, product2, product3, product4],
    thumbnails: [
      product1Thumbnail,
      product2Thumbnail,
      product3Thumbnail,
      product4Thumbnail,
    ],
    sliderImgs: [
      {
        id: 'sneaker1',
        img: product1Slider,
      },
      {
        id: 'sneaker2',
        img: product2Slider,
      },
      {
        id: 'sneaker3',
        img: product3Slider,
      },
      {
        id: 'sneaker4',
        img: product4Slider,
      },
    ],
  },
}

export const sliderData = [
  {
    img: '/images/1.png',
    location: 'Switzrerland Apls',
    description:
      'The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire',
    title: 'SAINT ANTÖNEN',
  },
  {
    img: '/images/2.png',
    title: 'The Grand Canyon',
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: 'Arizona',
  },
  {
    img: '/images/3.png',
    title: 'Masai Mara',
    description:
      'Wild animals in their natural environment, luxury safari lodges',
    location: 'Kenya',
  },
  {
    img: '/images/4.png',
    title: 'Angkor Wat',
    description:
      'A stunning ancient jungle city with hundreds of intricately constructed temples',
    location: 'Cambodia',
  },
  {
    img: '/images/7.png',
    title: 'Bali',
    description:
      'Tropical beaches, volcano hikes, ancient temples, and friendly people',
    location: 'Indonesia',
  },
]