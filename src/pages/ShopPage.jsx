import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';

const ShopPage = () => {
  const categories = [
    { id: 1, image: '/images/products/product-week-1.png', title: 'CLOTHS', items: 5 },
    { id: 2, image: '/images/products/product-week-2.png', title: 'CLOTHS', items: 5 },
    { id: 3, image: '/images/products/product-week-3.png', title: 'CLOTHS', items: 5 },
    { id: 4, image: '/images/products/product-lara-croptop.png', title: 'CLOTHS', items: 5 },
    { id: 5, image: '/images/products/product-emma-dress.png', title: 'CLOTHS', items: 5 },
  ];

  const products = [
    {
      id: 1,
      image: '/images/products/product-frank-jacket.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 1',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 2,
      image: '/images/products/product-gray-hoodie.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 2',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 3,
      image: '/images/products/product-yellow-cardigan.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 3',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 4,
      image: '/images/products/product-stripe-tee.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 4',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 5,
      image: '/images/products/product-colorblock-hoodie.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 5',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 6,
      image: '/images/products/product-lara-croptop.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 6',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 7,
      image: '/images/products/product-emma-dress.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 7',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 8,
      image: '/images/products/product-frank-jacket.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 8',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 9,
      image: '/images/products/product-gray-hoodie.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 9',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 10,
      image: '/images/products/product-yellow-cardigan.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 10',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 11,
      image: '/images/products/product-stripe-tee.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 11',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
    {
      id: 12,
      image: '/images/products/product-emma-dress.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Product 12',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
    },
  ];

  const brands = [
    { name: 'hooli', file: 'brand-hooli.png' },
    { name: 'lyft', file: 'brand-lyft.png' },
    { name: 'leaf', file: 'brand-leaf.png' },
    { name: 'stripe', file: 'brand-stripe.png' },
    { name: 'aws', file: 'brand-aws.png' },
    { name: 'reddit', file: 'brand-reddit.png' },
  ];

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <section className="py-4 md:py-8 lg:py-12 xl:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#252B42] mb-3 md:mb-4">
            Shop
          </h1>
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#737373] mb-6 md:mb-8">
            <Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-12">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative w-full md:w-[calc(33.333%-10.67px)] lg:w-[calc(20%-19.2px)] h-[180px] md:h-[250px] lg:h-[300px] xl:h-[400px] group overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                  <div className="text-white">
                    <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 md:mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base">{category.items} Items</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8">
            <div className="text-xs md:text-sm text-[#737373]">
              Showing all {products.length} results
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <div className="hidden md:flex items-center gap-2">
                <span className="text-xs md:text-sm text-[#737373]">Views:</span>
                <button className="p-1.5 md:p-2 text-[#23A6F0] border border-[#23A6F0] rounded">
                  <Grid size={14} className="md:w-4 md:h-4" />
                </button>
                <button className="p-1.5 md:p-2 text-[#737373] border border-gray-300 rounded hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
                  <List size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
              <select className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded text-xs md:text-sm text-[#737373] focus:outline-none focus:border-[#23A6F0]">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <button className="px-3 py-1.5 md:px-4 md:py-2 bg-[#23A6F0] text-white text-xs md:text-sm font-semibold rounded hover:bg-[#1e8fc7] transition-colors">
                Filter
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-1 md:gap-2 mb-6 md:mb-8 lg:mb-12">
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded text-xs md:text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
              First
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded text-xs md:text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
              1
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 bg-[#23A6F0] text-white rounded text-xs md:text-sm font-semibold">
              2
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded text-xs md:text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
              3
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded text-xs md:text-sm text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 lg:py-16 xl:py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={`/images/brands/${brand.file}`}
                alt={brand.name}
                className="h-6 md:h-8 lg:h-10 xl:h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;

