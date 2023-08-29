export function capitalize(text: string) {
  const t = typeof text === "string" ? text : "";
  return t.charAt(0).toUpperCase() + text.slice(1);
}
