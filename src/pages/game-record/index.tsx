import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import { storage } from "utils";

import { IconCoin, PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameRecordPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();
  const { currentLevel } = useLevels();

  const handleClose = () => {
    storage.set(`isRecordShown-${currentLevel.label}-${results?.timer}`, true);
    navigate(-1);
  };

  return (
    <LayoutInfo
      className={style.page}
      contentClassName={style.content}
      title="Новый рекорд"
      description={`Поздравляем с повышением на уровне «${currentLevel.label}»`}
      pattern={PatternNewRecord}
      actions={
        <>
          <Button type="secondary" color="violet" onClick={handleClose}>
            Продолжить
          </Button>

          <Button type="primary" color="violet">
            Поделиться
          </Button>
        </>
      }
      onClose={handleClose}
    >
      <div className={style.record}>
        <IconCoin className={style.icon} />

        <p className={style.results}>{results?.timer}</p>
      </div>
    </LayoutInfo>
  );
};
