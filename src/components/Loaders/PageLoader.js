import React, { useContext } from "react";
import { Loader } from "semantic-ui-react";
import { ActivityContext } from "../../context/activity/ActivityContext";

const PageLoader = () => {
  const { loading } = useContext(ActivityContext);

  return <Loader active={loading} inverted inline="centered" />;
};

export default PageLoader;
