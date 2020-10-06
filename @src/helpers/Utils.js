

export function classNames(...classNames) {
    return classNames.join(' ');
}

export function toggleBodyClass(className, isActive) {
    if (isActive) {
        document.body.classList.add(className)
    } else {
        document.body.classList.remove(className)
    }
}