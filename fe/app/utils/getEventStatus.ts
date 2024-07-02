export const getEventStatus = (dates: string[], isSoldOut?: boolean) => {
  const isMultipleDates = dates.length > 1;

  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  if (isMultipleDates) {
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[dates.length - 1]);

    if (endDate < currentDate) {
      return "occurred";
    } else if (startDate <= currentDate) {
      return "onGoing";
    }
  } else {
    const singleDate = new Date(dates[0]);
    if (singleDate < currentDate) {
      return "occurred";
    } else if (singleDate === currentDate) {
      return "onGoing";
    }
  }

  if (isSoldOut) {
    return "soldOut";
  } else {
    return "available";
  }
};
