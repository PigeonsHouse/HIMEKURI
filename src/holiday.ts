import { MILLISECOND_OF_ONE_DAY } from "./constants";

type InfoType = {
    "name": string;
    "substitute": number;
}

type HolidayInfoType = {
    "holiday": {
        [key: string]: InfoType,
    },
    "holiday_at_week": {
        [key: string]: InfoType,
    },
    "syunbun_syubun": {
        [key: string]: InfoType,
    },
}

const holidayInfo: HolidayInfoType = {
    "holiday": {
        "1/1": {"name": "元日", "substitute": 1},
        "1/2": {"name": "休日", "substitute": 1},
        "2/11": {"name": "建国記念の日", "substitute": 1},
        "2/23": {"name": "天皇誕生日", "substitute": 1},
        "4/29": {"name": "昭和の日", "substitute": 1},
        "5/3": {"name": "憲法記念日", "substitute": 1},
        "5/4": {"name": "みどりの日", "substitute": 2},
        "5/5": {"name": "こどもの日", "substitute": 3},
        "8/11": {"name": "山の日", "substitute": 1},
        "11/3": {"name": "文化の日", "substitute": 1},
        "11/23": {"name": "勤労感謝の日", "substitute": 1},
        "12/31": {"name": "大晦日", "substitute": 1},
    },
    "holiday_at_week": {
        "1/2/1": {"name": "成人の日", "substitute": 1},
        "7/3/1": {"name": "海の日", "substitute": 1},
        "9/3/1": {"name": "敬老の日", "substitute": 1},
        "10/2/1": {"name": "スポーツの日", "substitute": 1},
    },
    "syunbun_syubun": {
        "2020/3/20": {"name": "春分の日", "substitute": 1},
        "2021/3/20": {"name": "春分の日", "substitute": 1},
        "2022/3/21": {"name": "春分の日", "substitute": 1},
        "2023/3/21": {"name": "春分の日", "substitute": 1},
        "2024/3/20": {"name": "春分の日", "substitute": 1},
        "2025/3/20": {"name": "春分の日", "substitute": 1},
        "2026/3/20": {"name": "春分の日", "substitute": 1},
        "2027/3/21": {"name": "春分の日", "substitute": 1},
        "2028/3/20": {"name": "春分の日", "substitute": 1},
        "2029/3/20": {"name": "春分の日", "substitute": 1},
        "2030/3/20": {"name": "春分の日", "substitute": 1},
        "2031/3/21": {"name": "春分の日", "substitute": 1},
        "2032/3/20": {"name": "春分の日", "substitute": 1},
        "2033/3/20": {"name": "春分の日", "substitute": 1},
        "2034/3/20": {"name": "春分の日", "substitute": 1},
        "2035/3/21": {"name": "春分の日", "substitute": 1},
        "2036/3/20": {"name": "春分の日", "substitute": 1},
        "2037/3/20": {"name": "春分の日", "substitute": 1},
        "2038/3/20": {"name": "春分の日", "substitute": 1},
        "2039/3/21": {"name": "春分の日", "substitute": 1},
        "2040/3/20": {"name": "春分の日", "substitute": 1},
        "2041/3/20": {"name": "春分の日", "substitute": 1},
        "2042/3/20": {"name": "春分の日", "substitute": 1},
        "2043/3/21": {"name": "春分の日", "substitute": 1},
        "2044/3/20": {"name": "春分の日", "substitute": 1},
        "2045/3/20": {"name": "春分の日", "substitute": 1},
        "2046/3/20": {"name": "春分の日", "substitute": 1},
        "2047/3/21": {"name": "春分の日", "substitute": 1},
        "2048/3/20": {"name": "春分の日", "substitute": 1},
        "2049/3/20": {"name": "春分の日", "substitute": 1},
        "2050/3/20": {"name": "春分の日", "substitute": 1},
        "2020/9/22": {"name": "秋分の日", "substitute": 1},
        "2021/9/23": {"name": "秋分の日", "substitute": 1},
        "2022/9/23": {"name": "秋分の日", "substitute": 1},
        "2023/9/23": {"name": "秋分の日", "substitute": 1},
        "2024/9/22": {"name": "秋分の日", "substitute": 1},
        "2025/9/23": {"name": "秋分の日", "substitute": 1},
        "2026/9/23": {"name": "秋分の日", "substitute": 1},
        "2027/9/23": {"name": "秋分の日", "substitute": 1},
        "2028/9/22": {"name": "秋分の日", "substitute": 1},
        "2029/9/23": {"name": "秋分の日", "substitute": 1},
        "2030/9/23": {"name": "秋分の日", "substitute": 1},
        "2031/9/23": {"name": "秋分の日", "substitute": 1},
        "2032/9/22": {"name": "秋分の日", "substitute": 1},
        "2033/9/23": {"name": "秋分の日", "substitute": 1},
        "2034/9/23": {"name": "秋分の日", "substitute": 1},
        "2035/9/23": {"name": "秋分の日", "substitute": 1},
        "2036/9/22": {"name": "秋分の日", "substitute": 1},
        "2037/9/23": {"name": "秋分の日", "substitute": 1},
        "2038/9/23": {"name": "秋分の日", "substitute": 1},
        "2039/9/23": {"name": "秋分の日", "substitute": 1},
        "2040/9/22": {"name": "秋分の日", "substitute": 1},
        "2041/9/23": {"name": "秋分の日", "substitute": 1},
        "2042/9/23": {"name": "秋分の日", "substitute": 1},
        "2043/9/23": {"name": "秋分の日", "substitute": 1},
        "2044/9/22": {"name": "秋分の日", "substitute": 1},
        "2045/9/22": {"name": "秋分の日", "substitute": 1},
        "2046/9/23": {"name": "秋分の日", "substitute": 1},
        "2047/9/23": {"name": "秋分の日", "substitute": 1},
        "2048/9/22": {"name": "秋分の日", "substitute": 1},
        "2049/9/22": {"name": "秋分の日", "substitute": 1},
        "2050/9/23": {"name": "秋分の日", "substitute": 1},
    },
};

const getWeekNumber = (targetDate: Date) => {
    return Math.ceil(targetDate.getDate() / 7);
}

const _getHoliday = (targetDate: Date) => {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth()+1;
    const date = targetDate.getDate();
    const weekNumber = getWeekNumber(targetDate);
    const weekday = targetDate.getDay();
    
    const atWeekKey = `${month}/${weekNumber}/${weekday}`;
    const atWeek = holidayInfo.holiday_at_week[atWeekKey];
    if (atWeek) {
        return atWeek;
    }

    const holidayKey = `${month}/${date}`;
    const holiday = holidayInfo.holiday[holidayKey];
    if (holiday) {
        return holiday;
    }
    
    const syunbunKey = `${year}/${month}/${date}`;
    const syunbun = holidayInfo.syunbun_syubun[syunbunKey];
    if (syunbun) {
        return syunbun;
    }
    return null;
};

export const getHoliday = (targetDate: Date) => {
    const holidayInfo = _getHoliday(targetDate);
    if (holidayInfo) {
        return holidayInfo;
    } else if (targetDate.getDay() === 0) {
        return null;
    }

    const previousDate = new Date(targetDate.valueOf() - MILLISECOND_OF_ONE_DAY);
    const previousHolidayInfo = _getHoliday(previousDate);
    let holiday: InfoType | null;
    if (previousHolidayInfo) {
        const targetDay = targetDate.getDay();
        if (targetDay <= previousHolidayInfo.substitute) {
            // const subDate = new Date(targetDate.valueOf() - MILLISECOND_OF_ONE_DAY * targetDay);
            holiday = {
                // name: `${_getHoliday(subDate)?.name}の振替休日`,
                name: "振替休日",
                substitute: 1,
            };
        } else {
            holiday = null;
        }
    } else {
        return null;
    }
    if (holiday === null) {
        const nextDate = new Date(targetDate.valueOf() + MILLISECOND_OF_ONE_DAY);
        if (_getHoliday(nextDate)) {
            holiday = {
                name: "国民の休日",
                substitute: 1,
            }
        }
    }
    return holiday
}
