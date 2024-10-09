export default async function getFood() {
  return fetch(
    "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json"
  )
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
