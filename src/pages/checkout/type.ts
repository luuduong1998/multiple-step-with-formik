export type checkoutFormModelProps = {
  formId: string;
  formField: formFieldProps;
};

export type formFieldProps = Record<
  string,
  {
    name: string;
    label: string;
    requiredErrorMsg?: string;
    invalidErrorMsg?: string;
  }
>;
