import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello Universe, I'm Nick Franco</Title>
      <h1>Hello universe!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://www.linkedin.com/in/itnf/" target="_blank">
        </a>{" "}
      </p>
    </main>
  );
}
