import * as React from "react";
import Layout from "./Layout";

interface Props {
  error: Error;
}
const Errors = ({ error }: Props) => (
  <Layout title="Error">
    <p>
      <span style={{ color: "red" }}>Error:</span> {error}
    </p>
  </Layout>
);

export default Errors;
