import { useNavigate } from "react-router";

import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { PatternNewRecord } from "assets";

import { ImageNumberOne } from "../../assets/level-numbers";

import style from "./index.module.scss";

export const GameLevelPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutInfo
      title="Доступен новый уровень"
      description="Теперь ты «Ученик»"
      className={style.page}
      pattern={PatternNewRecord}
    >
      <div className={style.content}>
        <ImageNumberOne className={style.level} />

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
