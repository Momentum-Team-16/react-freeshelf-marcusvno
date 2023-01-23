import "./App.css";
import React, { useState } from "react";
import placeholder from "./no-cover-image.png";


const fixBrokenImage = (e) => { e.target.src = placeholder; }


function App({ bookData }) {
    return (
        <div>
            <h1>Freeshelf</h1>
            <div className="grid">
            {bookData.map((data) => (
                <div className="wrapper">
                    <div className="imageLoc">
                        <img src={data.coverImageUrl} alt="cover" onError={fixBrokenImage}/>
                    </div>
                    <div className="bookInfo">
                        <ul>
                            <li><h3>{data.title}</h3></li>
                            <li className="author">by {data.author}</li>
                            <li><p>{data.shortDescription}</p></li>
                            <li><ExpandedInfo 
                                url={data.url} 
                                publisher={data.publisher} 
                                pubDate={data.publicationDate} 
                                detailedDesc={data.detailedDescription}/>
                            </li>
                        </ul>
                            
                    </div>
                </div>
                
            ))}
            <footer></footer>
            </div>
        </div>
    );
}


function ExpandedInfo({url, publisher, pubDate, detailedDesc}){
    const [isExpanded, setExpansion] = useState(false);
    const buttonName = isExpanded ? "Less" : "More";

    return (
        <div>
            <button onClick={() => setExpansion(!isExpanded)}><strong>{buttonName} Info</strong></button>
            {isExpanded && (
                <div className="expandedBox">
                    <h4>From the Back Cover:</h4>
                    <p className="longDesc">{detailedDesc}</p>
                    {publisher ? <p><strong>Publisher:</strong> {publisher}</p> : null}
                    {pubDate ? <p><strong>Published:</strong> {pubDate}</p> : null}
                    {url ? <a href={url} target="_blank" rel="noreferrer"><button><strong>Get Book</strong></button></a> : null}

                </div>
                
            )}
        </div>
        
    )
    

}


export default App;
