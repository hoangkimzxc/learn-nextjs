import { useRouter } from "next/router";
import React from "react";

type Props = {};

const ParamsPage = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      ParamsPage
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default ParamsPage;
