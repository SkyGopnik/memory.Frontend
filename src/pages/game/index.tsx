import { Info, Item } from "./_components";

import { useGame } from "./_hooks";

import style from "./index.module.scss";

export const GamePage = () => {
  const { timer, field, openedItems, handleItemClick } = useGame();

  return (
    <div className={style.page}>
      <Info timer={timer} />

      <div className={style.game}>
        {field.map(({ value, isActive }, index) => (
          <Item
            key={index}
            isActive={isActive || openedItems.includes(index)}
            onClick={() => handleItemClick(index)}
          >
            {value}
          </Item>
        ))}
      </div>
    </div>
  );
};
