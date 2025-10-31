"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { particleOptionsList } from "@/lib/particles";

interface ParticleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ParticleSelector({ value, onChange }: ParticleSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium">Particle Type</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a particle style" />
        </SelectTrigger>
        <SelectContent>
          {particleOptionsList.map((key) => (
            <SelectItem key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
