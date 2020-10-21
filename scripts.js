const h2 = document.querySelector('h2')

function replace_text() {
    const allActivities = ["Take a short jog outside", "Do a couple pushups", "Do a couple jumping jacks", 
                            "Take a few deep breaths", "Yell into a pillow", "Read a book", "Eat a snack", 
                            "Compliment yourself", "Play a singleplayer game", "Start a friendly conversation with someone",
                            "Go to the gym", "Hug a stuffed animal/pillow/family member",
                            "Solve a sudoku/crossword/jigsaw puzzle", "Listen to some music", "Do some stretches",
                            "Meditate for a few minutes", "Remember a time when you were relaxed and enjoying yourself"]

    const exerciseActivities = ["Take a short jog outside", "Do a couple pushups", "Do a couple jumping jacks",
                                "Do some stretches"]

    const mentalActivities = ["Take a few deep breaths", "Yell into a pillow", "Compliment yourself",
                                "Meditate for a few minutes", "Remember a time when you were relaxed and enjoying yourself"]
                                
    const comfortActivities = ["Read a book", "Eat a snack", "Play a single player game", 
                                "Start a friendly conversation with someone", "Hug a stuffed animal/pillow/family member",
                                "Solve a sudoku/crossword/jigsaw puzzle", "Listen to some music"]

    const listChoice = Array.from(document.querySelectorAll('input[type=radio]'))
    let selectedList;
    listChoice.forEach((list) => {
        if (list.checked) {
            selectedList = list.value
        }
    })
    //console.log(selectedList)

    if (selectedList === "exercise"){
        const random = Math.floor(Math.random() * exerciseActivities.length)
        h2.innerText = exerciseActivities[random]
    }
    else if (selectedList === "mental"){
        const random = Math.floor(Math.random() * mentalActivities.length)
        h2.innerText = mentalActivities[random]
    }
    else if (selectedList === "comfort"){
        const random = Math.floor(Math.random() * comfortActivities.length)
        h2.innerText = comfortActivities[random]
    }
    else {
        const random = Math.floor(Math.random() * allActivities.length)
        h2.innerText = allActivities[random]
    }
}