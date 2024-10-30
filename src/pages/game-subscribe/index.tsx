import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternGroup } from "assets";

import style from "./index.module.scss";

export const GameSubscribePage = () => {
  return (
    <LayoutWrapper className={style.page} pattern={PatternGroup}>
      <AfterGame
        title="Новый рекорд"
        subtitle="Теперь ты еще круче"
        isSubscribe
      >
        <Button type="primary" color="blue" className={style.subscribe}>
          Подписаться
        </Button>
      </AfterGame>
    </LayoutWrapper>
  );
};
