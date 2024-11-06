import classNames from "classnames";
import type { FC } from "react";
import React from "react";

import { ShopButton } from "components/common";

import { IconCoin } from "assets";

import { IconSelect } from "./_assets";

import type { ItemProps } from "./types";

import style from "./index.module.scss";

export const Item: FC<ItemProps> = ({
  title,
  price,
  icon: IconComponent,
  isSelected,
  isOwned,
  onInstall,
  onPurchase
}) => (
  <div className={classNames(style.item, { [style.unlocked]: isOwned })}>
    <div className={style.content}>
      <div className={style.head}>
        <IconComponent className={style.icon} />

        <p className={style.title}>{title}</p>
      </div>

      {!isOwned && !isSelected && (
        <ShopButton className={style.buy} variant="buy" onClick={onPurchase}>
          <IconCoin className={style.coin} />

          {price}
        </ShopButton>
      )}

      {isOwned && !isSelected && (
        <ShopButton variant="select" onClick={onInstall}>
          Установить
        </ShopButton>
      )}

      {isSelected && <IconSelect role="button" />}
    </div>
  </div>
);
