import React, { useContext } from "react";
import { Message } from "semantic-ui-react";
import { ActivityContext } from "../../context/activity/ActivityContext";

const Notify = () => {
  const { notification, toggleNotify } = useContext(ActivityContext);

  if (notification.static !== true) {
    setTimeout(() => {
      toggleNotify({});
    }, 10000);
  }

  return (
    <Message
      icon={notification.icon}
      header={notification.title}
      content={notification.message}
      hidden={!notification.message}
      color={notification.color}
      style={
        notification.position === "bottom"
          ? {
              position: "fixed",
              bottom: "15px",
              right: "15px",
              width: "400px",
              maxWidth: "600px",
              margin: 0,
              zIndex: 5000,
            }
          : {
              position: "fixed",
              top: "15px",
              right: "20px",
              width: "400px",
              maxWidth: "600px",
              margin: 0,
              zIndex: 5000,
            }
      }
      onDismiss={() => toggleNotify({})}
      static={notification.static}
    />
  );
};

Notify.propTypes = {
  icon: "",
  header: "",
  conternt: "",
  position: "",
};

export default Notify;
