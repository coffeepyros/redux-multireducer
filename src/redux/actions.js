export function addUser(data) {
  return {
    type: "ADD_USER",
    payload: data,
  };
}
export function addBook(data) {
  return {
    type: "ADD_BOOK",
    payload: data,
  };
}
