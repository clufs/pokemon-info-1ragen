import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
        alt="Icono de Pokemon"
        width={70}
        height={70}
      />
      <NextLink href="/">
        <Link href="/">
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer
        css={{
          flex: 1,
        }}
      />

      <NextLink href="/favorites">
        <Link href="/favorites">
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
