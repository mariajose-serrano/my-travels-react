import { api } from "./axiosClient";

export async function getImageForPlace(place: string): Promise<string> {
  // Axios no puede seguir redirecciones 302 de imagen como fetch,
  // pero UNSPLASH SOURCE funciona devolviendo la URL final en la propiedad request.responseURL
  const res = await api.get(`https://source.unsplash.com/featured/?${encodeURIComponent(place)}`, {
    responseType: "blob"
  });

  return res.request.responseURL; // link final de la imagen
}

export async function getDestinationInfo(place: string) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(place)}`;
  const res = await api.get(url);
  return res.data;
}

export async function getHighlights(place: string) {
  const url = "https://en.wikipedia.org/w/api.php";

  const res = await api.get(url, {
    params: {
      action: "query",
      list: "categorymembers",
      cmtitle: `Category:Tourist_attractions_in_${place}`,
      format: "json",
      origin: "*"
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return res.data?.query?.categorymembers?.map((m: any) => m.title) ?? [];
}