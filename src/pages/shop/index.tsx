import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { Item } from "./_components";

import type { ThemeItem } from "hooks";
import { useScore, useThemes } from "hooks";

import style from "./index.module.scss";

export const ShopPage = () => {
  const navigate = useNavigate();

  const { THEMES, activeTheme, ownedThemes, setTheme, addTheme } = useThemes();
  const { score, minusScore } = useScore();

  const handlePurchase = (item: ThemeItem) => {
    const newScore = score - item.price;

    if (newScore < 0) {
      return;
    }

    minusScore(item.price);
    addTheme(item.value);
  };

  return (
    <div className={style.page}>
      <div className={style.head}>
        <p className={style.title}>Магазин карточек</p>

        <CloseButton onClick={() => navigate(-1)} className={style.close} />
      </div>

      <div className={style.goods}>
        <div className={style.list}>
          {THEMES.map((item, index) => (
            <Item
              key={index}
              {...item}
              isOwned={item.price === 0 || ownedThemes?.includes(item.value)}
              isSelected={activeTheme === item.value}
              disabled={score - item.price < 0}
              onInstall={() => setTheme(item.value)}
              onPurchase={() => handlePurchase(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
