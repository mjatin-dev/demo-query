import * as React from "react";

import { Product } from "../interfaces";

type ListDetailProps = {
  item: Product;
  updateProduct: Function;
};

const ListDetail = ({ item: product, updateProduct }: ListDetailProps) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [productPayload, setProdcutPayload] = React.useState<Product>({
    id: 0,
    title: "",
    price: 0,
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(productPayload);
  };

  React.useEffect(() => {
    setProdcutPayload({
      id: product?.id || 0,
      title: product?.title || "",
      price: product?.price || 0,
      description: product?.description || "",
    });
  }, [product]);

  return (
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={product?.images?.length > 0 ? product?.images[0] : ""}
            alt=""
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product?.title}
          </h5>
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${product?.price}
          </h6>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product?.description}
          </p>
          <a
            href="javascript:void(0)"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setIsEdit(true)}
          >
            Edit Product
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      {isEdit && (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={productPayload?.title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Title"
                  onChange={(event: any) =>
                    setProdcutPayload({
                      ...productPayload,
                      title: event.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="price"
                  value={productPayload?.price}
                  onChange={(event: any) =>
                    setProdcutPayload({
                      ...productPayload,
                      price: event.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className=" mb-6 ">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={productPayload?.description}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
                onChange={(event: any) =>
                  setProdcutPayload({
                    ...productPayload,
                    description: event.target.value,
                  })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

            <button
              type="button"
              className="ml-2 text-blue bg-white-700"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ListDetail;
