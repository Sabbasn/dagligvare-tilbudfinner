export async function useGetProducts(search: string) {
	const getUrl = "https://kassal.app/api/v1/products" + `?search=${search}&size=30`;
	const apiKey = import.meta.env.VITE_KASSALAPP_API_KEY;
	const headers = { Authorization: "Bearer " + apiKey, search: search };
	let productsData = await fetch(getUrl, {headers})
	let productsJson = await productsData.json()
	return productsJson
}

export async function useGetProduct(ean: string) {
	const getUrl = "https://kassal.app/api/v1/products/ean/" + ean;
	const apiKey = import.meta.env.VITE_KASSALAPP_API_KEY;
	const headers = { Authorization: "Bearer " + apiKey };
	let productsData = await fetch(getUrl, {headers})
	let productsJson = await productsData.json()
	return productsJson
}