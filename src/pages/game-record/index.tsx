import { useNavigate } from "react-router";

import { Button, LayoutWrapper } from "components/core";
import { AfterGame } from "components/core/AfterGame";

import { PatternNewRecord } from "assets";

import style from "./index.module.scss";

export const GameRecordPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper className={style.page} pattern={PatternNewRecord}>
      <AfterGame title="Новый рекорд" subtitle="Теперь ты еще круче" isRecord>
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
      </AfterGame>
    </LayoutWrapper>
  );
};
