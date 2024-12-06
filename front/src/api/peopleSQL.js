const BASE_URL = "http://localhost:8080";

export const getPeopleSQL = async () => {
  const response = await fetch(`${BASE_URL}/personSQL`);
  return response.json();
}

export const addPersonSQL = async(person) => {
	const response = await fetch(`${BASE_URL}/personSQL`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(person),
	});
	return response.json();
}

export const getPeopleNoSQL = async () => {
	const response = await fetch(`${BASE_URL}/personNoSQL`);
	return response.json();
}

export const addPersonNoSQL = async(person) => {
	const response = await fetch(`${BASE_URL}/personNoSQL`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(person),
	});
	return response.json();
}