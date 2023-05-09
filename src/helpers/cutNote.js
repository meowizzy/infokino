const cutNote = ( text, limit ) => {
     text = text.trim();
     if( text.length <= limit) return text;
     text = text.slice( 0, limit);
     let lastSpace = text.lastIndexOf(" ");

     if( lastSpace > 0) {
          text = text.substr(0, lastSpace);
     }
     return text + "...";
}


export default cutNote;