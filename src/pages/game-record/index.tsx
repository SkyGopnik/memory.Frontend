import { useNavigate } from "react-router";

import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { IconCoin, PatternNewRecord } from "assets";

import { useGameStore } from "../../store";

import style from "./index.module.scss";

export const GameRecordPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutInfo
      title="Новый рекорд"
      description="Теперь ты еще круче"
      className={style.page}
      pattern={PatternNewRecord}
    >
      <div className={style.content}>
        <div className={style.record}>
          <IconCoin className={style.icon} />

          <p className={style.results}>{results?.score}</p>
        </div>

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
      </div>
    </LayoutInfo>
  );
};
