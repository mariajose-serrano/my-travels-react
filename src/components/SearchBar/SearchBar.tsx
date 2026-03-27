interface Props { query: string; onQueryChange: (v: string) => void; date: string; onDateChange: (v: string) => void; }

export default function SearchBar({ query, onQueryChange, date, onDateChange }: Props) {
  return (
    <div className="flex gap-4 mb-6">
      <input value={query} onChange={e=>onQueryChange(e.target.value)} className="border p-2 rounded w-full" placeholder="Buscar destino..." />
      <input type="date" value={date} onChange={e=>onDateChange(e.target.value)} className="border p-2 rounded" />
    </div>
  );
}