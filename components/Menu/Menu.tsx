import { getMenu } from "@/api/menu";
import MenuClient from "./MenuClient";

export default async function Menu(): Promise<JSX.Element> {
  const menu = await getMenu();

  return <MenuClient menu={menu}/>;
}