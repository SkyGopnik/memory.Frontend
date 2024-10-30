import { useNavigate } from "react-router";

import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternChance } from "assets";

import style from "./index.module.scss";

export const GameChancePage = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper className={style.page} pattern={PatternChance}>
      <AfterGame
        showResult
        title="Последняя попытка"
        subtitle="Посмотри рекламу и получи дополнительные 30 секунд"
      >
        <div className={style.page}>
          <div className={style.actions}>
            <Button type="secondary" color="pink" onClick={() => navigate(-2)}>
              Завершить
            </Button>

            <Button type="primary" color="pink">
              Смотреть
            </Button>
          </div>
        </div>
      </AfterGame>
    </LayoutWrapper>
  );
};
