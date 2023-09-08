import React from "react";
import "./DropDown.css";

function DropDown({
  groupOption,
  setGroupOption,
  orderOption,
  setOrderOption,
}) {
  const handleGroupOptionChange = (option) => {
    setGroupOption(option);
  };

  const handleOrderOptionChange = (option) => {
    setOrderOption(option);
  };

  return (
    <div className="DropDown">
      <div className="dropdown">
        <label htmlFor="groupDropdown">Group By:</label>
        <select
          id="groupDropdown"
          value={groupOption}
          onChange={(e) => handleGroupOptionChange(e.target.value)}
        >
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="prioritygrouping">By Priority</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="orderDropdown">Order By:</label>
        <select
          id="orderDropdown"
          value={orderOption}
          onChange={(e) => handleOrderOptionChange(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
