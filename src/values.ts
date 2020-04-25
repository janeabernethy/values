import workIcon from './Images/Home/CareerIcon.jpg';
import coreIcon from './Images/Home/CoreIcon.jpg'; 
import leadershipIcon from './Images/Home/LeadershipIcon.jpg'; 
import relationshipIcon from './Images/Home/RelationshipIcon.jpg'; 
import healthIcon from './Images/Home/HealthIcon.jpg'; 


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
    image: workIcon
} as Value

export var coreLifeValues = {
    key: "core",
    name: "Core Life",
    description: "What is important to me in my life?",
    options: [],
    class: "coreOption",
    image: coreIcon,
} as Value

export var leadershipValues = {
    key: "leadership",
    name: "Leadership",
    description: "What is important to me in leadership style?",
    options: [],
    class: "leadershipOption",
    image: leadershipIcon
} as Value

export var relationshipValues = {
    key: "relationships",
    name: "Relationship",
    description: "What is important to me in my relationship?",
    options: [],
    class: "relationshipOption",
    image: relationshipIcon
} as Value


export var wellnessValues = { 
    key: "wellness", 
    name: "Health & Wellness", 
    description: "What is important to me in health & fitness?",
    options: [],
    class: "welnessOption",
    image: healthIcon } as Value

export function getValues(): Array<Value> {
    return [
        coreLifeValues,
        workValues,
        leadershipValues,
        wellnessValues,
        relationshipValues,
    ]
}