export const handler = async (event:any) => {
  return {
    "message": "hello world",
    "from": event.sender || "anonymous"
  }
};
