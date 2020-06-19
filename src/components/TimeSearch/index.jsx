import React, {
  useContext,
  useMemo,
  useEffect,
  useState,
  useRef,
  useCallback
} from "react";
// import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import "antd-mobile/dist/antd-mobile.css";
import enUS from "antd-mobile/lib/calendar/locale/en_US";
import zhCN from "antd-mobile/lib/calendar/locale/zh_CN";
import { DatePicker } from "antd";
import moment from "moment";
import { Calendar, List, Switch } from "antd-mobile";
import { useWindowViewPortChange } from "@/utils/utils";
import { getTimeDistance } from "./utils/utils";
import "./index.less";

const { RangePicker } = DatePicker;
const oneDay = 1000 * 60 * 60 * 24 - 1;
const originbodyScrollY = document.getElementsByTagName("body")[0].style
  .overflowY;
const extra = {
  "2017/07/15": { info: "Disable", disable: true }
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = {
  info: "Disable",
  disable: true
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = {
  info: "Disable",
  disable: true
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = {
  info: "Disable",
  disable: true
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = {
  info: "Disable",
  disable: true
};
Object.keys(extra).forEach(key => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});
const TimeSearch = ({
  // rangePickerValue,
  className = "",
  options = [],
  sentData = () => {
    console.log("sentdata");
  }
}) => {
  const [rangePickerValue, setRangePickerValue] = useState(
    getTimeDistance("30days")
  );
  const [show, setShow] = useState(false);
  const [steten, setEn] = useState(false);
  const [config, setConfig] = useState({});
  const [pcflag, setFlag] = useState(false);
  const [startTime, setStartTime] = useState(getTimeDistance("30days")[0]);
  const [endTime, setEndTime] = useState(getTimeDistance("30days")[1]);
  const offsetOfWindow = useWindowViewPortChange();
  useEffect(() => {
    sentData(
      offsetOfWindow > 1000
        ? [
          rangePickerValue[0],
          pcflag
            ? rangePickerValue[1]
              .subtract(1, "days")
              .add(oneDay, "milliseconds")
            : rangePickerValue[1].add(oneDay, "milliseconds")
        ]
        : [moment(startTime), moment(endTime).add(oneDay, "milliseconds")]
    );
  }, [rangePickerValue,
    startTime, endTime
  ]);
  // useEffect(() => {
  //     sentData(offsetOfWindow > 750 ? rangePickerValue : [moment(startTime), moment(endTime)]);
  // }, [])
  const isActive = type => {
    const value = getTimeDistance(type);

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return "";
    }

    if (
      rangePickerValue[0].isSame(value[0], "day") &&
      rangePickerValue[1].isSame(value[1], "day")
    ) {
      return "currentDate";
      // return ''
    }

    return "";
  };
  const selectDate = type => {
    setFlag(false);
    setRangePickerValue(getTimeDistance(type));
  };
  const selectDateMobile = (type, select) => {
    const currentTimeDistance = getTimeDistance(type);
    setRangePickerValue(currentTimeDistance);
    select(new Date(currentTimeDistance[0]), new Date(currentTimeDistance[1]));
  };
  const changeLanguage = () => {
    setEn(steten => !steten);
  };
  const renderBtn = (zh, en, config = {}) => {
    config.locale = steten ? enUS : zhCN;

    return (
      <List.Item
        arrow="horizontal"
        extra="点击选择"
        onClick={() => {
          document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          setShow(true);
          setConfig(config);
        }}
      >
        {steten ? en : zh}
      </List.Item>
    );
  };
  const onselect = (date, state) => {
    return [date, new Date(+now - 604800000)];
  };
  const onSelectHasDisableDate = dates => {
    console.warn("onSelectHasDisableDate", dates);
  };

  const onConfirm = (startTime, endTime) => {
    const oneDay = 1000 * 60 * 60 * 24;
    // endTime = moment(
    //   new Date(new Date(endTime).toLocaleDateString()).getTime() +
    //     (oneDay + 1000)
    // );
    setShow(false);
    setStartTime(moment(startTime));
    setEndTime(moment(endTime));
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = originbodyScrollY;
  };
  const onCancel = () => {
    document.getElementsByTagName(
      "body"
    )[0].style.overflowY = originbodyScrollY;
    setShow(false);
    setStartTime(startTime);
    setEndTime(endTime);
  };
  const open = () => {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    setShow(!show);
  };
  const getDateExtra = date => extra[+date];
  const renderShortcut = select => {
    return (
      <div className="salesExtra">
        {Array.isArray(options) && options.length > 0 ?
          options.map(item => {
            return (
              <a
                key={`${item.title}-${item.duration}`}
                className={isActive("today")}
                onClick={() => selectDate("today")}
              >
                {item.title || ""}
              </a>
            );
          })
          :
          [<a
            key={`${"最近七天"}-${"7days"}`}
            className={isActive("7days")}
            onClick={() => {
              selectDateMobile("7days", select);
            }}
          >
            最近七天
              </a>,
          <a
            key={`${"30days"}-${"最近30天"}`}
            className={isActive("30days")}
            onClick={() => {
              selectDateMobile("30days", select);
            }}
          >
            最近30天
              </a>,
          <a
            key={`${"60days"}-${"最近60天"}`}
            className={isActive("60days")}
            onClick={() => {
              selectDateMobile("60days", select);
            }}
          >
            最近60天
              </a>,
          <a
            key={`${"middleyear"}-${"最近半年"}`}
            className={isActive("middleyear")}
            onClick={() => {
              selectDateMobile("middleyear", select);
            }}
          >
            最近半年
              </a>,
          <a
            key={`${"1year"}-${"最近一年"}`}
            className={isActive("1year")}
            onClick={() => selectDateMobile("1year", select)}
          >
            最近一年
              </a>
          ]}
      </div>
    );
  };

  return (
    <React.Fragment>
      {offsetOfWindow > 750 ? (
        <div className={`${"salesExtraWrap"} ${className}`}>
          <div className="salesExtra">
            {Array.isArray(options) && options.length > 0
              ? options.map(item => {
                return (
                  <a
                    key={`${item.title}-${item.duration}`}
                    className={isActive("today")}
                    onClick={() => selectDate("today")}
                  >
                    {item.title || ""}
                  </a>
                );
              })
              : [
                <a
                  key={`${"最近七天"}-${"7days"}`}
                  className={isActive("7days")}
                  onClick={() => selectDate("7days")}
                >
                  最近七天
                  </a>,
                <a
                  key={`${"30days"}-${"最近30天"}`}
                  className={isActive("30days")}
                  onClick={() => selectDate("30days")}
                >
                  最近30天
                  </a>,
                <a
                  key={`${"60days"}-${"最近60天"}`}
                  className={isActive("60days")}
                  onClick={() => selectDate("60days")}
                >
                  最近60天
                  </a>,
                <a
                  key={`${"middleyear"}-${"最近半年"}`}
                  className={isActive("middleyear")}
                  onClick={() => selectDate("middleyear")}
                >
                  最近半年
                  </a>,
                <a
                  key={`${"1year"}-${"最近一年"}`}
                  className={isActive("1year")}
                  onClick={() => selectDate("1year")}
                >
                  最近一年
                  </a>
              ]}
          </div>
          <RangePicker
            value={rangePickerValue}
            format="YYYY-MM-DD"
            onChange={value => {
              setFlag(true);
              setRangePickerValue(value);
            }}
            style={{
              width: 256
            }}
          />
        </div>
      ) : (
          <React.Fragment>
            <List className="calendar-list" style={{ backgroundColor: "white" }}>
              {/* <List.Item className="item" extra={<Switch className="right" checked={!steten} onChange={changeLanguage} />}>
                            {steten ? 'Chinese' : '中文'}
                        </List.Item> */}

              {renderBtn("选择日期区间", "Select Date Range (Shortcut)", {
                showShortcut: true,
                onSelect: (date, state) => {
                  setRangePickerValue([]);
                  console.log();
                  // return [date, new Date(+now - 604800000)];
                }
              })}
              {startTime && (
                <List.Item>
                  开始:{" "}
                  {// moment(new Date(startTime).toLocaleString()).format()
                    startTime.format("YYYY-MM-DD")}
                </List.Item>
              )}
              {endTime && (
                <List.Item>
                  结束:{" "}
                  {// moment(new Date(endTime).toLocaleString()).format()
                    // endTime.subtract(1, "days").format("YYYY-MM-DD")}
                    endTime.format("YYYY-MM-DD")}
                </List.Item>
              )}
            </List>
            <Calendar
              {...config}
              visible={show}
              onCancel={onCancel}
              onConfirm={onConfirm}
              onSelectHasDisableDate={onSelectHasDisableDate}
              // getDateExtra={getDateExtra}
              renderShortcut={renderShortcut}
              // defaultDate={now}
              minDate={new Date(+now - 518400000000)}
              maxDate={new Date(+now + 51840000000000)}
            // onCancel={onCancel}
            />
          </React.Fragment>
        )}
    </React.Fragment>
  );
};
export default TimeSearch;
