import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const ParentContainer = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  // Fetch data from the JSON server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Dependency array

  // Function to add bot to your Army Bot
  const addToBotArmy = (bot) => setBotArmy([...botArmy, bot]);

  // Function to remove bot from your army bot
  const removeBotFromBotArmy = (id) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== id);
    setBotArmy(updatedBotArmy);
  };

  // Function to delete bot
  const deleteBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            console.error(`Bot with ID ${id} not found.`);
            return;
          }
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setBots(bots.filter((bot) => bot.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="bot-container">
      <BotCollection
        bots={bots}
        onAddBot={addToBotArmy}
        onRemoveBot={removeBotFromBotArmy}
        onDelete={deleteBot}
      />
      <YourBotArmy
        botArmy={botArmy}
        onRemoveBot={removeBotFromBotArmy}
        onDelete={deleteBot}
      />
    </div>
  );
};

export default ParentContainer;
