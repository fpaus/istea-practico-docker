import {stdin, stdout} from "node:process";
import { createInterface } from "node:readline/promises";


const rl = createInterface({
	input: stdin,
	output: stdout
});

const answer = await rl.question("What's your name? ");

console.log(`Hello, ${answer}`);

rl.close();
