/* export const photos = [
    { src: '/images/cat.jpg' },
    { src: '/images/confused-guy.jpg' },
    { src: '/images/laugh.jpg' },
    { src: '/images/littleGirl.png' },
    { src: '/images/max.jpg' },
    { src: '/images/Michael.jpg' },
    { src: '/images/RickDalton.jpg '},
    { src: '/images/Toddler.jpg' },
    { src: '/images/trump.jpg' },
    { src: '/images/face.jpg' },
    { src: '/images/pg.jpg' },
    { src: '/images/dc5.png' }
    
  ]; */
 

  

import React, { useState, useEffect } from "react";

function Fetch() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

return templates;

}


