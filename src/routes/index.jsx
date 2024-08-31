import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="w-screen">
      <section className="w-screen h-screen  "></section>
    </main>
  );
}
