import { useNavigate } from "react-router";

import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternFail } from "assets";

import style from "./index.module.scss";

export const GameFailPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper className={style.page} pattern={PatternFail}>
      <AfterGame
        showResult
        title="Раунд не пройден"
        subtitle="Отдохни, соберись с мыслями и снова в бой"
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
      </AfterGame>
    </LayoutWrapper>
  );
};
