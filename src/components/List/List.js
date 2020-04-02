import React from "react";
import { Item, List, Label, Empty } from "./List.styles";

export default ({ activeIssue, filteredIssues = [], onClick }) => {
  return (
    <div>
      {filteredIssues.length ? (
        <List data-testid="list">
          {filteredIssues.map((issue, index) => (
            <Item
              data-index={index}
              active={index === activeIssue}
              key={issue.id}
              onClick={onClick}
            >
              <p>{issue.title}</p>
              <div className="flex">
                {issue.labels.map(label => (
                  <Label role="label" key={label.id} color={label.color}>
                    {label.name}
                  </Label>
                ))}
              </div>
            </Item>
          ))}
        </List>
      ) : (
        <Empty data-testid="list-empty">
          <p>No issues for this repo! Good job folk!</p>
        </Empty>
      )}
    </div>
  );
};
