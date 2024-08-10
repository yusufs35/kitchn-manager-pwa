export const getMinFromTimeStamp = (timestamp: number): number => {
	const date = new Date(timestamp * 1000);
	return date.getMinutes();
};
