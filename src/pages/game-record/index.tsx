import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import {
  storage,
  shareOnWall,
  formatTime,
  formatTimeText,
  formatShareMessage
} from "utils";

import { IconTime, PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameRecordPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();
  const { currentLevel } = useLevels();

  const time = 122;

  const handleClose = () => {
    storage.set(`isRecordShown-${currentLevel.label}-${results?.timer}`, true);
    navigate(-1);
  };

  const handleShare = async () => {
    if (!results) return;

    const timeText = formatTimeText(time);
    const message = formatShareMessage(timeText, results.score);

    const data = await shareOnWall(message);

    if (!data) {
      return;
    }
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

          <Button type="primary" color="violet" onClick={handleShare}>
            Поделиться
          </Button>
        </>
      }
      onClose={handleClose}
    >
      <div className={style.record}>
        <IconTime className={style.icon} />

        <p className={style.results}>{formatTime(time)}</p>
      </div>
    </LayoutInfo>
  );
};
