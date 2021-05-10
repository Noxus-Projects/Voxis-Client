import { LowdbSync } from "lowdb";
import Store from "@type/localStorage";

const isLoggedIn = (db: LowdbSync<Store>): boolean => {
	return db.has("expires").value() && Date.now() < db.get("expires").value();
};

export default isLoggedIn;
