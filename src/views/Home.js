import React, { useState, useEffect, useContext } from "react";
import * as API from "api";
import Main from "layouts/Main";
import SearchBox from "components/SeachBox";
import SEO from "components/SEO";
import { AppContext } from "context";

export default () => {
  const [data, setData] = useState([]);
  const { repo } = useContext(AppContext);

  useEffect(() => {
    API.fetchData(setData, repo);
  }, [repo]);

  return (
    <>
      <SEO title="🏡 Home, sweet home" />
      <Main>
        <SearchBox currentRepo={repo} data={data} />
      </Main>
    </>
  );
};
