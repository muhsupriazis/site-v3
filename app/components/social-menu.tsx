import { Xicon } from "./icon/x";
import { ModeToggle } from "./theme-toggle";

export function Social() {
  return (
    <div className="flex space-x-2">
      <div className="block md:hidden">
        <Xicon />
      </div>
      <ModeToggle />
    </div>
  )
}
