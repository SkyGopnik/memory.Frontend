import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { PatternChance } from "assets";

import style from "./index.module.scss";

export const GameChancePage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutInfo
      results={results}
      className={style.page}
      pattern={PatternChance}
      title="Последняя попытка"
      description="Посмотри рекламу и получи дополнительные 30 секунд"
    >
      <div className={style.actions}>
        <Button type="secondary" color="pink" onClick={() => navigate(-2)}>
          Завершить
        </Button>

        <Button type="primary" color="pink">
          Смотреть
        </Button>
      </div>
    </LayoutInfo>
  );
};
