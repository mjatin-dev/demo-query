import * as React from "react";
import { Product } from "../interfaces";
import Link from "next/link";

type Props = {
  items: Product[];
};

const List = ({ items }: Props) => (
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Brand
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {items?.map((item) => (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.title}
          </th>
          <td className="px-6 py-4"> {item.brand}</td>
          <td className="px-6 py-4"> {item.category}</td>
          <td className="px-6 py-4">$ {item.price}</td>
          <td className="px-6 py-4">
            <Link
              href={`/products/${item.id}`}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default List;
