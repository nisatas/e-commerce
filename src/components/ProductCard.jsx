const ProductCard = ({ product }) => {
  const {
    image,
    category = "Graphic Design",
    subCategory = "English Department",
    name,
    originalPrice,
    discountedPrice,
    colors = ['#23A6F0', '#23856D', '#E77C40', '#252B42'],
  } = product;

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col p-3 md:p-4 lg:p-5 xl:p-6 gap-1.5 md:gap-2 lg:gap-3">
        <div className="text-xs font-bold text-[#252B42]">
          {category}
        </div>
        
        <div className="text-xs text-[#737373]">
          {subCategory}
        </div>

        <div className="flex items-center gap-2 mt-1 md:mt-1.5 lg:mt-2">
          {originalPrice && discountedPrice ? (
            <>
              <span className="text-xs text-[#BDBDBD] line-through">
                ${originalPrice}
              </span>
              <span className="text-xs md:text-sm lg:text-base font-bold text-[#23856D]">
                ${discountedPrice}
              </span>
            </>
          ) : (
            <span className="text-xs md:text-sm lg:text-base font-bold text-[#252B42]">
              ${originalPrice || discountedPrice}
            </span>
          )}
        </div>

        {colors && colors.length > 0 && (
          <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

