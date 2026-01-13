import { Component } from "solid-js";
import { onMount } from "solid-js";
import gsap from "gsap";

const Cover: Component = () => {
    onMount(() => {
        const pixelSize = window.innerWidth / 10;
        const canvas = document.getElementById("cover") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d")!;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cols = Math.ceil(canvas.width / pixelSize);
        const rows = Math.ceil(canvas.height / pixelSize);
        const totalPixels = cols * rows;

        const pixels: { x: number; y: number; opacity: number }[] = [];

        for (let i = 0; i < totalPixels; i++) {
            const x = (i % cols) * pixelSize;
            const y = Math.floor(i / cols) * pixelSize;
            pixels.push({ x, y, opacity: 1 });
        }

        gsap.to(pixels, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: {
                each: 0.01,
                from: "random",
            },
            onUpdate: () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                pixels.forEach((pixel) => {
                    ctx.fillStyle = `rgba(237, 237, 237, ${pixel.opacity})`;
                    ctx.fillRect(pixel.x, pixel.y, pixelSize, pixelSize);
                    ctx.strokeStyle = `rgba(237, 237, 237, ${pixel.opacity})`;
                    ctx.strokeRect(pixel.x, pixel.y, pixelSize, pixelSize);
                });
            },
            onComplete: () => {
                canvas.style.display = "none";
            },
        });
    });

    return <canvas id="cover"></canvas>;
}

export default Cover;