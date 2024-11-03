import { Button } from "components/core";
import { LayoutInfo } from "components/core/LayoutInfo";

import { PatternGroup } from "assets";

import style from "./index.module.scss";

export const GameSubscribePage = () => {
  return (
    <LayoutInfo
      title="Подпишись на группу"
      description="Там очень интересно"
      className={style.page}
      pattern={PatternGroup}
    >
      <div className={style.content}>
        <img src="" alt="group" className={style.group} />

        <Button type="primary" color="blue" className={style.subscribe}>
          Подписаться
        </Button>
      </div>
    </LayoutInfo>
  );
};
