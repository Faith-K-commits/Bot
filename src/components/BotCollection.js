import React from "react";
import Bot from "./Bot";

const BotCollection = ({ bots, onAddBot, onRemoveBot, onDelete }) => {
  return (
    <div>
      <h2>Bots</h2>
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onAddBot={onAddBot}
          onRemoveBot={onRemoveBot}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BotCollection;
