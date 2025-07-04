import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Header = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { text: "TheXP" },
    { text: "World Of The Machine" },
    { text: "Innovations & world first" },
    { text: "Team" },
    { text: "Roadmap" },
  ];

  return (
    <header className="w-full">
      <div className="flex items-center justify-around gap-2 px-[60px] py-7 bg-[#010116]">
        <div className="flex w-full max-w-[1200px] items-center justify-between relative">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-7">
              <NavigationMenuItem>
                <img
                  className="w-[75.1px] h-[30px]"
                  alt="Logo theexpai"
                  src="/logo-theexpai.svg"
                />
              </NavigationMenuItem>

              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="font-item-nav-menu font-[number:var(--item-nav-menu-font-weight)] text-grey-200 text-[length:var(--item-nav-menu-font-size)] tracking-[var(--item-nav-menu-letter-spacing)] leading-[var(--item-nav-menu-line-height)] [font-style:var(--item-nav-menu-font-style)]">
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-end gap-4">
            <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
              <img
                className="w-8 h-8"
                alt="Icon discord"
                src="/icon-discord.svg"
              />
            </Button>

            <Button className="px-6 py-[15px] rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)]">
              <span className="font-CTA-text-small-12px font-[number:var(--CTA-text-small-12px-font-weight)] text-white text-[length:var(--CTA-text-small-12px-font-size)] tracking-[var(--CTA-text-small-12px-letter-spacing)] leading-[var(--CTA-text-small-12px-line-height)] whitespace-nowrap [font-style:var(--CTA-text-small-12px-font-style)]">
                MINT NOW
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1260px] mx-auto text-center font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
        <span className="font-[number:var(--desktop-h3-title-font-weight)] leading-[var(--desktop-h3-title-line-height)] font-desktop-h3-title [font-style:var(--desktop-h3-title-font-style)] tracking-[var(--desktop-h3-title-letter-spacing)] text-[length:var(--desktop-h3-title-font-size)]">
          THEXP.AI{" "}
        </span>
        <span className="font-desktop-h3-title text-[length:var(--desktop-h3-title-font-size)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)] font-[number:var(--desktop-h3-title-font-weight)] tracking-[var(--desktop-h3-title-letter-spacing)]">
          presents
        </span>
      </div>
    </header>
  );
};