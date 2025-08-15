import Card from "../ui/card";

export default function HomeHeader() {
  return (
    <header className="bg-white">
      <Card className="rounded-b-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center justify-center container mx-auto space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold text-yellow-900 sm:text-4xl">
            Saborify
          </h1>
        </div>
      </Card>
    </header>
  );
}
