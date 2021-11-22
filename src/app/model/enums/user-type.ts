export const userTypeList = [
  { value: 'patient', description: 'Paciente' },
  { value: 'employee', description: 'Empleado' },
  { value: 'secretary', description: 'Administrativo' }
];

export const userTypeMap = new Map<string, string>()
  .set('patient', 'Paciente')
  .set('employee', 'Empleado')
  .set('secretary', 'Administrativo');
