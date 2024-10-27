import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { CloseButton } from "components/common";
import { Button, Info, LayoutWrapper } from "components/core";

import { PatternWin } from "assets";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutWrapper className={style.page} pattern={PatternWin}>
      <div className={style.content}>
        <CloseButton
          className={style.close}
          onClick={() => navigate(-2)}
          delay={90}
        />

        {results && (
          <Info
            timer={results.timer}
            score={results.score}
            limit={results.limit}
          />
        )}

        <div className={style.info}>
          <h1 className={style.title}>Раунд пройден</h1>

          <p className={style.description}>Настоящий super-hero, так держать</p>
        </div>

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
      </div>
    </LayoutWrapper>
  );
};
