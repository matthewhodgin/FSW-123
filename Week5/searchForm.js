import { useState, useEffect } from "react";

export default function searchForm({initalQuery}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    const fetchImage = (query = initialQuery) => {
        
        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        console.log("Encoded query: ", encodedQuery);
        // API KEY Giphy
        const myKey = "A0HTcSRenI6BnA35DuaKOvCqcF7yCrNI";
    }
}

<div>
<img src={imgSrc} alt={alt} />
</div>

const [imgSrc, setImgSrc] = useState("");
const [alt, setAlt] = useState("");

encodeURIComponent(uriComponent);


