function imageToPage64(file: File): Promise<string> {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const data = new Promise<string>((resolve, reject) => {
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
  });

  return data;
}

export { imageToPage64 };