export function Button({ children, ...props }) {
  return <button {...props} style={{ padding: "10px", backgroundColor: "#333", color: "#fff", borderRadius: "5px" }}>{children}</button>;
}
