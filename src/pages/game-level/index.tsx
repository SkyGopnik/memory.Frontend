import { useNavigate } from "react-router";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import { shareOnWall, storage } from "utils";

import { PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameLevelPage = () => {
  const navigate = useNavigate();

  const { currentLevel } = useLevels();

  const handleClose = () => {
    storage.set(`isLevelShown-${currentLevel.label}`, true);
    navigate("/game");
  };

  const handleShare = async () => {
    const message = `Я достиг нового уровня - «${currentLevel.label}» в игре Мемори! Присоединяйся и попробуй обогнать меня 😉`;

    await shareOnWall(message);
  };

  return (
    <LayoutInfo
      className={style.page}
      contentClassName={style.content}
      title="Доступен новый уровень"
      description={`Теперь ты «${currentLevel.label}»`}
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
      <currentLevel.image className={style.level} />
    </LayoutInfo>
  );
};
