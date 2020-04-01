import React, { useState, useContext } from "react";
import { useNavigate } from "@reach/router";
import { AppContext } from "context";
import { Input, Label, Button, Error } from "components/Form";

export default () => {
  const { repo, updateRepo } = useContext(AppContext);
  const [repository, setRepository] = useState(repo);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onChange = e => {
    setRepository(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const isValid = repository.split("/").length === 2;

    if (isValid) {
      setError(false);
      updateRepo(repository);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Label htmlFor="update-repo">Update Repo</Label>
        <div>
          <Input onChange={onChange} value={repository} id="update-repo" type="text" required />
          {error && (
            <Error>
              Do better... <br />
              ProTip: userName/projectName
            </Error>
          )}
        </div>
        <Button primary type="submit">
          Fetch new issues...
        </Button>
      </form>
    </>
  );
};
