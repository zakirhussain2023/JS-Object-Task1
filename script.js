let card={
    title:"UI/UX Designer",
    icon:"*****",
    subHead1:"Tech-Stack Covered",
    cont1:"Adobe Photoshop, Adobe XD, Figma, Adobe Illustrator, Responsive Design, Design Thinking, Usability Testing.",
    subHead2:"Financing options	",
    cont2:"Month-to-month Installments",
    subHead3:"Average Salary",
    cont3:"3 LPA",
    subHead4:"Batch Size / Branch",
    cont4:"10",
    subHead5:"Program Duration",
    cont5:"3 Months",
    subHead6:"Learning Mode",
    cont6:"Classroom / Online",
    link:"www.fabevy.com",
    linkValue:"Learn More"
}

var card_title=document.createElement('h1');
    card_icon=document.createElement('i');
    card_subHead1=document.createElement('h2');
    card_cont1=document.createElement('p');
    card_subHead2=document.createElement('h2');
    card_cont2=document.createElement('p');
    card_subHead3=document.createElement('h2');
    card_cont3=document.createElement('p');
    card_subHead4=document.createElement('h2');
    card_cont4=document.createElement('p');
    card_subHead5=document.createElement('h2');
    card_cont5=document.createElement('p');
    card_subHead6=document.createElement('h2');
    card_cont6=document.createElement('p');
    card_link=document.createElement('a');
    card_div=document.createElement('div')

    card_title.innerHTML=card.title;
    card_icon.innerHTML=card.icon;
    card_subHead1.innerHTML=card.subHead1;
    card_cont1.innerHTML=card.cont1
    card_subHead2.innerHTML=card.subHead2;
    card_cont2.innerHTML=card.cont2
    card_subHead3.innerHTML=card.subHead3;
    card_cont3.innerHTML=card.cont3
    card_subHead4.innerHTML=card.subHead4;
    card_cont4.innerHTML=card.cont4
    card_subHead5.innerHTML=card.subHead5;
    card_cont5.innerHTML=card.cont5
    card_subHead6.innerHTML=card.subHead6;
    card_cont6.innerHTML=card.cont6
    card_link.innerHTML=card.linkValue;

    card_title.setAttribute('class','title')
    card_icon.setAttribute('class','icon')
    card_subHead1.setAttribute('class','subhead1')
    card_cont1.setAttribute('class','content1')
    card_subHead2.setAttribute('class','subhead2')
    card_cont2.setAttribute('class','content2')
    card_subHead3.setAttribute('class','subhead3')
    card_cont3.setAttribute('class','content3')
    card_subHead4.setAttribute('class','subhead4')
    card_cont4.setAttribute('class','content4')
    card_subHead5.setAttribute('class','subhead5')
    card_cont5.setAttribute('class','content5')
    card_subHead6.setAttribute('class','subhead6')
    card_cont6.setAttribute('class','content6')
    card_link.setAttribute('href',card.link);
    card_div.setAttribute('class','card')

    card_div.appendChild(card_title)
    card_div.appendChild(card_icon);
    card_div.appendChild(card_subHead1)
    card_div.appendChild(card_cont1)
    card_div.appendChild(card_subHead2)
    card_div.appendChild(card_cont2)
    card_div.appendChild(card_subHead3)
    card_div.appendChild(card_cont3)
    card_div.appendChild(card_subHead4)
    card_div.appendChild(card_cont4)
    card_div.appendChild(card_subHead5)
    card_div.appendChild(card_cont5)
    card_div.appendChild(card_subHead6)
    card_div.appendChild(card_cont6)
    card_div.appendChild(card_link)

    var info=document.getElementById("card-info")
    info.appendChild(card_div)

    

    

   

