/**
 * Template Literal Type
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
// type ColoredAnimal = "reds-dog" | "reds-cat" | "reds-chicken" | "black-dog";
type ColoredAnimal = `${Color}-${Animal}`;

// const coloredAnimal : ColoredAnimal = ''
//const coloredAnimal: "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
