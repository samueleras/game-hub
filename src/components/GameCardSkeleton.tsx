import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card maxW="100%" overflow={"hidden"}>
      <Skeleton>
        <img src="" alt="" width={"600px"} height={"400px"} />
      </Skeleton>
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
