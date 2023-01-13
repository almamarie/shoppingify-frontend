//    a function for http requests
export const AJAX = async function (url: string, uploadData: any) {
  try {
    const fetchPro = uploadData
      ? await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : await fetch(url);

    const data = await fetchPro.json();

    if (!fetchPro.ok) throw new Error(`${data.message} (${fetchPro.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
