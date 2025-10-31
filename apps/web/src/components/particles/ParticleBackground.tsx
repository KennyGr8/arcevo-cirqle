"use client";
import { useState } from "react";
import Particles from "@tsparticles/react";
import { particleMap } from "@/lib/particles";
import ParticleSelector from "./ParticleSelector";
import CustomParticleForm from "./CustomParticleForm";
import type { ISourceOptions } from "tsparticles-engine";

export default function ParticleBackground() {
  const [preset, setPreset] = useState("default");
  const [customOptions, setCustomOptions] = useState<ISourceOptions>(particleMap.default);

  const currentOptions =
    preset === "custom" ? customOptions : particleMap[preset] ?? particleMap.default;

  return (
    <div className="relative w-full h-full space-y-4">
      <ParticleSelector value={preset} onChange={setPreset} />

      {preset === "custom" && (
        <CustomParticleForm onUpdate={(opts) => setCustomOptions(opts)} />
      )}

      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" options={currentOptions} />
      </div>
    </div>
  );
}
