import { API } from "@/app/(site)/api"
import { buildMenu } from "@/helpers/helpers"
import { IGlobalMenu, MenuItem } from "@/interfaces/menu.props"

export async function getMenu(): Promise<IGlobalMenu[]> {
  const menu: IGlobalMenu[] = [];
  
  await Promise.all(buildMenu.map(async (m, i) => {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({
        firstCategory: i
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
  
    if (!res.ok) {
      throw new Error('Response status: ' + res.status)
    }

    menu[i] = {
      ...m,
      items: await res.json()
    }
  }))

  // console.log(menu);

  return menu;
}