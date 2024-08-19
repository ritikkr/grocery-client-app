import normal from "./normal"
import dark from "./normal"

const themes =  {
    normal,
    dark
}

export default function getTheme(theme){
    return themes[theme];
}