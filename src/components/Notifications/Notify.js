import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import { ActivityContext } from "../../context/activity/ActivityContext";

const Notify = () => {
  const { notification, toggleNotify } = useContext(ActivityContext);
  if (notification.static !== true) {
    setTimeout(() => {
      toggleNotify({});
    }, 7000);
  }

  return (
    <Message
      icon={notification.icon}
      header={notification.title}
      content={notification.message}
      hidden={!notification.message}
      color={notification.color}
      style={{
        position: "fixed",
        top: "60px",
        right: "15px",
        width: "400px",
        maxWidth: "600px",
        zIndex: 5000 + "!important",
      }}
      onDismiss={() => toggleNotify({})}
      static={notification.static}
    />
  );
};

export default Notify;
