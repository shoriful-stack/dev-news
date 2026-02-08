import NewsSection from "./components/NewsSection";
import { getNews } from "@/lib/getNews";

export default async function Home() {
  const newsList = await getNews();

  return <NewsSection newsList={newsList} />;
}
