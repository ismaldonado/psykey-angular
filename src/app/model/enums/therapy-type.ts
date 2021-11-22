export const therapyTypeList = [
  { value: 'counseling', description: 'T. Individual' },
  { value: 'couple', description: 'T. Pareja' },
  { value: 'family', description: 'T. Familia' }
];

export const therapyTypeMap = new Map<string, string>()
  .set('counseling', 'T. Individual')
  .set('couple', 'T. Pareja')
  .set('family', 'T. Familia');
