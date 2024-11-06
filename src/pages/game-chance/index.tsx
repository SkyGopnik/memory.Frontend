import { useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { useAsyncEffect } from "hooks";

import { advertisement } from "utils";

import { PatternChance } from "assets";

import style from "./index.module.scss";

export const GameChancePage = () => {
  const navigate = useNavigate();

  const { results, updateOptions } = useGameStore();

  const [advertisementType, setAdvertisementType] = useState<string>();

  useAsyncEffect(async () => {
    setAdvertisementType(await advertisement.type());
  }, []);

  const handleReward = async () => {
    const data =
      await advertisement[
        advertisementType === "ads" ? "showAds" : "subscribeGroup"
      ]();

    if (!data) {
      return;
    }

    updateOptions({
      timer: 30
    });

    navigate("/game");
  };

  return (
    <LayoutInfo
      className={style.page}
      contentClassName={style.content}
      stats={results}
      title="Последняя попытка"
      description={`${advertisementType === "ads" ? "Посмотри рекламу" : "Подпишись на группу"} и получи дополнительные 30 секунд`}
      pattern={PatternChance}
      actions={
        <>
          <Button
            type="secondary"
            color="pink"
            onClick={() => navigate("/game/fail")}
          >
            Завершить
          </Button>

          <Button type="primary" color="pink" onClick={handleReward}>
            {advertisementType === "ads" ? "Смотреть" : "Подписаться"}
          </Button>
        </>
      }
      onClose={() => navigate("/game/fail")}
    />
  );
};
