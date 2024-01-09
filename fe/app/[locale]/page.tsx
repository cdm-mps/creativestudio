import { categoriesDictionary } from "@utils/categoriesDictionary";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-26vh)] items-center justify-between">
      {categoriesDictionary["edition"]()}
      {categoriesDictionary["masterclass"]()}
      {categoriesDictionary["artistic-residence"]()}
      {categoriesDictionary["business-workshop"]()}
      {categoriesDictionary["creative-talks"]()}
      {categoriesDictionary["workshop"]()}
    </main>
  );
}
