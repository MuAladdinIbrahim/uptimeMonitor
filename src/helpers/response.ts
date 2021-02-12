export const success = (message: any, results: any, statusCode: any) => {
  return {
    message,
    error: false,
    code: statusCode,
    results,
  };
};

export const error = (message: any, statusCode: number) => {
  return {
    message: message?.message|| message,
    code: statusCode,
    error: true,
  };
};

export const validation = (errors: any) => {
  return {
    message: errors,
    error: true,
    code: 422,
    results: null,
  };
};
