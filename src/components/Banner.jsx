const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r  from-[#FAFAFA] from-0% to-[#FCFCFC] to-[100%] gap-8 ">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center ">
        {/* images           */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-12 gap-4 ">
            <div className="flex bg-white py-2 px-3 items-center gap-3 shadow-md w-64 ">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="spce-y-1">
                <h5 className="font-medium mb-1">spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="md:flex hidden bg-white py-2 px-3 items-center gap-3 shadow-md w-64 ">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="spce-y-1">
                <h5 className="font-medium mb-1">spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* text            */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable Food
          </h2>
          <p className="text-xl text-[#4A4A4A] ">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold  text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
