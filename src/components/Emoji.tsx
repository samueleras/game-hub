import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullseye, alt: "exceptional", boxSize: "32px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    3: { src: meh, alt: "meh", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
