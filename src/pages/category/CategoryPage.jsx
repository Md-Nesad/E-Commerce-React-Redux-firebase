import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../components/context/myContext";
import Loader from "../../components/loader/Loader";

export default function CategoryPage() {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { getAllProduct, loading } = context;
  const navigate = useNavigate();
  //filter Product
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );

  return (
    <Layout>
      <div>
        <div className="">
          <h1 className=" text-center mb-5 mt-6 text-2xl font-semibold first-letter:uppercase">
            category: {categoryname}
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex justify-center">{loading && <Loader />}</div>
            {filterProduct.length > 0 ? (
              <>
                <div className="flex flex-wrap -m-4">
                  {filterProduct.map((item, index) => {
                    const { id, productImageUrl, title, price } = item;
                    return (
                      <div key={index} className="p-4 w-full md:w-1/4">
                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                          <img
                            onClick={() => navigate(`/productinfo/${id}`)}
                            className="lg:h-80  h-96 w-full"
                            src={productImageUrl}
                            alt="blog"
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              E-Nesad
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {title.substring(0, 15)}...
                            </h1>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              ₹{price}
                            </h1>

                            <div className="flex justify-center ">
                              <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="flex justify-center">
                    <img
                      className=" mb-9"
                      src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-black text-xl ml-[510px] mt-2">
                    No{" "}
                    <span className="font-bold text-2xl">{categoryname}</span>{" "}
                    product found
                  </h1>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
