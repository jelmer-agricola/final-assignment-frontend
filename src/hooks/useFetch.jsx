import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (dataUrl, method = 'GET', params = {}, dataObject = {}) => {
// Set initial state variables

    const [data, setData] = useState([]);
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // const controllerRef = useRef(false); bovenaan useRef indien wel gebruiken

    // Run the effect on mount
    useEffect(() => {
        let isMounted = true;

        //    Define cancellation signal
        const controller = new AbortController();
        const {signal} = controller;

        let response;

        // Fetch data function declaration
        const fetchData = async () => {
            setIsLoading(true);
            try {
                //    Fetch the respons
                if (method === 'GET') {
                    response = await axios.get(dataUrl, {
                        signal,
                        params: params,
                    });
                } else if (method === 'POST') {
                    response = await axios.post(dataUrl, dataObject, {
                        signal,
                        params: params,
                    });
                }
                if (response.code === "ERR_canceled") {
                    console.log("Fetch request is unfortunately cancelled")
                }

                // Set the Data
                if (isMounted) {
                    setData(response.data);
                    setCatchError(null);
                }
            } catch (err) {
                // Catch the error
                if (isMounted) {
                    setCatchError(err.response.data.message);

                    setData([]);
                }
            } finally {
                //    Set Loading to initial state
                isMounted && setIsLoading(false);
            }
        }
        //    Call the Fetch data function
        void fetchData()

        // cleanup the cancellation
        return function cleanUp() {
            console.log('Clean up function');
            isMounted = false;
            controller.abort();
        };
    }, []);

    return {data, catchError, isLoading};
}

export default useFetch;

