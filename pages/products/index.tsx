import Layout from "../../components/Layout";
import List from "../../components/List";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import Errors from "../../components/Errors";

const Products = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((response: Response) =>
        response.json()
      ),
  });

 if (isPending) return <Loading />;

  if (error) {
    return <Errors error={error} />;
  }

  return (
    <Layout title="Product List">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <List items={data?.products} />
      </div>
    </Layout>
  );
};

export default Products;
