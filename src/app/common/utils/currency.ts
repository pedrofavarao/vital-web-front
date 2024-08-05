type FormatCurrency = {
  amount: number;
  locale: 'pt-BR';
  currency: 'BRL';
};

export const formatCurrency = ({
  amount,
  locale,
  currency,
}: FormatCurrency): string => {
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

  return formattedAmount;
};
