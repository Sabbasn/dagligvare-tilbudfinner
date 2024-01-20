export async function useGetProducts(search: string) {
	search = search.replace(" ", "_")
	const queryParams = `?search=${search}&size=30&unique=1&exclude_no_ean=1`
	const getUrl = "https://kassal.app/api/v1/products".concat(queryParams);
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

export const useGetSpecificProduct = async (ean: string) => {
	const data = await useGetProduct(ean);
	const prods = data["data"]["products"];
	var stores: { [x: string]: string }[] = [];
	prods.map((product: any) => {
		try {
			const storeName = product["store"]["name"];
			const storePrice = product["current_price"]["price"];
			if (storeName && storePrice) {
				stores.push({
					name: storeName,
					price: storePrice,
				});
			}
		} catch (error) {
			console.warn("Name is null");
		}
	});
	return stores;
};