"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { ISourceOptions } from "tsparticles-engine";

interface CustomParticleFormProps {
  onUpdate: (options: ISourceOptions) => void;
}

export default function CustomParticleForm({ onUpdate }: CustomParticleFormProps) {
  const [colors, setColors] = useState(["#0ea5e9", "#6366f1", "#a855f7"]);
  const [speed, setSpeed] = useState(1);
  const [shape, setShape] = useState("circle");

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const handleApply = () => {
    const customConfig: ISourceOptions = {
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: colors },
        shape: { type: shape },
        move: { enable: true, speed, outModes: { default: "out" } },
        links: { enable: true, color: "#94a3b8", opacity: 0.4, distance: 120 },
        number: { value: 40 },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 80, duration: 0.4 } },
      },
      detectRetina: true,
    };

    onUpdate(customConfig);
  };

  return (
    <div className="space-y-4 mt-4 border p-4 rounded-md bg-gray-900/40">
      <div className="grid grid-cols-3 gap-2">
        {colors.map((color, i) => (
          <div key={i} className="flex flex-col items-center">
            <Label>Color {i + 1}</Label>
            <Input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(i, e.target.value)}
              className="w-16 h-8 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Label>Speed</Label>
        <Input
          type="number"
          min={0.1}
          max={10}
          step={0.1}
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          className="w-24"
        />
      </div>

      <div className="flex items-center gap-2">
        <Label>Shape</Label>
        <Input
          type="text"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          placeholder="circle, star, square..."
          className="w-32"
        />
      </div>

      <Button onClick={handleApply}>Apply Custom Settings</Button>
    </div>
  );
}
