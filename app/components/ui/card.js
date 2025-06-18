export function Card({ children }) {
  return <div style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "10px" }}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
