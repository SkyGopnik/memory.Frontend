import { LayoutWrapper } from "components/core";

import { PatternWin } from "assets";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  return (
    <LayoutWrapper className={style.page} pattern={PatternWin}>
      <div className={style.content}>d</div>
    </LayoutWrapper>
  );
};