import Store from "@models/localStorage";
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const createDb = (): low.LowdbSync<Store> => {
	const adapter = new LocalStorage<Store>("db");
	const db = low(adapter);
	db.defaults({ channels: [] }).write();
	return db;
};

export default createDb;
