import { categoriesDictionary } from "./utils/categoriesDictionary";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      {categoriesDictionary["edition"]()}
      {categoriesDictionary["masterclass"]()}
      {categoriesDictionary["artistic-residence"]()}
      {categoriesDictionary["business-workshop"]()}
      {categoriesDictionary["creative-talks"]()}
      {categoriesDictionary["workshop"]()}
    </main>
  );
}
