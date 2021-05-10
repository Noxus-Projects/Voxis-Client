import Store from "@type/localStorage";
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const createDb = (): low.LowdbSync<Store> => {
	const adapter = new LocalStorage<Store>("db");
	return low(adapter);
};

export default createDb;
