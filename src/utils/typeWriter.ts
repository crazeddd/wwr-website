import { createSignal } from "solid-js";

const typeWriter = (speed: number, variance: number) => {
    const [word, setWord] = createSignal<string>("");

    const typeWord = async (word: string) => {
        return new Promise((resolve) => {
            const chars = word.split("");
            for (let i = 0; i < chars.length; i++) {
                let rand = Math.random() * variance;
                setTimeout(() => {
                    setWord(prev => prev + chars[i]);
                }, i * speed + rand)
            }
            setTimeout(() => resolve(""), chars.length * speed + 2500)
        })
    }

    const deleteWord = async (word: string) => {
        return new Promise((resolve) => {
            const chars = word.split("");
            for (let i = 0; i < chars.length; i++) {
                let rand = Math.random() * variance;
                setTimeout(() => {
                    setWord(prev => prev.slice(0, -1));
                }, i * speed + rand)
            }
            setTimeout(() => resolve(""), chars.length * speed + 250)
        })
    }

    const clearWord = () => {
        setWord("");
    }

    return { word, typeWord, deleteWord, clearWord };
}

export { typeWriter };