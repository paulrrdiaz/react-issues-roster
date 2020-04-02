import React from "react";
import { Item, List, Label, Empty } from "./List.styles";

export default ({ activeIssue, filteredIssues, onClick }) => {
  return (
    <div>
      {filteredIssues.length ? (
        <List>
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
                  <Label key={label.id} color={label.color}>
                    {label.name}
                  </Label>
                ))}
              </div>
            </Item>
          ))}
        </List>
      ) : (
        <Empty>
          <p>No issues for this repo! Good job folk!</p>
        </Empty>
      )}
    </div>
  );
};
