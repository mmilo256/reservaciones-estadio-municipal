import { useCallback } from "react";
import dayjs from "dayjs";

const useCalendar = (currentWeek, setCurrentWeek) => {
    const getWeekDays = (startDate) => {
        return Array.from({ length: 7 }).map((_, index) =>
            dayjs(startDate).add(index, "day")
        );
    };

    const onNextWeek = useCallback(() => {
        setCurrentWeek(dayjs(currentWeek).add(1, "week").toDate());
    }, [currentWeek, setCurrentWeek]);

    const onPrevWeek = useCallback(() => {
        setCurrentWeek(dayjs(currentWeek).subtract(1, "week").toDate());
    }, [currentWeek, setCurrentWeek]);

    const onToday = useCallback(() => {
        setCurrentWeek(dayjs().weekday(0).toDate());
    }, [setCurrentWeek]);

    return {
        currentWeek,
        weekDays: getWeekDays(currentWeek),
        onNextWeek,
        onPrevWeek,
        onToday
    };
};

export default useCalendar;
