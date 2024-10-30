import { useNavigate } from "react-router";

import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternWin } from "assets";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper className={style.page} pattern={PatternWin}>
      <AfterGame
        showResult
        title="Раунд пройден"
        subtitle="Так держать, только вперед"
      >
        <div className={style.actions}>
          <Button
            type="secondary"
            color="lime"
            onClick={() => navigate("/levels")}
          >
            Уровни
          </Button>

          <Button type="primary" color="lime">
            Продолжить
          </Button>
        </div>
      </AfterGame>
    </LayoutWrapper>
  );
};
