import MediaType from "../types/types";

export interface Event {
    event_id: string;
    evantName: string;
    media:Media[];
  }


  export interface Media {
    src: string;
    mediaType: MediaType
  }

  export interface picture {path:string
    style:string,
    position:string
  
  }
