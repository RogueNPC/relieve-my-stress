const h2 = document.querySelector('h2')

function replace_text() {
    const activities = ["Take a short jog outside", "Do a couple pushups", "Do a couple jumping jacks", "Take a few deep breaths",
                        "Yell into a pillow", "Read a book", "Eat a snack", "Take a nap"]

    const random = Math.floor(Math.random() * activities.length)

    h2.innerText = activities[random]
}