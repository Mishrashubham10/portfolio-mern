const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler).reject((err) => next(err));
  };
};

export { asyncHandler };