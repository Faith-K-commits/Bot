import React from "react";
import Bot from "./Bot";

const YourBotArmy = ({ botArmy, onRemoveBot, onDelete }) => {
  return (
    <div>
      <h2>My Bot Army</h2>
      {botArmy.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onRemoveBot={onRemoveBot}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
