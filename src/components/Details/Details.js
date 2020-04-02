import React from "react";
import ReactMarkDown from "react-markdown";
import { Wrapper, Title, User, Label, Body, Button } from "./Details.styles";
import { Github } from "components/Icons";

export default ({ title, labels, body, url, user: { login, avatar_url, html_url } }) => {
  return (
    <Wrapper data-testid="details">
      <Title>{title}</Title>
      <User href={html_url} target="_blank">
        <img src={avatar_url} alt={login} />
        <h4>{login} has a complaint</h4>
      </User>
      <div className="flex">
        {labels.map(label => (
          <Label key={label.id} color={label.color}>
            {label.name}
          </Label>
        ))}
      </div>
      <Body>
        <ReactMarkDown source={body} />
      </Body>
      <Button href={url} target="_blank">
        Go to <Github width="40px" />
      </Button>
    </Wrapper>
  );
};
