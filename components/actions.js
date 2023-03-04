export const handleCursorHoverButtons = () => {
    let cursor = document.querySelector(".cursor");
    let cursorDot = document.querySelector(".innerCursor");

    cursorDot.classList.add("hoverDot")
    cursor.classList.add("hoverBorder")
  }

export const handleCursorOutButtons = () => {
    let cursor = document.querySelector(".cursor");
    let cursorDot = document.querySelector(".innerCursor");

    cursorDot.classList.remove("hoverDot")
    cursor.classList.remove("hoverBorder")
  }

export const handleCursorHoverLink = () => {
    let cursor = document.querySelector(".cursor");
    let cursorDot = document.querySelector(".innerCursor");

    cursorDot.classList.add("hoverDotLink")
    cursor.classList.add("hoverBorderLink")
  }

export const handleCursorOutLink = () => {
    let cursor = document.querySelector(".cursor");
    let cursorDot = document.querySelector(".innerCursor");

    cursorDot.classList.remove("hoverDotLink")
    cursor.classList.remove("hoverBorderLink")
  } 