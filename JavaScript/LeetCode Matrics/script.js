document.addEventListener("DOMContentLoaded",()=>{
const searchButton=document.getElementById("search-button");
const usernameInput=document.getElementById("user-input");
const statsContainer=document.querySelector(".stats-container");
const easyProgressCircle=document.querySelector(".easy-container");
const mediumProgressCircle=document.querySelector(".medium-container");
const hardProgressCircle=document.querySelector(".hard-container");
const easyLabel=document.querySelector("#easy-label");
const mediumLabel=document.querySelector("#medium-label");
const hardLabel=document.querySelector("#hard-label");
const cardStatsContainer=document.querySelector(".stats-card")

function validateUsername(username){
    if(username.trim()===""){
        alert("Username should not be empty");
        return false
    }
    const regex=/^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching=regex.test(username);
    if(!isMatching){
        alert("Invalid UserName");
    }
    return isMatching;
}
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// const targetUrl = "https://leetcode.com/graphql";
// async function fetchTotalCounts(){
//     const response=await fetch(proxyUrl + targetUrl,{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({
//             query:`
//             { 
//             allQuestionCount{
//             difficulty
//             count 
//             }
            
//             }
//             `,
//         }),
//     });
//     if(!response.ok){
//         throw new Error("Unable to fetch Total Counts");
//     }
//     const data= await response.json();
//     return data.data.allQuestionsCount;

// }



async function fetchUserDeatils(username){
    const url=`https://codeit-api.onrender.com/api/leetcode/user/${username}`
    
    try{
        searchButton.innerText="Searching...";
        searchButton.disabled=true;
        cardStatsContainer.style.setProperty("display", "none");

        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Unable to fetch User Deatils");
        }
        const solvedData= await response.json();
        
        console.log(solvedData);

       displayUserData(solvedData);

       const cardData= [
        {label:"Name",value:solvedData.profile.realName},
        {label:"Overall Ranking",value:solvedData.profile.ranking},
        {label:"Easy Submission",value:solvedData.profile.realName},
        {label:"Easy Question Solved",value:solvedData.problemsSolved.easy},
        {label:"Medium Question Solved",value:solvedData.problemsSolved.medium},
        {label:"Hard Question Solved",value:solvedData.problemsSolved.hard},


       ]
       console.log(cardData)

       cardStatsContainer.innerHTML=cardData.map(data=>{
        return `<div class='cards'>
        <h3>${data.label}</h3>
        <p>${data.value}</p>
        </div>
        
        `
       }).join("")
         cardStatsContainer.style.setProperty("display", "grid");

       
    }
    catch(error){
        cardStatsContainer.innerHTML=`<p>No Data Found</p>`
    }
    finally{
        searchButton.innerHTML="Search"
        searchButton.disabled=false;
       

    }
}

function updateProgress(solved,total,label,circle){
    console.log("Inside Function")
    const percentage=(solved/total)*100;
    console.log(percentage)
    circle.style.setProperty("--progress-degree",`${percentage}%`);
    label.innerText=`${solved}/${total}`;


}

function displayUserData(solvedData){
    const totals = {
        All:4059,
        Easy: 966,
        Medium: 2117,
        Hard: 976
    };

    const totalQuestion=totals.All;
    const totalEasyQuestion=totals.Easy;
    const totalHardQuestion=totals.Hard;
    const totalMediumQuestion=totals.Medium;
    const solvedTotalQuestion=solvedData.problemsSolved.total;
    const solvedTotalEasyQuestion=solvedData.problemsSolved.easy;
    const solvedTotalMediumQuestion=solvedData.problemsSolved.medium;
    const solvedTotalHardQuestion=solvedData.problemsSolved.hard;

    // console.log(totalQuestion)
    // console.log(totalEasyQuestion);
    // console.log(totalHardQuestion);
    // console.log(totalMediumQuestion);
    // console.log(solvedTotalQuestion);
    // console.log(solvedTotaEasyQuestion);
    // console.log(solvedTotalMediumQuestiom);
    // console.log(solvedTotalHardQuestion);

    updateProgress(solvedTotalEasyQuestion,totalEasyQuestion,easyLabel,easyProgressCircle);
    updateProgress(solvedTotalMediumQuestion,totalMediumQuestion,mediumLabel,mediumProgressCircle);
    updateProgress(solvedTotalHardQuestion,totalHardQuestion,hardLabel,hardProgressCircle);
    // updateProgress(solvedTotaQuestion,totalQuestion,easyLabel,easyProgressCircle);


    


}

searchButton.addEventListener('click',()=>{
    const username=usernameInput.value;
    console.log(username)
    if(validateUsername(username)){
        fetchUserDeatils(username);
    }
})




})










