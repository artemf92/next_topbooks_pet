import type { Metadata } from 'next';
import { getMenu } from '@/api/menu';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import TopPageComponent from '@/page-components/TopPageComponent/TopPageComponent';
import getProducts from '@/api/products';

export async function generateMetadata({params}: {params: Promise<{ slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) notFound();

  const metadata:Metadata = {
    title: page.metaTitle,
    description: page?.metaDescription,
  };
  return metadata;
}

// async function getCourses() {
//   const courses = await fetch(MyAPI.courses.all, {
//     method: 'GET'
//   })

//   return courses.json();
// }
// async function getMyMenu() {
//   const menu = await fetch(MyAPI.menu.primary)

//   return menu.json();
// }

export async function generateStaticParams() {
  const menu = await getMenu();

  return menu.flatMap((s) => s.items?.flatMap(c => c.pages?.map(({alias}) => ({ type: s.route.substring(1), slug: alias}))) );
}

export default async function CoursesPage({params}: {params: Promise<{ type: string, slug: string}>}): Promise<JSX.Element> {
  const { slug } = await params;
  const page = await getPage(slug);
  
  const products = page && await getProducts(page.category, 10);

  return (
    <TopPageComponent firstCategory={page?.firstCategory} page={page || null} products={products ?? []}/>
  );
}
