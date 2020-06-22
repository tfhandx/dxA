import moment from "moment";

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;
  // const preOneDay = moment(new Date(now.toLocaleDateString()).getTime() + (oneDay + 1000))
  //   const preOneDay = (type) => {
  //     return moment(now.getTime()).subtract(type, "days");
  //   };
  const preOneDay = moment(new Date(now.toLocaleDateString()).getTime());
  // console.log('preOneDay', preOneDay)

  if (type === "today") {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay + 1000))];
  }

  if (type === "week") {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;
    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }
  if (type === "7days") {
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(7, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "30days") {
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(30, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "60days") {
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(60, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "90days") {
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(90, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "twoweek") {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime();
    return [moment(beginTime - (14 * oneDay - 1000)), moment(beginTime)];
  }

  const year = now.getFullYear();

  if (type === "month") {
    const month = now.getMonth();
    const nextDate = moment(now).add(1, "months");
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();
    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(
        moment(
          `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
        ).valueOf() - 1000
      )
    ];
  }
  if (type === "twomonth") {
    const month = now.getMonth();
    const nextDate = moment(now).subtract(2, "months");
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();
    return [
      moment(
        moment(
          `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
        ).valueOf() - 1000
      ),
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`)
    ];
  }
  if (type === "middleyear") {
    // const month = now.getMonth();
    // const nextDate = moment(now).subtract(0.5, 'years');
    // const nextYear = nextDate.year();
    // const nextMonth = nextDate.month();
    // return [
    //     moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    //     moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
    // ];
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(180, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "1year") {
    // const month = now.getMonth();
    // const nextDate = moment(now).subtract(1, 'years');
    // const nextYear = nextDate.year();
    // const nextMonth = nextDate.month();
    // return [
    //     moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    //     moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
    // ];
    const day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const sevenDaysAgo = moment(now.getTime()).subtract(365, "days");
    return [sevenDaysAgo, preOneDay];
  }
  if (type === "2year") {
    const month = now.getMonth();
    const nextDate = moment(now).subtract(2, "years");
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();
    return [
      moment(
        moment(
          `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
        ).valueOf() - 1000
      ),
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`)
    ];
  }

  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}
