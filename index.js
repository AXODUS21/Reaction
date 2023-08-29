let topBlob = document.querySelector(".top-blob");
let leftBlob = document.querySelector(".left-blob");
let rightBlob = document.querySelector(".right-blob");
let playButton = document.querySelector(".play-button");
let text = document.querySelector(".text");
let icon = document.querySelector(".icon")
let answer = document.querySelector(".answer-text")


function start(){
   topBlob.style.visibility = "visible";
   leftBlob.style.visibility = "visible"; 
   rightBlob.style.visibility = "visible";
   text.style.visibility = "visible";
}

function changeProperty(blobClicked) {
    if (blobClicked === "top") {
      answer.innerText = `
      1. Why do you think research is essential in our daily lives?

        Research expands our knowledge on something we don't know or something we already know.
        I think without research our comprehension on various topic would severly decrease compared to
        what we normally have. If we dont research or expand our understanding on certain topic we would only
        know a little about a lot that being said if that reality were to exist people with certain experties or
        professionals would not exist. This is why I think reasearch is essential in our daily lives
      `;
      leftBlob.style.visibility = "hidden";
      rightBlob.style.visibility = "hidden";
    } else if (blobClicked === "left") {
      answer.innerText = `
      2. Why is inquiry important in research?

        Inquiry is a very good way to help you back up your research or your data. When conducting
        a research it is very important to make sure that you also take into consideration the public interest,
        one way to gather that information is through inquiry. Inquiry means asking questions and to make sure
        that your research is viable you need to ask questions on people that really understand the matter or 
        people that can relate to the topic of your reseach.
      `;
      topBlob.style.visibility = "hidden";
      rightBlob.style.visibility = "hidden";
    } else if (blobClicked === "right") {
      answer.innerText = `
      3. What does it mean to be a researcher?

       I think as a researcher your role is to discover information or verifying information that is already out there.
       as a researcher you need to become someone that the people can trust since you are the source and you verify 
       the information people need to know that the output of your research can be trusted and it's already well 
       thought out. 
      `;
      leftBlob.style.visibility = "hidden";
      topBlob.style.visibility = "hidden";
    }
    playButton.style.visibility = "hidden";
    text.style.visibility = "hidden";
    console.log(blobClicked)
    expand()
    setTimeout(() => {
        retract()
    },20000)
}

function expand() {
    document.body.style.backgroundColor = "#FF0066";
}

function retract(){
    document.body.style.backgroundColor = "white";
    text.style.visibility = "visible";
    answer.innerText = "";
       topBlob.style.visibility = "visible";
       leftBlob.style.visibility = "visible";
       rightBlob.style.visibility = "visible";
}
