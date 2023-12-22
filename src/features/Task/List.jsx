import React, { useState } from "react";

import Item from "./Item";

const List = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Close off Case #012920- RODRIGUES, Amiguel",
      day: "2 Days Left",
      date1: "12/06/2021",
      date2: "",
      collapse: true,
      description: "Description",
      checkbox: true,
      isCollabse: true,
    },
    {
      id: 2,
      title: "Close off Case #012920- RODRIGUES, Amiguel 2",
      day: "2 Days Left",
      date1: "12/06/2021",
      date2: "",
      collapse: false,
      description: "Description 2",
      checkbox: false,
      isCollabse: true,
    },
  ]);

  function handleActiveBox({ checked, id }) {
    const tempTasks = [...tasks];
    tempTasks.forEach((tempTask) => {
      if (tempTask.id === id) {
        tempTask.checkbox = checked;
      }
    });

    setTasks(tempTasks);
  }

  function handleCollabse(id) {
    const tempTasks = [...tasks];
    tempTasks.forEach((tempTask) => {
      if (tempTask.id === id) {
        tempTask.isCollabse = !tempTask.isCollabse;
      }
    });

    setTasks(tempTasks);
  }
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <Item
            task={task}
            index={index}
            key={task.id}
            handleActiveBox={handleActiveBox}
            handleCollabse={handleCollabse}
          />
        );
      })}
    </ul>
  );
};

export default List;
