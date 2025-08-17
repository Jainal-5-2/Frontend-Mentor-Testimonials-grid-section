const data = [
     {
          img: "/images/image-daniel.jpg",
          name: 'Daniel Clifford',
          standing: 'Verified Graduate',
          title: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth",
          review: "\“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. \”"
     },
     {
          img: "images/image-jonathan.jpg",
          name: "Jonathan Walters",
          standing: "Verified Graduate",
          title: "The team was very supportive and kept me motivated",
          review: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”"

     },
     {
          img: "images/image-jeanette.jpg",
          name: "Jeanette Harmon",
          standing: "Verified Graduate",
          title: "An overall wonderful and rewarding experience",
          review: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
     },
     {
          img: "images/image-patrick.jpg",
          name: "Patrick Abrams",
          standing: "Verified Graduate",
          title: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
          review: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
     },
     {
          img: "images/image-kira.jpg",
          name: "Kira Whittle",
          standing: "Verified Graduate",
          title: "Such a life-changing experience. Highly recommended!",
          review: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
     }
]

const subContainer1 = document.querySelector(".sub-container1");
const subContainer2 = document.querySelector('.sub-container2')

function addProfile(testimonialObj, targetContainer) {
     const imgMainContainer = document.createElement('div');
     imgMainContainer.setAttribute('class', 'img-main-container')

     const imgContainer = document.createElement('div');
     imgContainer.setAttribute('class','img-container');
     
     const nameContainer = document.createElement('div');
     nameContainer.setAttribute('class','name-container');

     //img
     const profileimg = document.createElement("img");
     profileimg.setAttribute('src', testimonialObj.img);
     profileimg.setAttribute('class', 'profile-img');
     profileimg.setAttribute('alt', testimonialObj.img);

     //name
     const name = document.createElement('p');
     name.textContent = testimonialObj.name;
     name.setAttribute('class', 'name');

     //standing
     const standing = document.createElement('p');
     standing.textContent = testimonialObj.standing;
     standing.setAttribute('class', 'standing');

     //title
     const title = document.createElement('h2');
     title.textContent = testimonialObj.title;
     title.setAttribute('class', 'title');

     //review
     const review = document.createElement('p');
     review.textContent = testimonialObj.review;
     review.setAttribute('class', 'review');

     imgContainer.appendChild(profileimg);

     nameContainer.appendChild(name);
     nameContainer.appendChild(standing);

     imgMainContainer.appendChild(imgContainer);
     imgMainContainer.appendChild(nameContainer);

     targetContainer.appendChild(imgMainContainer);
     targetContainer.appendChild(title);
     targetContainer.appendChild(review);
}

function renderTestimonial() {
     const sub1Top = document.querySelector('.top');
     const sub1Bottom = document.querySelector('.bottom');

     for (let i = 0; i < data.length - 1; i++) {
          const testimonialContainer = document.createElement('div');
          testimonialContainer.setAttribute('class', 'testimonial-container');
          testimonialContainer.setAttribute('id', data[i].name.split(' ')[0] + '-testimonial');

          addProfile(data[i], testimonialContainer);

          if(i <= 1){
               sub1Top.appendChild(testimonialContainer);
          }else{
               sub1Bottom.appendChild(testimonialContainer);
          }
     }

     const testimonialContainer = document.createElement('div');
     testimonialContainer.setAttribute('class', 'testimonial-container');
     testimonialContainer.setAttribute('id', data[data.length - 1].name.split(' ')[0] + '-testimonial');
     
     addProfile(data[data.length - 1], testimonialContainer);
     subContainer2.appendChild(testimonialContainer);
}

function addQuote(){
     const quote = document.createElement('img');
     quote.setAttribute('src','images/bg-pattern-quotation.svg')
     quote.setAttribute('class','quote')

     document.querySelector('#Daniel-testimonial').appendChild(quote);
}

renderTestimonial();
addQuote();