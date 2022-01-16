const mockRequest = () =>
  new Promise((res) => {
    setTimeout(() => res("success"), 1500);
  });

export default mockRequest;
