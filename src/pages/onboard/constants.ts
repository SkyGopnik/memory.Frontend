import {
  ImageStepOne,
  ImageStepSecond,
  ImageStepThird,
  ImageStepFourth
} from "./_assets";

export const STEPS = [
  {
    title: "Как играть?",
    description:
      "Перед тобой поле парных карточек с эмодзи. Постарайся запомнить" +
      " за несколько секунд расположение каждый пары эмодзи и после их " +
      "закрытия, найти все пары за отведенное время.",
    image: ImageStepOne
  },
  {
    title: "Валюта и система уровней",
    description:
      "За пройденные раунды ты будешь получать коины. Они нужны для открытия" +
      " следующих уровней, где игра только усложняется: количеством карточек" +
      "на поле, количеством одинаковых карточек, уменьшением времени раунда.",
    image: ImageStepSecond
  },
  {
    title: "Мотивация для игры",
    description:
      "В каждом раунде есть лимит на открытие карточек, созданный для облегчения" +
      " игры и быстрого прохождения раунда. Плюсом, во время игры тебе будут" +
      " встречаться разные препятствия и приятные бонусы.",
    image: ImageStepThird
  },
  {
    title: "Супер-раунды",
    description:
      "За успешное прохождение 2 раундов подряд тебе открывается супер-раунд," +
      " в которой ты можешь заработать еще больше коинов и потренироваться перед сложными раундами.",
    image: ImageStepFourth
  }
];
