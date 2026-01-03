import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        <h1 className="text-3xl font-semibold">Rouplo</h1>
        <p className="text-neutral-600">
          Generate a walking loop from anywhere.
        </p>
        <Map />
      </div>
    </main>
  );
}
