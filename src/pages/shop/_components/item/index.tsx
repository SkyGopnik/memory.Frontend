import classNames from "classnames";
import React from "react";

import { ShopButton } from "components/common";

import { IconCoin } from "assets";

import { IconSelect } from "./_assets";

import type { GoodsProps } from "./types";

import style from "./index.module.scss";

export const Item = ({
  title,
  price,
  icon: IconComponent,
  isSelected,
  isOwned
}: GoodsProps) => {
  return (
    <div className={classNames(style.item, { [style.unlocked]: isOwned })}>
      <div className={style.content}>
        <div className={style.head}>
          <IconComponent className={style.icon} />

          <p className={style.title}>{title}</p>
        </div>

        {!isOwned && !isSelected && (
          <ShopButton variant="buy" className={style.buy}>
            <IconCoin className={style.coin} />

            {price}
          </ShopButton>
        )}

        {isOwned && !isSelected && (
          <ShopButton variant="select">Установить</ShopButton>
        )}

        {isSelected && <IconSelect role="button" />}
      </div>
    </div>
  );
};
