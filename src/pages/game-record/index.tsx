import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import { storage } from "utils";
import { formatTime } from "utils/formatTime";

import { IconTime, PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameRecordPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();
  const { currentLevel } = useLevels();

  const handleClose = () => {
    storage.set(`isRecordShown-${currentLevel.label}-${results?.timer}`, true);
    navigate(-1);
  };

  const time = formatTime(64);

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
        <IconTime className={style.icon} />

        <p className={style.results}>{time}</p>
      </div>
    </LayoutInfo>
  );
};
