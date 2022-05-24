function tryCatch<T extends () => any>(f: T, errorHandler): ReturnType<T> {
  try {
    return f();
  } catch (error) {
    return errorHandler(error);
  }
}

declare function sendEmail(): boolean;
declare function errorHandler(error);

tryCatch(sendEmail, errorHandler);

export default {};
