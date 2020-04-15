import React from 'react';


const ArtistList = props =>
 
<table style={{padding:'10px',margin:'5px',border:'2px solid grey'}}>
{/* <Row style={{backgroundColor:'white' ,padding:'10px', margin:'12px',display:'grid'  }}> */}

    <tr>
        <th>ArtistName</th>
        <th>ArtistId</th>
        <th>CollectionCensoredName</th>
        <th>CollectionId</th>
        <th>trackName</th>
        <th>Country</th>
    </tr>

    
  {props.results.map((result,index) =>
//    <tr style={{backgroundColor:'grey',
//    display:'block', padding:'2px',margin:'3px',
//    boxShadow:'1px black'}} key={index} span={18} push={6}>
    <tr key={index}>
        <td>{result.artistName}</td>
        <td>{result.artistId}</td>
        <td>{result.collectionCensoredName}</td>
        <td>{result.collectionId}</td>
        <td>{result.trackName}</td>
        <td>{result.country}</td>
    </tr>
    //  ArtistName:{result.artistName}
    //  ArtistId:{result.artistId}
    // CollectionCensoredName:{result.CollectionCensoredName};
    // CollectionId:{result.collectionId}
    // trackName:{result.trackName}
    // Country:{result.country}
    

  )}
 
 </table> 
 


        
export default ArtistList;