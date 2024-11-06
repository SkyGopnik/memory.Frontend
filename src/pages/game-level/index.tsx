import { useNavigate } from "react-router";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import { storage } from "utils";

import { PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameLevelPage = () => {
  const navigate = useNavigate();

  const { currentLevel } = useLevels();

  const handleClose = () => {
    storage.set(`isLevelShown-${currentLevel.label}`, true);
    navigate("/play");
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

          <Button type="primary" color="violet">
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
