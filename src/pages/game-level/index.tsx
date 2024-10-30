import { useNavigate } from "react-router";

import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameLevelPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper className={style.page} pattern={PatternNewRecord}>
      <AfterGame
        title="Доступен новый уровень"
        subtitle="Теперь ты «Ученик»"
        isNewLevel
      >
        <div className={style.actions}>
          <Button
            type="secondary"
            color="violet"
            onClick={() => navigate("/levels")}
          >
            Продолжить
          </Button>

          <Button type="primary" color="violet">
            Поделиться
          </Button>
        </div>
      </AfterGame>
    </LayoutWrapper>
  );
};
