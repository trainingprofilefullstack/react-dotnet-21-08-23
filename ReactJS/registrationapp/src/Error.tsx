import { useRouteError} from "react-router-dom";
import Userform from "./userform";


export default function ErrorPage () {
    const error:any = useRouteError();
    console.error(error);


    return (
        <div    id="error-page">
            <h1>Opps!</h1>
            <p>Sorry, an unexprected error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            


        </div>
    )
}