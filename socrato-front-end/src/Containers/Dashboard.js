import React from 'react'
import "../Style/Dashboard.css"
import { ChatRoom, NavBarAuth } from '../Components'

let lastUpdated = 15

// let todaysCategory ;
// let todaysTopic = "todays topic!";

let todaysDate = new Date();

todaysDate = todaysDate.getDate()

if (todaysDate !== lastUpdated) {
    lastUpdated = todaysDate
}

const conversationStarters = [
    {id: 1, category: "funny", starter: "If you were in a circus, which character would you be?"},
    {id: 2, category: "deep", starter: "What are the top three things on your bucket list?"},
    {id: 3, category: "dinnerParty", starter: "If you could have dinner with anyone living or not, who would it be?"},
    {id: 4, category: "casual", starter: "If someone offered to tell you your future, would you accept it?"},
    {id: 5, category: "networking", starter: "What was the first job you ever had?"},
    {id: 6, category: "familyGathering", starter: "What time period would you travel to?"},
    {id: 7, category: "funny", starter: "What is the worst advice you have given?"},
    {id: 8, category: "deep", starter: "If you could ask for a miracle, what would it be?"},
    {id: 9, category: "dinnerParty", starter: "What is the silliest thing you’ve posted online?"},
    {id: 10, category: "casual", starter: "Who’s your biggest hero?"},
    {id: 11, category: "networking", starter: "What cool conferences have you attended?"},
    {id: 12, category: "familyGathering", starter: "What is one thing you can’t live without?"},
    {id: 13, category: "funny", starter: "What is one thing you should never say at a wedding?"},
    {id: 14, category: "deep", starter: "What is the biggest risk you’ve ever taken?"},
    {id: 15, category: "dinnerParty", starter: "What is the best restaurant you’ve been to?"},
    {id: 16, category: "networking", starter: "What’s the most fun project you’ve ever worked on?"},
    {id: 17, category: "familyGathering", starter: "What is your earliest memory?"},
    {id: 18, category: "familyGathering", starter: "What’s the nicest thing a family member has ever done for you?"},
    {id: 19, category: "funny", starter: "What is the worst pickup line you have ever heard?"},
    {id: 20, category: "deep", starter: "If someone gave you an envelope with your death date inside of it, would you open it?"},
    {id: 21, category: "dinnerParty", starter: "Who would you swap lives with for a day?"},
    {id: 22, category: "casual", starter: "Have you ever stolen anything?"},
    {id: 23, category: "networking", starter: "Have you ever won an award?"},
    {id: 24, category: "familyGathering", starter: "If you could be any age, what age would you choose?"},
    {id: 25, category: "funny", starter: "If you could only store one type of food in your pocket, what would you carry?"},
    {id: 26, category: "deep", starter: "What book had a big influence on you?"},
    {id: 27, category: "dinnerParty", starter: "What is the funniest gift you have ever given?"},
    {id: 28, category: "casual", starter: "What makes you really angry?"},
    {id: 29, category: "networking", starter: "How old were you when you had your first job?"},
    {id: 30, category: "familyGathering", starter: "When is the last time you laughed so hard that you cried?"},
    {id: 31, category: "funny", starter: "What is the worst present you have ever received and why?"}    
]

export default function Dashboard() {

    return (
        <div>
            <NavBarAuth />
            <h1 className="dashboard-greeting">Hello, welcome to Socrato</h1>
            <div className = "dashboard-todays-topic-container">
            <h2 className="dasboard-todays-topic-title">Today's topic</h2>
            <h2 className="dasboard-todays-topic-question">{conversationStarters[lastUpdated].starter}</h2>
            </div>
            <ChatRoom />
        </div>
    )
}
