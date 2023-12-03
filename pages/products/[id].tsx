import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import Errors from "../../components/Errors";
import { toast } from "react-toastify";

type Props = {
  id?: string;
};

const ProductDetail = ({ id }: Props) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${id}`).then((response: Response) =>
        response.json()
      ),
  });

  if (isPending) return <Loading />;

  if (error) {
    return <Errors error={error} />;
  }

  //Tank Query Mutation for update product
  const mutation = useMutation({
    mutationFn: (payload) => {
      return fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      toast.success("Update successfully");
    },
    onError: (error) => {
      toast.error(`Something went wrong with error: ${error}`);
    },
  });

  const updateProduct = (payload) => {
    try {
      delete payload.id;
      mutation.mutate(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Product Detail">
      {data && <ListDetail item={data} updateProduct={updateProduct} />}
    </Layout>
  );
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on products
  const paths = [];
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { id } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
