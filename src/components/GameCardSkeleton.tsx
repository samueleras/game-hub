import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card maxW="100%" overflow={"hidden"} width="100%">
      <Skeleton>
        <img src="" alt="" height={"400px"} width={"600px"} />
      </Skeleton>
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
