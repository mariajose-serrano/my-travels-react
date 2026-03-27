import { useState } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../stores/store";

import SearchBar from "../components/SearchBar/SearchBar";
import TripCard from "../components/TripCard/TripCard";

export default function Home() {
  const trips = useSelector((state: RootState) => state.trips.list);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  const filtered = trips.filter(t =>
    t.destination.toLowerCase().includes(query.toLowerCase()) &&
    (!date || (t.startDate <= date && t.endDate >= date))
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mis Viajes</h1>

      <SearchBar query={query} onQueryChange={setQuery} date={date} onDateChange={setDate} />

      <div className="grid gap-4">
        {filtered.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}