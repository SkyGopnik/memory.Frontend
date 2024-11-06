import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { Item } from "./_components";

import { IconAnimals } from "assets/shop-icons";

import style from "./index.module.scss";

export const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <div className={style.head}>
        <p className={style.title}>Магазин карточек</p>

        <CloseButton onClick={() => navigate(-1)} className={style.close} />
      </div>

      <div className={style.goods}>
        <div className={style.list}>
          {[].map((item, index) => (
            <Item key={index} title="dw" price={2000} icon={IconAnimals} />
          ))}
        </div>
      </div>
    </div>
  );
};
