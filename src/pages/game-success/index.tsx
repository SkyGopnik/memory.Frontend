import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { useLevels } from "hooks";

import { storage } from "utils";

import { PatternWin } from "assets";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  const navigate = useNavigate();

  const { results, setOptions } = useGameStore();

  const { currentLevel } = useLevels();

  const checkLevelShown = () => {
    const isLevelShown =
      currentLevel.requiredScore !== 0
        ? storage.get(`isLevelShown-${currentLevel.label}`)
        : true;

    return Boolean(isLevelShown);
  };

  const handleContinue = () => {
    const isLevelShown = checkLevelShown();

    setOptions({
      ...currentLevel.gameOptions,
      attempts: 1
    });

    navigate(isLevelShown ? "/game" : "/game/level");
  };

  const handleClose = () => {
    const isLevelShown = checkLevelShown();

    navigate(isLevelShown ? "/play" : "/game/level");
  };

  return (
    <LayoutInfo
      className={style.page}
      contentClassName={style.content}
      stats={results}
      title="Раунд пройден"
      description="Так держать, только вперед"
      pattern={PatternWin}
      actions={
        <>
          <Button type="secondary" color="lime">
            Поделиться
          </Button>

          <Button type="primary" color="lime" onClick={handleContinue}>
            Продолжить
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};
