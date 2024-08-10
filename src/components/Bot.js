import React from "react";

const Bot = ({ bot, onAddBot, onRemoveBot, onDelete }) => {
  const handleClick = () => {
    if (onAddBot) {
      onAddBot(bot);
    } else if (onRemoveBot) {
      onRemoveBot(bot.id);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={bot.avatar_url} alt="avatar url" />
      <h1>Name: {bot.name}</h1>
      <button onClick={() => onDelete(bot.id)}>X</button>
    </div>
  );
};

export default Bot;
