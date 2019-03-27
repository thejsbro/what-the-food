import moment from 'moment';

export const lastMonday = () => moment().startOf('isoWeek');
export const nextSunday = () => moment().endOf('isoWeek');