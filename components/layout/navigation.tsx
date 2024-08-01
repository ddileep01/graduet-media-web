import * as React from "react";
import { HStack, Button, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import siteConfig from "data/config";
import { NavLink } from "components/nav-link";
import { useScrollSpy } from "hooks/use-scrollspy";
import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack
      spacing="2"
      flexShrink={0}
      fontFamily="'Figtree', sans-serif"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        {siteConfig.header.links.map(({ href, id, label, ...props }, i) => {
          if (label === 'Book Now') {
            return null; 
          }

          return (
            <Box key={i} display="flex" alignItems="center">
              <NavLink
                display={["none", null, "block"]}
                href={href || `/#${id}`}
                isActive={
                  !!(
                    (id && activeId === id) ||
                    (href && !!router.asPath.match(new RegExp(href)))
                  )
                }
                {...props}
              >
                {label}
              </NavLink>
            </Box>
          );
        })}
      </Box>

      <NextLink href={siteConfig.header.links.find(link => link.label === 'Book Now')?.href || '/'} passHref>
        <Button
          background="#ED8936"
          color="#ffffff"
          size="sm"
          display={{ base: "none", md: "inline-flex" }} 
          _hover={{
            background: "#D97706",
            color: "#ffffff",
          }}
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 'bold',
            borderRadius: 'full',
          }}
        >
          Book Now
        </Button>
      </NextLink>

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;
