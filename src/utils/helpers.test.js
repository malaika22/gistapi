import moment from 'moment';
import { convertDate, getFileCount } from './helpers';

describe('getFileCount', () => {
  it('should return the number of files in the object', () => {
    const files = {
      file1: { name: 'file1.txt', size: 100 },
      file2: { name: 'file2.txt', size: 200 },
      file3: { name: 'file3.txt', size: 300 }
    };

    const expectedCount = 3;
    const result = getFileCount(files);

    expect(result).toEqual(expectedCount);
  });

  it('should return 0 if the files object is empty', () => {
    const files = {};
    const expectedCount = 0;

    const result = getFileCount(files);

    expect(result).toEqual(expectedCount);
  });
});

describe('convertDate', () => {
  it('should format the date correctly', () => {
    const date = new Date('2022-05-14T12:00:00Z');
    const expectedFormattedDate = moment(date).format('M/DD/YYYY');

    const result = convertDate(date);

    expect(result).toEqual(expectedFormattedDate);
  });
});
