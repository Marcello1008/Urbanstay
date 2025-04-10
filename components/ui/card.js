
export function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">{children}</div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={className}>{children}</div>
  );
}
