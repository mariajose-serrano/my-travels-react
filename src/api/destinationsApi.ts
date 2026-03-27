import { api } from "./axiosClient";

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
      origin: "*",
    },
  });

  return (
    res.data?.query?.categorymembers?.map((m: { title: string }) => m.title) ??
    []
  );
}
