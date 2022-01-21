export async function getForm(): Promise<ArrayBuffer> {
  const data = await fetch("/form.pdf");

  return data.arrayBuffer();
}
