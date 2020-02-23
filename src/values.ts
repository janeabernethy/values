import workPuzzle from './Images/WorkPuzzle.png';
import corePuzzle from './Images/CorePuzzle.png'; 
import leadershipPuzzle from './Images/LeadershipPuzzle.png'; 
import relationshipPuzzle from './Images/RelationshipPuzzle.png'; 
import healthPuzzle from './Images/HealthPuzzle.png'; 


export interface Value {
    key: string,
    name: string,
    description: string,
    options: Array<string>,
    class: string,
    image: string,
}

export var workValues = {
    key: "work",
    name: "Work",
    description: "What is important to me in my career?",
    options: [],
    class: "workOption",
    image: workPuzzle
} as Value

export var coreLifeValues = {
    key: "core",
    name: "Core Life",
    description: "What is important to me in my life?",
    options: [],
    class: "coreOption",
    image: corePuzzle,
} as Value

export var leadershipValues = {
    key: "leadership",
    name: "Leadership",
    description: "What is important to me in leadership style?",
    options: [],
    class: "leadershipOption",
    image: leadershipPuzzle
} as Value

export var relationshipValues = {
    key: "relationships",
    name: "Relationship",
    description: "What is important to me in my relationship?",
    options: [],
    class: "relationshipOption",
    image: relationshipPuzzle
} as Value


export var wellnessValues = { 
    key: "wellness", 
    name: "Health & Wellness", 
    description: "What is important to me in health & fitness?",
    options: [],
    class: "welnessOption",
    image: healthPuzzle } as Value

export function getValues(): Array<Value> {
    return [
        coreLifeValues,
        workValues,
        leadershipValues,
        wellnessValues,
        relationshipValues,
    ]
}