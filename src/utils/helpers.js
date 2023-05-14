import moment from 'moment';

export const getFileCount = (files) => Object.values(files).length;

export const convertDate = (date) => moment(date).format('M/DD/YYYY');
