import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1 className="text-4xl font-black text-gray-900 dark:text-white">
      Hello Demo 👋
    </h1>
    <p>Click on products to get product list.</p>
  </Layout>
);

export default IndexPage;
