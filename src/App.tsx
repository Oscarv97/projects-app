import { buttonVariants } from "@/components/ui/button";
import Header from "./components/header/header";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen space-y-20">
      <Header />
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
       Tunkable
      </h1>
      <a
        href="https://github.com/moinulmoin/vite-react-tailwind-starter"
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
      >
      </a>
    </main>
  );
}

export default App;
