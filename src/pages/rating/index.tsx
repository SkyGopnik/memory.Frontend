import classNames from "classnames";
import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { ImageRhombus } from "./_assets";

import style from "./index.module.scss";

export const RatingPage = () => {
  const navigate = useNavigate();

  const Players = [
    {
      name: "Vladislav Melnichuk",
      score: 1000000
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      score: 904123
    },
    {
      name: "Lorem ipsum dolor sit amet.",
      score: 12313
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      score: 64380
    }
  ];

  const sortedPlayers = [...Players].sort((a, b) => b.score - a.score);

  return (
    <div className={style.page}>
      <div className={style.head}>
        <p className={style.title}>Рейтинг</p>

        <CloseButton
          className={style.close}
          onClick={() => navigate("/play")}
        />
      </div>

      <div className={style.list}>
        {sortedPlayers.map((player, index) => (
          <div className={style.player} key={index}>
            <div className={style.data}>
              <p className={style.position}>{index + 1}</p>

              <p className={style.name}>{player.name}</p>
            </div>

            <div className={style.rating}>
              <p className={style.score}>{player.score.toLocaleString()}</p>

              <ImageRhombus
                className={classNames({
                  [style.largeRhombus]: player.score >= 1000000
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
