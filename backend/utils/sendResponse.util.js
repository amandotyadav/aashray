const sendResponse = (res, statusCode, success, message, data) => {
  if (data) return res.status(statusCode).json({ success, message, data });
  return res.status(statusCode).json({ success, message });
};

export default sendResponse;
