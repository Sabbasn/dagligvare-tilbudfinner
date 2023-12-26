export class StoreService {

	getAvailableStores() {
		const availableStores: Store[] = [
			{
				name: "Coop Extra",
				imageAddress:
					"https://coop.papirfly.no/readimage.aspx/asset.png?pubid=NFVq0lSTME7vAo3C3unigA&quality=2",
			},
			{
				name: "Kiwi",
				imageAddress:
					"https://image-transformer-api.tjek.com/?u=s3%3A%2F%2Fsgn-prd-assets%2Fuploads%2F0YRfouY-o3ojUYedaqBbZ&w=1000&s=0c2b5222a87f58d70774e2706355d34b",
			},
			{
				name: "Meny",
				imageAddress:
					"https://play-lh.googleusercontent.com/j6cazLGXUamEDfRpFvCtbvXzQOZ9hlty8M3a8a0xG5bhQ2uW6X0gCt5QUuNqs8tjL6M=w600-h300-pc0xffffff-pd",
			},
		]	
		return availableStores
	}
}

