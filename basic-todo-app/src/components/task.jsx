import React from "react";

function Task() {
  let count = 0;
  return (
    <div className="text-3xl font-bold underline">
      <h4>Title{count + 1}</h4>
      <p>this is my task</p>
    </div>
  );
}

export default Task;
