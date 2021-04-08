import { JavaScript } from "./JavaScript"
import { MyFitnessJourney } from "./MyFitnessJourney"
import React from 'react';

export const blogsList = [
    // {
    //     id: 1,
    //     icon: "JS",
    //     title: "What is JavaScript",
    //     created_on: "02/20/2020",
    //     body: <JavaScript/>
    // },
    {
        id: 2,
        icon: "Fitness",
        title: "My fitness journey",
        created_on: "02/28/2020",
        body: <MyFitnessJourney/>
    }
]

export const urlMappings = {
    // "what-is-javascript": 1,
    "my-fitness-journey" : 2
}