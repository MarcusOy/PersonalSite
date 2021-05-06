import { Store } from "pullstate";
import { useEffect, useState } from "react";

export interface IMODataStore {
    currentIndex: number;
    isMenuAccessedOnce: boolean;
}
const initialStoreData: IMODataStore = {
    currentIndex: 0,
    isMenuAccessedOnce: false
};
export const useDataStoreLoader = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let runNow;
        (runNow = async function() {
            try {
                await DataStore.update(s => {
                    s.isMenuAccessedOnce = window.localStorage.getItem("isMenuAccessedOnce") == "yes"
                })
            } catch(e) {
                setError(e.message)
            }
            setLoading(false)
        })();

    }, [])

    return {loading, error}
}
const DataStore = new Store(initialStoreData);

export default DataStore;

