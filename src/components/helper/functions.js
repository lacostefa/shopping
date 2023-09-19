const shorten = (title) => {
    const splitedTitle = title.split("");
    const newSplited = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newSplited
}

export {shorten};