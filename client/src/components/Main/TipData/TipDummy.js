export const TipDummy = [
  {
    id: 1,
    type: 'Tags',
    body: ['[tag]'],
  },
  {
    id: 2,
    type: 'Exact',
    body: ['words here'],
  },
  {
    id: 3,
    type: 'Author',
    body: ['user:1234', 'user:me (yours)'],
  },
  {
    id: 4,
    type: 'Score',
    body: ['score:3 (3+)', 'score:0 (none)'],
  },
  {
    id: 5,
    type: 'Answers',
    body: [
      'answers:3 (3+)',
      'answers:0 (none)',
      'isaccepted:yes',
      'hasaccepted:no',
      'inquestion:1234',
    ],
  },
  {
    id: 6,
    type: 'Views',
    body: ['views:250'],
  },
  {
    id: 7,
    type: 'Code',
    body: ['code: if (foo != bar)'],
  },
  {
    id: 8,
    type: 'Sections',
    body: ['title:apples', 'body: apples oranges'],
  },
  {
    id: 9,
    type: 'URL',
    body: ['url: *.example.com'],
  },
  {
    id: 10,
    type: 'Saves',
    body: ['in:saves'],
  },
  {
    id: 11,
    type: 'Status',
    body: ['closed:yes', 'duplicate:no', 'migrated:no', 'wiki:no'],
  },
  {
    id: 12,
    type: 'Types',
    body: ['is:question', 'is:answer', 'is:article'],
  },
  {
    id: 13,
    type: 'Exclude',
    body: ['-[tag]', '-apples'],
  },
  {
    id: 14,
    type: 'Collective',
    body: ['collective: Name'],
  },
];
