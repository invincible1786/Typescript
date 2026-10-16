// interfaces get merged

interface ChaiRatings {
    [flavor: string]: number;
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
};

interface A { a: string }
interface B { b: string }

interface C extends A, B {}