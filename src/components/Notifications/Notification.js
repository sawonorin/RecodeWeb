import React, { useState } from "react";
import { Message } from "semantic-ui-react";

const Notification = ({ color, message }) => {
  const [visible, setVisibility] = useState(true);

  return (
    <div>
      {message && visible && (
        <Message
          color={color}
          onDismiss={() => setVisibility(false)}
          style={{ marginBottom: "1px" }}
          content={message}
        />
      )}
    </div>
  );
};

export default Notification;
