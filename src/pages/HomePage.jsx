import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Heart, ShoppingCart, Eye, Clock, GraduationCap, BarChart3 } from 'lucide-react';

const HomePage = () => {
  const bestSellingProducts = [
    {
      id: 1,
      image: '/images/products/product-lara-croptop.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Lara Croptop',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40'],
      sales: 15,
      views: 24,
    },
    {
      id: 2,
      image: '/images/products/product-emma-dress.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Emma Dress',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D'],
      sales: 15,
      views: 24,
    },
    {
      id: 3,
      image: '/images/products/product-stripe-tee.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Stripe Tee',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40'],
      sales: 15,
      views: 24,
    },
    {
      id: 4,
      image: '/images/products/product-frank-jacket.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Frank Jacket',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D'],
      sales: 15,
      views: 24,
    },
    {
      id: 5,
      image: '/images/products/product-gray-hoodie.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Gray Hoodie',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40'],
      sales: 15,
      views: 24,
    },
    {
      id: 6,
      image: '/images/products/product-yellow-cardigan.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Yellow Cardigan',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D'],
      sales: 15,
      views: 24,
    },
    {
      id: 7,
      image: '/images/products/product-colorblock-hoodie.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Colorblock Hoodie',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D', '#E77C40'],
      sales: 15,
      views: 24,
    },
    {
      id: 8,
      image: '/images/products/product-graphic-tee.png',
      category: 'Graphic Design',
      subCategory: 'English Department',
      name: 'Graphic Tee',
      originalPrice: '16.48',
      discountedPrice: '6.48',
      colors: ['#23A6F0', '#23856D'],
      sales: 15,
      views: 24,
    },
  ];

  const services = [
    {
      icon: '/images/icons/icon-easy-wins.png',
      title: 'Easy Wins',
      description: 'Get your best looking smile now!',
    },
    {
      icon: '/images/icons/icon-concrete.png',
      title: 'Concrete',
      description: 'Defalcate is most focused in helping you discover your most beautiful smile',
    },
    {
      icon: '/images/icons/icon-hack-growth.png',
      title: 'Hack Growth',
      description: 'Overcome any hurdle or any other problem.',
    },
  ];

  const featuredPosts = [
    {
      id: 1,
      image: '/images/blog/blog-post-1.png',
      category: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: 15,
      price: '16.48',
      discountedPrice: '6.48',
      rating: 4.9,
      hours: '22h',
      lessons: 64,
    },
    {
      id: 2,
      image: '/images/blog/blog-post-2.png',
      category: 'English Department',
      title: 'Graphic Design',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      sales: 15,
      price: '16.48',
      discountedPrice: '6.48',
      rating: 4.9,
      hours: '22h',
      lessons: 64,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-center pt-8 pb-8 md:pt-[178px] md:pb-12 lg:pb-20 xl:pb-24 overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-white rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-48 h-48 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 right-60 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-300 rounded-full opacity-15 blur-2xl"></div>
        </div>
        <div className="w-full md:ml-[59px] md:w-[1292px] md:h-[622px] h-auto rounded-[20px] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] relative z-10 p-6 md:p-0 overflow-visible">
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-start w-full h-full relative z-10">
          <div className="flex flex-col gap-4 md:gap-[30px] h-auto mb-6 md:mb-0 order-2 md:order-1 justify-center md:pl-[280px] md:pt-0 text-center md:text-left">
          <div className="text-xs md:text-[16px] font-bold text-[#2A7CC7] leading-[18px] md:leading-[24px] tracking-[0.1px] font-['Montserrat']">
            SUMMER 2020
          </div>
          <h1 className="text-3xl md:text-[58px] font-bold text-[#252B42] leading-[36px] md:leading-[80px] tracking-[0.2px] font-['Montserrat']">
            NEW COLLECTION
          </h1>
          <p className="text-sm md:text-[20px] font-normal text-[#737373] leading-[20px] md:leading-[30px] tracking-[0.2px] font-['Montserrat'] max-w-full md:max-w-[376px]">
            We know how large objects will act. but things on a small scale.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-[10px] w-full md:w-[221px] h-[48px] md:h-[62px] bg-[#23A6F0] text-white text-sm md:text-[16px] font-bold rounded hover:bg-[#1e8fc7] transition-colors font-['Montserrat']"
          >
            SHOP NOW
          </Link>
          </div>
          
          <div className="relative md:absolute right-0 bottom-0 flex justify-center md:justify-end items-end order-1 md:order-2 mb-4 md:mb-0 z-20 w-full md:w-auto">
            <img
              src="/images/hero/hero-new-collection.png"
              alt="New Collection"
              className="h-[300px] md:h-[520px] w-auto object-contain md:translate-x-24 md:translate-y-16"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600';
              }}
            />
          </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 lg:py-20 px-4 md:pl-[59px] md:pr-[59px] bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12 xl:gap-16">
            {[
              { name: 'hooli', file: 'brand-hooli.png' },
              { name: 'lyft', file: 'brand-lyft.png' },
              { name: 'leaf', file: 'brand-leaf.png' },
              { name: 'stripe', file: 'brand-stripe.png' },
              { name: 'aws', file: 'brand-aws.png' },
              { name: 'reddit', file: 'brand-reddit.png' },
            ].map((brand, index) => (
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

      <section className="py-8 md:py-20 lg:py-28 px-4 md:pl-[59px] md:pr-[59px] bg-white">
        <div className="container mx-auto max-w-7xl relative">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] justify-center items-start">
            <div className="relative overflow-hidden w-full md:w-[611px] h-[300px] md:h-[572px] mt-0 md:mt-[80px] ml-0 md:ml-[128.5px] group">
              <img
                src="/images/products/product-week-1.png"
                alt="Top Product Of the Week"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 lg:mb-6">Top Product Of the Week</h3>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white text-sm md:text-base font-semibold rounded hover:bg-white hover:text-[#23A6F0] transition-all duration-300"
                  >
                    EXPLORE ITEMS
                    <ArrowRight size={16} className="md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-[30px] w-full md:w-[240px] top-0 md:top-[80px]">
              <div className="relative overflow-hidden w-full md:w-[557px] h-[200px] md:h-[289px] group">
                <img
                  src="/images/products/product-week-2.png"
                  alt="Top Product Of the Week"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-7">
                  <div className="text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Top Product Of the Week</h3>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border-2 border-white text-white text-sm md:text-base font-semibold rounded hover:bg-white hover:text-[#23A6F0] transition-all duration-300"
                    >
                      EXPLORE ITEMS
                      <ArrowRight size={16} className="md:w-4 md:h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden w-full md:w-[557px] h-[180px] md:h-[261px] group">
                <img
                  src="/images/products/product-week-3.png"
                  alt="Top Product Of the Week"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-7">
                  <div className="text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Top Product Of the Week</h3>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border-2 border-white text-white text-sm md:text-base font-semibold rounded hover:bg-white hover:text-[#23A6F0] transition-all duration-300"
                    >
                      EXPLORE ITEMS
                      <ArrowRight size={16} className="md:w-4 md:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 px-4 md:pl-[59px] md:pr-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-12 xl:mb-16">
            <div className="text-xs md:text-sm lg:text-base text-[#23A6F0] font-semibold mb-2 md:mb-3 lg:mb-4">
              Featured Products
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#252B42] mb-3 md:mb-4 lg:mb-6">
              BESTSELLER PRODUCTS
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-[#737373] max-w-2xl px-4">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 md:gap-x-[30px] md:gap-y-[48px]">
            {[...bestSellingProducts.slice(0, 8), bestSellingProducts[0], bestSellingProducts[2]].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-15px)] lg:w-[calc(20%-24px)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-[#23A6F0] text-[#23A6F0] bg-white text-sm md:text-base font-semibold rounded hover:bg-[#23A6F0] hover:text-white transition-colors">
              LOAD MORE PRODUCTS
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:pl-[59px] md:pr-6 lg:pr-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                <img
                  src="/images/team/team-member-1.png"
                  alt="Team member"
                  className="w-1/2 h-auto rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300';
                  }}
                />
                <img
                  src="/images/team/team-member-2.png"
                  alt="Team member"
                  className="w-1/2 h-auto rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300';
                  }}
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="text-xs md:text-sm lg:text-base text-[#23A6F0] font-semibold mb-2 md:mb-3 lg:mb-4">
                Featured Products
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#252B42] mb-4 md:mb-6 lg:mb-8">
                We love what we do
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-[#737373] mb-3 md:mb-4 lg:mb-6">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
              <p className="text-xs md:text-sm lg:text-base text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 px-4 md:pl-[59px] md:pr-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-12 xl:mb-16">
            <div className="text-xs md:text-sm lg:text-base text-[#23A6F0] font-semibold mb-2 md:mb-3 lg:mb-4">
              Featured Products
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#252B42] mb-3 md:mb-4 lg:mb-6">
              THE BEST SERVICES
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-[#737373] max-w-2xl px-4">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-[30px]">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 md:p-8 lg:p-10 bg-white"
              >
                <div className="mb-4 md:mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#252B42] mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-[#737373]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 px-4 md:pl-[59px] md:pr-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-12 xl:mb-16">
            <div className="text-xs md:text-sm lg:text-base text-[#23A6F0] font-semibold mb-2 md:mb-3 lg:mb-4">
              Practice Advice
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#252B42] mb-3 md:mb-4 lg:mb-6">
              Featured Posts
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-[30px]">
            {featuredPosts.map((post) => (
              <div key={post.id} className="w-full md:w-[calc(50%-15px)] lg:w-[calc(50%-15px)] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-[250px] md:h-[500px] lg:h-[600px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400';
                    }}
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-red-500 text-white text-xs px-2 py-0.5 md:px-3 md:py-1 rounded">
                    Sale
                  </div>
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 md:bottom-4 flex items-center gap-2 md:gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Heart size={14} className="md:w-4 md:h-4 text-[#252B42]" />
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <ShoppingCart size={14} className="md:w-4 md:h-4 text-[#252B42]" />
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Eye size={14} className="md:w-4 md:h-4 text-[#252B42]" />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="text-xs text-[#23A6F0] font-semibold">
                        {post.category}
                      </div>
                      <div className="flex items-center gap-1 bg-[#252B42] text-white text-xs px-2 py-1 rounded">
                        <span className="text-yellow-400">★</span>
                        <span>{post.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#252B42] mb-3 md:mb-4">
                      {post.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#737373] mb-4 md:mb-6">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-[#737373] mb-4 md:mb-5">
                      <span>📥</span>
                      <span>{post.sales} Sales</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 md:mb-5">
                      <span className="text-xs md:text-sm text-[#BDBDBD] line-through">${post.price}</span>
                      <span className="text-sm md:text-base font-bold text-[#23856D]">${post.discountedPrice}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 md:mb-5">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#23A6F0]"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#23856D]"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#E77C40]"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#252B42]"></div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-[#737373] mb-4 md:mb-6">
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="md:w-[14px] md:h-[14px]" />
                        <span>{post.hours}...</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={12} className="md:w-[14px] md:h-[14px]" />
                        <span>{post.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#23856D]">
                        <BarChart3 size={12} className="md:w-[14px] md:h-[14px]" />
                        <span>Progress</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 md:px-8 md:py-3 border-2 border-[#23A6F0] text-[#23A6F0] text-xs md:text-sm lg:text-base font-semibold rounded hover:bg-[#23A6F0] hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight size={14} className="md:w-4 md:h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

