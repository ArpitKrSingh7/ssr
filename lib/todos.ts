import axios from "axios";
export async function getTodos() {
  return await axios("https://jsonplaceholder.typicode.com/todos");
}
