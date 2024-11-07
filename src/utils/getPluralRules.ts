const getPluralRules = new Intl.PluralRules("ru-RU");

export const getPluralOfNumber = (
  number: number,
  plurals: Partial<Record<Intl.LDMLPluralRule, string>>
) => plurals[getPluralRules.select(number)] ?? plurals.other;
