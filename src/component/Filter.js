import React from "react";
import Card from "./Card";

const group_map = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
  "usr-1": "Anoop sharma",
  "usr-2": "Yogesh",
  "usr-3": "Shankar",
  "usr-4": "Ramesh",
  "usr-5": "Suresh",
};
function Filter({ tickets, groupOption, orderOption }) {
  let groupedTickets = [...tickets];

  if (groupOption === "status") {
    // Group by status
    groupedTickets = tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) groups[status] = [];
      groups[status].push(ticket);
      return groups;
    }, {});
  } else if (groupOption === "user") {
    // Group by user
    groupedTickets = tickets.reduce((groups, ticket) => {
      const user = ticket.userId;
      if (!groups[user]) groups[user] = [];
      groups[user].push(ticket);
      return groups;
    }, {});
  } else if (groupOption === "prioritygrouping") {
    // Group by priority
    groupedTickets = tickets.reduce((groups, ticket) => {
      const pri = ticket.priority;
      if (!groups[pri]) groups[pri] = [];
      groups[pri].push(ticket);
      return groups;
    }, {});
  }

  const orderedGroupedTickets = Object.keys(groupedTickets).reduce(
    (sorted, key) => {
      console.log(typeof groupedTickets);
      sorted[key] = groupedTickets[key].sort((a, b) => {
        if (orderOption === "priority") {
          return b.priority - a.priority; // Order by priority (descending)
        } else if (orderOption === "title") {
          return a.title.localeCompare(b.title); // Order by title (alphabetical)
        }
        return 0;
      });
      return sorted;
    },
    {}
  );

  return (
    <div className="Filter d-flex">
      {Object.keys(orderedGroupedTickets).map((group) => (
        <div key={group} className="group">
          <h2 className="columnname">{getgroupname(group)}</h2>
          <div>
            {orderedGroupedTickets[group].map(
              ({ id, title, tag, priority, userId }) => (
                <Card
                  key={id}
                  title={title}
                  id={id}
                  tag={tag}
                  priority={priority}
                  userId={userId}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
function getgroupname(group) {
  return group_map[group];
}
export default Filter;
