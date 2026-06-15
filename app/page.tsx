import axios from "axios";

interface Itodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function Home() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );

  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data.map((d: Itodo) => (
        <Todos key={d.id} todo={d} />
      ))}
    </div>
  );
}

function Todos({ todo }: { todo: Itodo }) {
  return (
    <div className="my-5">
      <h3>{todo.title}</h3>
      <p>{`Status: ${todo.completed ? "True" : "False"}`}</p>
    </div>
  );
}
