export interface Value {
    name: string,
    description: string,
    options: Array<string>,
    planeLine?: string,
}

function workValues(): Value {
    return {
        name: "Work Values",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
        planeLine: "A"
    }
}

function coreLifeValues(): Value {
    return {
        name: "Core Life Values",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
    }
}

function leadershipValues(): Value {
    return {
        name: "Leadership Values",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
    }
}

function relationshipValues(): Value {
    return {
        name: "Relationship Values",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
    }
}

function wellnessValues(): Value {
    return {
        name: "Health & Wellness Values",
        description: "Our work values are what we care about at work and some other stuff too.",
        options: ["one", "two", "three", "four"],
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