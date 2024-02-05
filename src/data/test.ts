interface Article {
  article_number: number;
  article: string;
}

interface Articles {
  [key: string]: Article;
}

const articles: Articles = {
  '1': {
    article_number: 12,
    article: 'Definition.',
  },
  '2': {
    article_number: 13,
    article:
      'Laws inconsistent with or in derogation of the fundamental rights',
  },
  '3': {
    article_number: 14,
    article: 'Equality before law.',
  },
  '4': {
    article_number: 15,
    article:
      'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth.',
  },
  '5': {
    article_number: 16,
    article: 'Equality of opportunity in matters of public employment.',
  },
  '6': {
    article_number: 17,
    article: 'Abolition of Untouchability.',
  },
  '7': {
    article_number: 18,
    article: 'Abolition of titles.',
  },
  '8': {
    article_number: 19,
    article: 'Protection of certain rights regarding freedom of speech, etc.',
  },
  '9': {
    article_number: 20,
    article: 'Protection in respect of conviction for offences.',
  },
  '10': {
    article_number: 21,
    article: 'Protection of life and personal liberty.',
  },
  '11': {
    article_number: 22,
    article: 'Protection against arrest and detention in certain cases.',
  },
  '12': {
    article_number: 23,
    article: 'Prohibition of traffic in human beings and forced labour.',
  },
  '13': {
    article_number: 24,
    article: 'Prohibition of employment of children in factories, etc.',
  },
  '14': {
    article_number: 25,
    article:
      'Freedom of conscience and free profession, practice and propagation of religion.',
  },
  '15': {
    article_number: 26,
    article: 'Freedom to manage religious affairs.',
  },
  '16': {
    article_number: 27,
    article:
      'Freedom as to payment of taxes for promotion of any particular religion.',
  },
  '17': {
    article_number: 28,
    article:
      'Freedom as to attendance at religious instruction or religious worship in certain educational institutions.',
  },
};

export default articles;
