
import React from "react";
import { Cat, Dog, Bird, Rabbit, BadgePlus } from "lucide-react";

const PetTypeIcon = ({ type }) => {
    switch (type) {
        case "dog":
            return <Dog className="h-5 w-5" />;
        case "cat":
            return <Cat className="h-5 w-5" />;
        case "bird":
            return <Bird className="h-5 w-5" />;
        case "rabbit":
            return <Rabbit className="h-5 w-5" />;
        default:
            return <BadgePlus className="h-5 w-5" />;
    }
};

export default PetTypeIcon;
