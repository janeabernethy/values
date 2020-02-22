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

function workValues(): Value {
    return {
        key: "work",
        name: "Work",
        description: "What is important to me in my career?",
        options: ["one", "two", "three", "four"],
        class: "workOption",
        image: workPuzzle,
    }
}

function coreLifeValues(): Value {
    return {
        key: "core",
        name: "Core Life",
        description: "What is important to me in my life?",
        options: ["one", "two", "three", "four"],
        class: "coreOption",
        image: corePuzzle,
    }
}

function leadershipValues(): Value {
    return {
        key: "leadership",
        name: "Leadership",
        description: "What is important to me in leadership style?",
        options: ["one", "two", "three", "four"],
        class: "leadershipOption",
        image: leadershipPuzzle,
    }
}

function relationshipValues(): Value {
    return {
        key: "relationships",
        name: "Relationship",
        description: "What is important to me in my relationship?",
        options: ["one", "two", "three", "four"],
        class: "relationshipOption",
        image: relationshipPuzzle,
    }
}

function wellnessValues(): Value {
    return {
        key: "wellness",
        name: "Health & Wellness",
        description: "What is important to me in health & fitness?",
        options: ["one", "two", "three", "four"],
        class: "welnessOption",
        image: healthPuzzle,
    }
}

export function getValues(): Array<Value> {
    return [
        coreLifeValues(),
        workValues(),
        leadershipValues(),
        wellnessValues(),
        relationshipValues(),
    ]
}