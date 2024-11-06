import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Button, LayoutInfo } from "components/core";

import { PatternFail } from "assets";

import style from "./index.module.scss";

export const GameFailPage = () => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  const handleClose = () => navigate("/play");

  return (
    <LayoutInfo
      className={style.page}
      contentClassName={style.content}
      stats={results}
      title="Раунд не пройден"
      description="Отдохни, соберись с мыслями и снова в бой"
      pattern={PatternFail}
      actions={
        <>
          <Button
            type="secondary"
            color="red"
            onClick={() => navigate("/levels")}
          >
            Уровни
          </Button>

          <Button type="primary" color="red" onClick={handleClose}>
            Продолжить
          </Button>
        </>
      }
      onClose={handleClose}
    />
  );
};
