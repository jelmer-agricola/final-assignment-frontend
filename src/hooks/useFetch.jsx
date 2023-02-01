import {useEffect, useRef, useState} from "react";
import axios from "axios";

const useFetch = (dataUrl) => {
// Set initial state variables

    const [data, setData] = useState([]);
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const controllerRef = useRef(false);

    // Run the effect on mount
    useEffect(() => {
            let isMounted = true;

            //    Define cancellation signal
            const controller = new AbortController();
            const {signal} = controller;

            // Fetch data function declaration
            const fetchData = async (url) => {
                setIsLoading(true);
                try {
                    //    Fetch the response
                    setTimeout(async () => {
                        const response = await axios.get(url, {
                            signal
                        })
                            // Catch cancellation error (couldn't be fetched in the catch block)
                            .catch(e => e.code === "ERR_Canceled" && console.log("Fetch request is unfortunately cancelled"));
                        // Set the Data
                        if (isMounted) {
                            setData(response.data);
                            setCatchError(null);
                        }
                    }, 2000)
                } catch (err) {
                    // Catch the error
                    if (isMounted) {
                        setCatchError(err.message)
                        setData([]);
                    }
                } finally {
                    //    Set Loading to initial state
                    isMounted && setTimeout(() => setIsLoading(false), 2000);
                }
            }
        //    Call the Fetch data function
        void fetchData( dataUrl)

        // cleanup the cancellation
        return function cleanUp() {
            console.log('Clean up function');
            isMounted = false;
            controller.abort();
        };
        }, [dataUrl]);
    return {data, catchError, isLoading};
}

export default useFetch;

