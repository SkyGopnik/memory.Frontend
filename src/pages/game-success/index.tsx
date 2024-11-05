import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { PatternWin } from "assets";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <LayoutInfo
      results={results}
      title="Раунд пройден"
      description="Так держать, только вперед"
      className={style.page}
      pattern={PatternWin}
    >
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
    </LayoutInfo>
  );
};
