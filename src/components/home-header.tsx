import Link from "next/link";
import Card from "../ui/card";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white/60 backdrop-blur-md">
      <Card className="rounded-b-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center container mx-auto space-y-4 sm:space-y-0">
          <Link
            href="/"
            className="text-2xl font-bold text-yellow-900 sm:text-3xl"
          >
            Saborify
          </Link>
        </div>
      </Card>
    </header>
  );
}
