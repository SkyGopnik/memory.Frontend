import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { PatternFail } from "assets";

import style from "./index.module.scss";

export const GameFailPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutInfo
      results={results}
      className={style.page}
      title="Раунд не пройден"
      description="Отдохни, соберись с мыслями и снова в бой"
      pattern={PatternFail}
    >
      <div className={style.actions}>
        <Button
          type="secondary"
          color="red"
          onClick={() => navigate("/levels")}
        >
          Уровни
        </Button>

        <Button type="primary" color="red">
          Переиграть
        </Button>
      </div>
    </LayoutInfo>
  );
};
