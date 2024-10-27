import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { CloseButton } from "components/common";
import { Button, Info, LayoutWrapper } from "components/core";

import { PatternFail } from "assets";

import style from "./index.module.scss";

export const GameFailPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutWrapper className={style.page} pattern={PatternFail}>
      <div className={style.content}>
        <CloseButton className={style.close} onClick={() => navigate(-2)} />

        {results && (
          <Info
            timer={results.timer}
            score={results.score}
            limit={results.limit}
          />
        )}

        <div className={style.info}>
          <h1 className={style.title}>Раунд не пройден</h1>

          <p className={style.description}>
            Отдохни, соберись с мыслями и снова в бой
          </p>
        </div>

        <div className={style.actions}>
          <Button
            type="secondary"
            color="red"
            onClick={() => navigate("/levels")}
          >
            Уровни
          </Button>

          <Button type="primary" color="red">
            Продолжить
          </Button>
        </div>
      </div>
    </LayoutWrapper>
  );
};
