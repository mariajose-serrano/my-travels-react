import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDestinationInfo, getHighlights } from "../api/destinationsApi";
import { addTrip } from "../stores/tripSlice";

export default function AddTrip() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const destination = form.get("destination") as string;
    const [info, highlights] = await Promise.all([
      getDestinationInfo(destination),
      getHighlights(destination),
    ]);

    const imageUrl =
      info?.thumbnail?.source ||
      info?.originalimage?.source ||
      `https://picsum.photos/seed/${encodeURIComponent(destination)}/1200/800`;

    dispatch(
      addTrip({
        id: crypto.randomUUID(),
        destination,
        startDate: form.get("startDate") as string,
        endDate: form.get("endDate") as string,
        notes: form.get("notes") as string,
        imageUrl,
        details: info?.extract ?? "No hay información disponible",
        highlights: (highlights ?? []),
      }),
    );

    navigate("/");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Añadir Viaje</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="destination"
          className="border p-2 rounded"
          placeholder="Destino"
          required
        />
        <input
          name="startDate"
          type="date"
          className="border p-2 rounded"
          required
        />
        <input
          name="endDate"
          type="date"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="notes"
          className="border p-2 rounded"
          placeholder="Notas"
        />
        <button className="bg-blue-600 text-white p-3 rounded shadow hover:bg-blue-700">
          Guardar
        </button>
      </form>
    </div>
  );
}