import type { Trip } from "../../types/Trip";

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{trip.destination}</h2>
      <p className="text-sm text-gray-600">
        {trip.startDate} – {trip.endDate}
      </p>

      {trip.imageUrl && (
        <img
          src={trip.imageUrl}
          alt={trip.destination}
          className="w-full max-w-md my-4 rounded"
        />
      )}

      {trip.details && (
        <p className="text-gray-700">{trip.details}</p>
      )}

      {trip.highlights?.length && (
        <ul className="mt-2 list-disc list-inside text-gray-700">
          {trip.highlights.map(h => <li key={h}>{h}</li>)}
        </ul>
      )}
    </div>
  );
}