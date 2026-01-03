const ProductCard = ({ product }) => {
  const {
    image,
    category = "Graphic Design",
    subCategory = "English Department",
    name,
    originalPrice,
    discountedPrice,
  } = product;

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-4 md:p-5 lg:p-6 gap-2 md:gap-3">
        {/* Category */}
        <div className="text-xs font-bold text-[#252B42]">
          {category}
        </div>
        
        {/* Sub Category */}
        <div className="text-xs text-[#737373]">
          {subCategory}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1.5 md:mt-2">
          {originalPrice && discountedPrice ? (
            <>
              <span className="text-xs md:text-sm text-[#BDBDBD] line-through">
                ${originalPrice}
              </span>
              <span className="text-sm md:text-base font-bold text-[#23856D]">
                ${discountedPrice}
              </span>
            </>
          ) : (
            <span className="text-sm md:text-base font-bold text-[#252B42]">
              ${originalPrice || discountedPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

