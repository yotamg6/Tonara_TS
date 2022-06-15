export const isNumber = (assignmentProperty: any) => {
  const allowedInput = /^[0-9\b]+$/;
  return allowedInput.test(assignmentProperty);
};
