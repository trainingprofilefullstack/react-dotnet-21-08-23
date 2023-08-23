

import { Form } from "react-router-dom"

export default function Contact() {

    const contact: any = {
        first: "Your",
        last: "Name",
        avatar: "http://placekitten.com/g/200/300",
        twitter: "your Twitter Handle",
        notes: "Some notes"
    };


    return (
        <div id="contact">
            <div>

                <img key={contact.avatar} />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>


                    )} {" "}
                    <Favorite contact = {contact}/>
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${contact.twitter}`}
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}


                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !window.confirm(
                                    "please confirm that you want to delete this record"
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                   



                </div>

            </div>

        </div>
    );
}

function Favorite(contact:any) {
    let favorite = contact.favourite;
    return (
        <Form method="post" >
            <button
            name="favorite"
            value={favorite ? "false" : "true"}
            aria-label={
                favorite
                    ? "Remove from favorites"
                    : "Add to favorites"
            }
            >
                {favorite ? "★" : "☆"}

            </button>
        </Form>
    )
}