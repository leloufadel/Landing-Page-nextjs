import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link  from "next/link";

import { AlignJustify } from "lucide-react";

const ActionButton = () => {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full mt-10 text-lg text-black">
                  <Link href="/"> Sign In</Link>
                  <Link href="/"> Get Started</Link>
                  <Link href="/"> Features</Link>
                  <Link href="/"> Pricing</Link>
                  <Link href="/"> About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ActionButton;
