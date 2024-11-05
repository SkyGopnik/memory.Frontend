import classNames from "classnames";
import React from "react";

import { ShopButton } from "components/common/ShopButton";

import { IconCoin } from "assets";

import { IconSelect } from "./_assets";

import type { GoodsProps } from "./types";

import style from "./index.module.scss";

export const Product = ({
  title,
  isBuy,
  price,
  isSelected,
  imageSrc: ImageComponent
}: GoodsProps) => {
  return (
    <div className={classNames(style.goods, { [style.unlocked]: isBuy })}>
      <div className={style.content}>
        <div className={style.head}>
          <ImageComponent
            className={classNames(style.icon, {
              [style.unlocked]: isBuy
            })}
          />

          <p
            className={classNames(style.title, {
              [style.unlocked]: isBuy
            })}
          >
            {title}
          </p>
        </div>

        {!isBuy && !isSelected && (
          <ShopButton variant="buy" className={style.buy}>
            <IconCoin className={style.coin} />

            {price}
          </ShopButton>
        )}

        {isBuy && !isSelected && (
          <ShopButton variant="select">Установить</ShopButton>
        )}

        {isSelected && <IconSelect role="button" />}
      </div>
    </div>
  );
};
