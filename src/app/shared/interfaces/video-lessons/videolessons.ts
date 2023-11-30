import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface VideoLessons {
        id: number;
    title: string;
    subtitle?: string;
    videoPrincipal: string;
    videoSecondary: string;
    image?: string;
    urlSafePrincipal?:SafeResourceUrl
    urlSafeSecondary?:SafeResourceUrl
   

}


export function returnValues(): VideoLessons[] {
    var videoLessons :VideoLessons[] = [{
    id:1,title: 'BEST PART - Daniel Caesar (feat. H.E.R.) (aula de violão) | Como tocar no violão', subtitle:'Aqui temos uma vídeo-aula de uma música, e ao lado sua reprodução na prática, mostrando como faz e dando um direcionamento de como tocá-la.',
    videoPrincipal:'https://www.youtube.com/embed/6HfOwnrwZsk?si=07kZ9l4eKQ8gbw1x', videoSecondary:'https://www.youtube.com/embed/57CvkX6eoGs?si=0nhukMYNwxmVE9PI',image:'https://i.ytimg.com/vi_webp/6HfOwnrwZsk/sddefault.webp'
   },{
    id:2,title: 'Vanessa Rangel - Palpite', subtitle:'Aprenda com o Cifra Club TV a vídeo aula da música Exagerado, do Cazuza. Essa é a vídeo-aula simplificada, com acordes mais fáceis para o iniciante que está aprendendo.',
    videoPrincipal:'https://www.youtube.com/embed/_uKRb5VS6PE?si=RxTR-onq9JsWyE_x', videoSecondary:'',image:'https://i.ytimg.com/vi/_uKRb5VS6PE/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGGUgXyhTMA8=&rs=AOn4CLCy1zTkmv_v1HEWT7Z4C6hzH0RQnw'
   }];
   return videoLessons;
}


