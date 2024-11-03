import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { Product } from "./_components/goods";

import { GOODS } from "./constants";

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
          {GOODS.map((item, index) => (
            <Product key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
