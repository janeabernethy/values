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
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
        class: "workOption",
        image: workPuzzle,
    }
}

function coreLifeValues(): Value {
    return {
        key: "core",
        name: "Core Life",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
        class: "coreOption",
        image: corePuzzle,
    }
}

function leadershipValues(): Value {
    return {
        key: "leadership",
        name: "Leadership",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
        class: "leadershipOption",
        image: leadershipPuzzle,
    }
}

function relationshipValues(): Value {
    return {
        key: "relationships",
        name: "Relationship",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
        class: "relationshipOption",
        image: relationshipPuzzle,
    }
}

function wellnessValues(): Value {
    return {
        key: "wellness",
        name: "Health & Wellness",
        description: "Our work values are what we care about at work and some other stuff too.",
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