import path from "path";

// Resolve paths from the root of the project
export const resolveFromRoot = (...segments) => path.resolve(process.cwd(), ...segments);
