/**
 * Auther: Bilal Saad
 * Title: Shapes of 3 Bars
 * MIT license
 * Year: 2023
 */


// Menu to X
gsap.to("#topBar", { rotation: 45, y: 128, duration: 1 });
gsap.to("#centerBar", { opacity: 0, duration: 1 });
gsap.to("#downBar", { rotation: -45, y: -128, duration: 1 });

// X to Menu
gsap.to("#topBar", { rotation: 0, y: 0, duration: 1, delay: 2 });
gsap.to("#centerBar", { opacity: 1, duration: 1, delay: 2 });
gsap.to("#downBar", { rotation: 0, y: 0, duration: 1, delay: 2 });

// Menu to +
gsap.to("#topBar", { rotation: 90, y: 128, duration: 1, delay: 4 });
gsap.to("#centerBar", { opacity: 0, duration: 1, delay: 4 });
gsap.to("#downBar", { rotation: 0, y: -128, duration: 1, delay: 4 });

// + to Menu
gsap.to("#topBar", { rotation: 0, y: 0, duration: 1, delay: 6 });
gsap.to("#centerBar", { opacity: 1, duration: 1, delay: 6 });
gsap.to("#downBar", { rotation: 0, y: 0, duration: 1, delay: 6 });

// Menu to ||
gsap.to("#topBar", { rotation: 90, x: 64, y: 128, duration: 1, delay: 8 });
gsap.to("#centerBar", { opacity: 0, duration: 1, delay: 8 });
gsap.to("#downBar", { rotation: 90, x: -64, y: -128, duration: 1, delay: 8 });

// || to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 10 });
gsap.to("#centerBar", { opacity: 1, duration: 1, delay: 10 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 10 });

// Menu to |||
gsap.to("#topBar", { rotation: 90, x: 128, y: 128, duration: 1, delay: 12 });
gsap.to("#centerBar", { rotation: 90, x: 0, y: 0, duration: 1, delay: 12 });
gsap.to("#downBar", { rotation: 90, x: -128, y: -128, duration: 1, delay: 12 });

// ||| to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 14 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 14 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 14 });

// Menu to Stair
gsap.to("#topBar", { rotation: 0, x: 128, duration: 1, delay: 16 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 16 });
gsap.to("#downBar", { rotation: 0, x: -128, y: 0, duration: 1, delay: 16 });

// Stair to Menu
gsap.to("#topBar", { rotation: 0, x: 0, duration: 1, delay: 18 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 18 });
gsap.to("#downBar", { rotation: 0, x: -0, y: 0, duration: 1, delay: 18 });

// Menu to Negtive Stair
gsap.to("#topBar", { rotation: 0, x: -128, duration: 1, delay: 20 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 20 });
gsap.to("#downBar", { rotation: 0, x: 128, y: 0, duration: 1, delay: 20 });

// Negtive Stair to Menu
gsap.to("#topBar", { rotation: 0, x: 0, duration: 1, delay: 22 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 22 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 22 });

// Menu to N
gsap.to("#topBar", { rotation: 90, x: 128, y: 128, duration: 1, delay: 24 });
gsap.to("#centerBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 24 });
gsap.to("#downBar", { rotation: 90, x: -128, y: -128, duration: 1, delay: 24 });

// N to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 26 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 26 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 26 });

// Menu to Z
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 28 });
gsap.to("#centerBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 28 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 28 });

// Z to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 30 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 30 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 30 });

// Menu to -
gsap.to("#topBar", { opacity: 0, duration: 1, delay: 32 });
gsap.to("#centerBar", { opacity: 1, duration: 1, delay: 32 });
gsap.to("#downBar", { opacity: 0, duration: 1, delay: 32 });

// - to Menu
gsap.to("#topBar", { opacity: 1, duration: 1, delay: 34 });
gsap.to("#centerBar", { opacity: 1, duration: 1, delay: 34 });
gsap.to("#downBar", { opacity: 1, duration: 1, delay: 34 });

// Menu to ///
gsap.to("#topBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 36 });
gsap.to("#centerBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 36 });
gsap.to("#downBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 36 });

// /// to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 38 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 38 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 38 });

// Menu to \\\
gsap.to("#topBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 40 });
gsap.to("#centerBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 40 });
gsap.to("#downBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 40 });

// \\\ to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 42 });
gsap.to("#centerBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 42 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 42 });

// Menu to <
gsap.to("#topBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 44 });
gsap.to("#centerBar", { opacity: 0, duration: 1, delay: 44 });
gsap.to("#downBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 44 });

// < to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 46 });
gsap.to("#centerBar", { opacity: 1, x: 0, y: 0, duration: 1, delay: 46 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 46 });

// Menu to >
gsap.to("#topBar", { rotation: 45, x: 0, y: 0, duration: 1, delay: 48 });
gsap.to("#centerBar", { opacity: 0, duration: 1, delay: 48 });
gsap.to("#downBar", { rotation: -45, x: 0, y: 0, duration: 1, delay: 48 });

// > to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 50 });
gsap.to("#centerBar", { opacity: 1, x: 0, y: 0, duration: 1, delay: 50 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 50 });

// Menu to =
gsap.to("#topBar", { rotation: 0, x: 0, y: 64, duration: 1, delay: 52 });
gsap.to("#centerBar", { opacity: 0, x: 0, y: 0, duration: 1, delay: 52 });
gsap.to("#downBar", { rotation: 0, x: 0, y: -64, duration: 1, delay: 52 });

// = to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 54 });
gsap.to("#centerBar", { opacity: 1, x: 0, y: 0, duration: 1, delay: 54 });
gsap.to("#downBar", { rotation: 0, x: 0, y: 0, duration: 1, delay: 54 });

// Menu to A
gsap.to("#topBar", { rotation: 45, x: 128, y: 128, duration: 1 , delay: 56 });
gsap.to("#centerBar", { opacity: 1, duration: 1 , delay: 56 });
gsap.to("#downBar", { rotation: -45, x: -128, y: -128, duration: 1 , delay: 56 });

// A to Menu
gsap.to("#topBar", { rotation: 0, x: 0, y: 0, duration: 1 , delay: 58 });
gsap.to("#centerBar", { opacity: 1, duration: 1 , delay: 58 });
gsap.to("#downBar", { rotation: -0, x: -0, y: -0, duration: 1 , delay: 58 });