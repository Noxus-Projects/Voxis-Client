import { LowdbSync } from "lowdb";
import Store from "@models/localStorage";

const isLoggedIn = (db: LowdbSync<Store>): boolean => {
	return db.has("expires").value() && Date.now() < db.get("expires").value();
};

export default isLoggedIn;
