import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Button } from "@/components/UI/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export function FilterDropdown({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (v: string) => void;
}) {
  const hasActive = selected.length > 0;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-9 gap-1.5 rounded-xl border px-3 text-xs font-medium transition-all duration-200",
            "border-white/8 bg-white/4 text-zinc-400 hover:bg-white/8 hover:text-white text-base",
            hasActive &&
              "border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/15",
          )}
        >
          {label}
          {hasActive && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-500/30 text-base font-bold text-violet-200">
              {selected.length}
            </span>
          )}
          <ChevronDown size={12} className="opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-64 min-w-40 overflow-y-auto scrollbar-thin rounded-xl border border-white/8 bg-[#0F0F1A] p-1 shadow-2xl"
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-base text-zinc-600">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/6" />
        {options.map((opt) => (
          <DropdownMenuCheckboxItem
            key={opt}
            checked={selected.includes(opt)}
            onCheckedChange={() => onChange(opt)}
            className="cursor-pointer text-base rounded-lg px-2 py-1.5 text-zinc-400 focus:bg-white/6 focus:text-white data-[state=checked]:text-violet-300"
          >
            {opt}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
