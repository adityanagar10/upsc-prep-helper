interface Percentage {
  percentage: string;
  value: string;
}

interface Percentages {
  [key: string]: Percentage;
}

const percentages: Percentages = {
  '1': {
    percentage: '1/2',
    value: '50%',
  },
  '2': {
    percentage: '1/3',
    value: '33 1/3%',
  },
  '4': {
    percentage: '1/4',
    value: '25%',
  },
  '5': {
    percentage: '1/5',
    value: '20%',
  },
  '6': {
    percentage: '1/6',
    value: '16 2/3%',
  },
  '7': {
    percentage: '1/7',
    value: '14 2/7%',
  },
  '8': {
    percentage: '1/8',
    value: '12 1/2%',
  },
  '9': {
    percentage: '1/9',
    value: '11 1/9%',
  },
  '10': {
    percentage: '1/10',
    value: '10%',
  },
  '11': {
    percentage: '1/11',
    value: '9 1/11%',
  },
  '12': {
    percentage: '1/12',
    value: '8 1/3%',
  },
  '13': {
    percentage: '1/13',
    value: '7 9/13%',
  },
  '14': {
    percentage: '1/14',
    value: '7 1/7%',
  },
  '15': {
    percentage: '1/15',
    value: '6 2/3%',
  },
  '16': {
    percentage: '1/16',
    value: '6 1/4%',
  },
  '17': {
    percentage: '1/17',
    value: '5 15/17%',
  },
  '18': {
    percentage: '1/18',
    value: '5 5/9%',
  },
  '19': {
    percentage: '1/19',
    value: '5 5/19%',
  },
  '20': {
    percentage: '1/20',
    value: '5%',
  },
  '21': {
    percentage: '1/24',
    value: '4 1/6%',
  },
  '22': {
    percentage: '1/25',
    value: '4%',
  },
  '23': {
    percentage: '1/30',
    value: '3 1/3%',
  },
  '24': {
    percentage: '1/40',
    value: '1 1/2%',
  },
  '25': {
    percentage: '1/50',
    value: '2%',
  },
};

export default percentages;
